import React from "react";
import Proptypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const component = ({
  classes,
  userName,
  coinName,
  coinValue,
  networkName,
  networkNumber
}) => (
  <div className={classes.headerHolder}>
    <div className={classes.headerProvider}>
      <Typography>{networkName}</Typography>
      <Typography>{networkNumber}</Typography>
    </div>

    <div className={classes.headerCoin}>
      <Typography variant="h4">{coinName}</Typography>
      <Typography>{coinValue}</Typography>
    </div>

    <div className={classes.headerUser}>
      <Typography color={"error"}> {userName} </Typography>
    </div>
  </div>
);

component.defaultProps = {
  userName: "",
  coinName: "",
  coinValue: "",
  networkName: "",
  networkNumber: ""
};

component.propTypes = {
  userName: Proptypes.string,
  coinName: Proptypes.string,
  coinValue: Proptypes.string,
  networkName: Proptypes.string,
  networkNumber: Proptypes.string,
  classes: Proptypes.object.isRequired
};

export default component;

export const WalletHeaderTestValue = {
  userName: "@dapperWallet",
  coinName: "ETH",
  coinValue: "$100",
  networkName: "mainnet",
  networkNumber: "7116124"
};
