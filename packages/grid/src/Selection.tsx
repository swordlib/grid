import React, { memo } from "react";
import { SelectionProps } from "./Grid";
import { createHTMLBox } from "./utils";

const Selection: React.FC<SelectionProps> = memo((props) => {
  const {   // ignore, remove react warning
    inProgress,
    selection,
    borderStyle,
  ...rest
  } = props;

  return createHTMLBox({ strokeWidth: 1, ...rest });
});

export default Selection;
