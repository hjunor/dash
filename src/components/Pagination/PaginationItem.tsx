import { Button } from "@chakra-ui/react";
import { buttonPropsIsCurrent, buttonPropsIsNotCurrent } from "./styles.props";
interface IPaginationItem {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({ isCurrent = false, number }: IPaginationItem) {
  if (isCurrent) {
    return <Button {...buttonPropsIsCurrent}>{number}</Button>;
  }
  return <Button {...buttonPropsIsNotCurrent}>{number}</Button>;
}
