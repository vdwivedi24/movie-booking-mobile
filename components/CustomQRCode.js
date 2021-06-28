import * as React from "react";

import { QRCode as CustomQRCode } from "react-native-custom-qr-codes-expo/index";

const CustomQRCodes = (props) => {
  return (
    <CustomQRCode
      codeStyle="circle"
      linearGradient={["black", "red"]}
      content={props.data}
    />
  );
};

export default CustomQRCodes;
