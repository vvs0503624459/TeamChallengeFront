// import MENU_CATEGORIES from "../../data/menucatalogue.json";
// import { Icons } from "../IconComponents/Icons";

import CatalogueModal from "./CatalogueModal";

import {
  MenuList,
  MenuItem,
  TextDiv,
  MenuTitle,
  // MenuButton,
} from "./MenuCatalogue.styled";
import { getCatalogue } from "../../redux/catalogue/catalogue-operation";
import { CatalogueState } from "../../redux/types/initialEntity";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { useToggle } from "@/redux/hooks/useToggle";

import { GoodsType } from "./CatalogueModal";

const MenuCatalogueList = () => {
  const dispatch = useAppDispatch();
  const { isOpen, open, close } = useToggle();

  useEffect(() => {
    dispatch(getCatalogue());
  }, [dispatch]);

  const catalogue: CatalogueState[] = useAppSelector((state) => {
    return state.catalogue.catalogueList;
  });

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleToggleTitle = (category: string) => {
    setSelectedCategory(category);
    open(); // Open the modal when a category is selected
  };

  // Код в компоненті MenuCatalogueList
  const goodsData =
    (selectedCategory &&
      (catalogue.find((category) => category.id === selectedCategory)
        ?.groupSpecifications as GoodsType)) ||
    [];
  return (
    <div>
      <MenuList>
        {catalogue.map(({ id, title }) => (
          <MenuItem key={id} onClick={() => handleToggleTitle(id)}>
            {/* <Icons name={icon} /> */}
            <TextDiv>
              <MenuTitle>{title}</MenuTitle>
              {/* <MenuButton>
                <Icons name={right} />
              </MenuButton> */}
            </TextDiv>
          </MenuItem>
        ))}
      </MenuList>
      {isOpen ? (
        <CatalogueModal
          isOpen={isOpen}
          handleClose={close}
          groupSpecifications={goodsData}
        />
      ) : null}
    </div>
  );
};

export default MenuCatalogueList;
