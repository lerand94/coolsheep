import classes from "./ConnectButton.module.css";
import {
  $accountNamePretty,
  $isConnected,
  connectAccountFx,
} from "../stores/web3";
import { useStore } from "effector-react";

const ConnectButton = (params) => {
  const isConnected = useStore($isConnected);
  const accountName = useStore($accountNamePretty);
  if (isConnected) {
    return <button className={classes.connect}>{accountName}</button>;
  }

  return (
    <button className={classes.connect} onClick={() => connectAccountFx()}>
      Connect Wallet
    </button>
  );
  // return <button className={classes.connect}>Connect Wallet</button>;
};

export default ConnectButton;
