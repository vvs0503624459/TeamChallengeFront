import MENU_CATEGORIES from "../../data/menucatalogue.json";
import { Icons } from "../IconComponents/Icons";

import CatalogueModal from "./CatalogueModal";

import {
  MenuList,
  MenuItem,
  TextDiv,
  MenuTitle,
  MenuButton,
} from "./MenuCatalogue.styled";
import {getCatalogue} from '../../redux/catalogue/catalogue-operation'
import {CatalogueState} from '../../redux/types/initialEntity';
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

const MenuCatalogueList = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCatalogue())
  }, [dispatch])

  const catalogue: CatalogueState[] = useAppSelector((state) => {
    return state.catalogue.catalogueList
  })

  console.log("catalogueList", catalogue)

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleToggleTitle = (category:string) => {
    setSelectedCategory(category);
    setIsOpen(true); // Open the modal when a category is selected
  };

  return (
        <div>
          <MenuList>
            {MENU_CATEGORIES.map(({ id, icon, title, right }) => (
              <MenuItem key={id}>
                <Icons name={icon} />
                <TextDiv>
                  <MenuTitle>{title}</MenuTitle>
                  <MenuButton onClick={() => handleToggleTitle(id)}>
                    <Icons name={right} />
                  </MenuButton>
                </TextDiv>
              </MenuItem>
            ))}
          </MenuList>
          {isOpen ? (
            <CatalogueModal
              isOpen={isOpen}
              handleClose={() => setIsOpen(false)} // Close the modal
              goods={
                selectedCategory &&
                MENU_CATEGORIES.find(
                  (category) => category.id === selectedCategory
                )?.goods
              }
            />
          ) : null}
        </div>
  );
};

export default MenuCatalogueList;