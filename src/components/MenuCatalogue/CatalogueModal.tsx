import Modal from "../Modal/Modal";

import { ShowAllCatalogue } from "../IconComponents/IconsCatalogue";
import {
  CatalogueList,
  CatalogueBrandTitle,
  CatalogueBrandText,
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
export type GoodsType = NonNullable<{ brand: string; model: [string] }[]>;
// export type GoodsType = { brand: string; model: string[] }[];

type Props = {
  goods: GoodsType;
  isOpen: boolean;
  handleClose: () => void;
};

const CatalogueModal = ({ goods, isOpen, handleClose }: Props) => {
  const visibles = false; //close btn prop

  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      visible={visibles}
      style={style}
    >
      <CatalogueList>
        {goods.map(({ brand, model }) => (
          <li key={brand}>
            <CatalogueBrandTitle>{brand}</CatalogueBrandTitle>
            <ul>
              {model.map((modelName) => (
                <CatalogueBrandText key={modelName}>
                  {modelName}
                </CatalogueBrandText>
              ))}
            </ul>
            <CatalogueBrandButton>
              <ShowAllCatalogue />
              Show All
            </CatalogueBrandButton>
          </li>
        ))}
      </CatalogueList>
    </Modal>
  );
};
export default CatalogueModal;
