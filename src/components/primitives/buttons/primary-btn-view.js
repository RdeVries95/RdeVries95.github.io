// Architectural imports
import React from "react";
import Ripple from "./ripple";

// Styled imports
import { Button } from "./primary-btn-style";

const PrimaryBtn = (props) => {
  return (
    <Button>
      {props.children}
      <Ripple />
    </Button>
  );
};

export default PrimaryBtn;
