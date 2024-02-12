import OtherModal from "../Modal/OtherModal";

import { ShowAllCatalogue } from "../IconComponents/IconsCatalogue";
import {
  CatalogueList,
  CatalogueBrandTitle,
  // CatalogueBrandText,
  CatalogueBrandButton,
} from "./CatalogueModal.styled";

const style = {
  position: "absolute",
  top: "38.5%",
  left: "64%",
  transform: "translate(-50%, -50%)",
  borderRadius: "12px",
  background: "var(--Primary-white, #fff)",
  padding: "22px 24px",
  width: "920px",
  height: "356px",
};

export type GoodsType = NonNullable<{ 
  nameOfGroup: string;
  hashtagsOfName: {
    catalogue: string;
    catalogueGroupSpecifications: [
      {
        title: string;
        hashTagsOfTitle: {
          brand: string;
          catalogue: string;
        };
      }
    ];
} }[]>;
// export type GoodsType = { brand: string; model: string[] }[];

type Props = {
  groupSpecifications: GoodsType;
  isOpen: boolean;
  handleClose: () => void;
};

const CatalogueModal = ({ groupSpecifications, isOpen, handleClose }: Props) => {
  // const visibles = false; //close btn prop

  return (
    <OtherModal
      isOpen={isOpen}
      handleClose={handleClose}
      style={style}
    >
      {/* <CatalogueList>
        {groupSpecifications.map(({ nameOfGroup, catalogueGroupSpecifications }) => (
          <li key={nameOfGroup}>
            <CatalogueBrandTitle>{nameOfGroup}</CatalogueBrandTitle>
            <ul>
              {catalogueGroupSpecifications.map(({title}) => (
                <CatalogueBrandText key={title}>
                  {title}
                </CatalogueBrandText>
              ))}
            </ul>
            <CatalogueBrandButton>
              <ShowAllCatalogue />
              Show All
            </CatalogueBrandButton>
          </li>
        ))}
      </CatalogueList> */}
            <CatalogueList>
        {groupSpecifications.map(({ nameOfGroup }) => (
          <li key={nameOfGroup}>
            <CatalogueBrandTitle>{nameOfGroup}</CatalogueBrandTitle>
            <CatalogueBrandButton>
              <ShowAllCatalogue />
              Show All
            </CatalogueBrandButton>
          </li>
        ))}
      </CatalogueList>
    </OtherModal>
  );
};
export default CatalogueModal;
