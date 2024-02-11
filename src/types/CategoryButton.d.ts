export type CategoryButtonProps = {
    label: string;
    handleClick: (label: string) => void;
    active: { [key: string]: boolean };
  }