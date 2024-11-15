"use client";

import { type AccordionItemIndicatorProps } from "@jamsr-ui/react";
import { AddIcon, MinusIcon } from "@repo/icons";

export const AccordionIndicator = (props: AccordionItemIndicatorProps) => {
  const { isOpen } = props;
  return isOpen ? <MinusIcon /> : <AddIcon />;
};
