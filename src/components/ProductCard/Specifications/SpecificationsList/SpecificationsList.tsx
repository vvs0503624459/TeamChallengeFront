import { FC } from "react";
import { PropertyWrap, ListStyled, ItemStyled } from "./SpecificationsList.styled";
import { DevicesState } from "../../../../redux/types/initialEntity";
import { nanoid } from "nanoid";
import { DescriptionBtn } from "../DescriptionBtn/DescriptionBtn";

interface SpecificationsListProps {
  product: DevicesState;
}

export const SpecificationsList: FC<SpecificationsListProps> = ({ product }) => {
  const { specificationGroups } = product;

  return (
    <ListStyled>
      {specificationGroups.map((group) => (
        <ItemStyled key={nanoid()}>
          <p>{group.title}</p>

          {group.specifications.map(({ title, value, descriptionExtra }) => (
            <PropertyWrap key={nanoid()}>
              <p>{title}</p>
              <p>{value}</p>
              {descriptionExtra && <DescriptionBtn desc={descriptionExtra} />}
            </PropertyWrap>
          ))}
        </ItemStyled>
      ))}
    </ListStyled>
  );
};
