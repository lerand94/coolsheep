import { createStore, createEffect, sample, restore, attach } from "effector";
import Web3 from "web3";
// import { chainId, address, ABI } from "../constants/contract";
import { chainId } from "../constants/contract";

const detectMetamask = async () => {
  return new Promise((rs, rj) => {
    const ok = () => {
      window.removeEventListener("ethereum#initialized", ok);

      const { ethereum } = window;
      if (!ethereum) return rj("Please install metamask");

      rs(ethereum);
    };

    if (window.ethereum) {
      ok();
    } else {
      window.addEventListener("ethereum#initialized", ok, {
        once: true,
      });

      setTimeout(() => {
        ok();
      }, 3000);
    }
  });
};

export const detectMetamaskFx = createEffect({
  handler: async () => {
    try {
      const ethereum = await detectMetamask();

      return ethereum;
    } catch (e) {
      return null;
    }
  },
});

export const errorMessageFx = createEffect({
  handler: (str) => {
    alert(str);
  },
});

detectMetamaskFx();
export const $ethereum = restore(detectMetamaskFx.doneData, null);
export const connectAccountFx = attach({
  effect: createEffect(async (ethereum) => {
    if (!ethereum)
      throw errorMessageFx(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    const account = await ethereum.request({ method: "eth_requestAccounts" });
    return account;
  }),
  source: $ethereum,
  mapParams: (_, eth) => eth,
});

export const $web3 = $ethereum.map((eth) => (eth && new Web3(eth)) || null);
export const web3GetAccountsFx = attach({
  effect: async (web3) => {
    if (!web3) return null;
    const accounts = await web3.eth.getAccounts();

    return accounts;
  },
  source: $web3,
  mapParams: (_, eth) => eth,
});

export const web3GetChainId = attach({
  effect: async (web3) => {
    if (!web3) return null;
    const chainId = await web3.eth.getChainId();

    return chainId;
  },
  source: $web3,
  mapParams: (_, eth) => eth,
});

export const $account = createStore(null)
  .on(
    web3GetAccountsFx.doneData,
    (_, accounts) => (accounts && accounts[0]) || null
  )
  .on(
    connectAccountFx.doneData,
    (_, accounts) => (accounts && accounts[0]) || null
  );

export const $accountNamePretty = $account.map((account) =>
  account
    ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
    : null
);
const $chainId = restore(web3GetChainId.doneData, null);
export const $isChainOK = $chainId.map((chain) => chain === chainId);
export const $isConnected = $account.map((account) => account !== null);
const hooksEngaged = detectMetamaskFx.doneData.watch((ethereum) => {
  if (ethereum) {
    window.ethereum.on("accountsChanged", () => web3GetAccountsFx());
    window.ethereum.on("chainChanged", () => web3GetChainId());
    hooksEngaged();
  }
});

// $account.watch(console.log);
// $isConnected.watch(console.log);
// connectAccountFx.done.watch(console.log);

sample({
  source: $web3,
  target: web3GetAccountsFx,
});

sample({
  source: $web3,
  target: web3GetChainId,
});
