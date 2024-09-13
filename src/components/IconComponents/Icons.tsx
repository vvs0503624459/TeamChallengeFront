import {
  IconPhone,
  IconLaptop,
  HeadPhones,
  Charge,
  IconTV,
  IconCamera,
  IconWatch,
  IconWashing,
  IconPercentage,
  IconRight,
} from "../../shared/IconsCatalogue";

import {Button} from './Icons.styled';

import { forwardRef } from "react";

type Props = {
  name: string;
};

export const Icons = forwardRef<HTMLButtonElement, Props>(
  ({ name }: Props, ref) => {
    const style = {
      display: "flex",
      border: "none",
      background: "transparent",
    };

    const obj: { [key: string]: JSX.Element } = {
      phone: <IconPhone />,
      laptop: <IconLaptop />,
      headphones: <HeadPhones />,
      charge: <Charge />,
      iconTV: <IconTV />,
      iconCamera: <IconCamera />,
      iconWatch: <IconWatch />,
      iconWashing: <IconWashing />,
      iconPercentage: <IconPercentage />,
      iconRight: <IconRight />,
    };

    return (
      <Button ref={ref} style={style}>
        {obj[name]}
      </Button>
    );
  }
);
