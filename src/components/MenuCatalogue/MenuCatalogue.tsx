import Slider from "../Slider/Slider";
import { Section } from "../../shared/Container/Container.styled";

import MenuCatalogueList from "./MenuCatalogueList";

import { DIV } from "./MenuCatalogue.styled";

const MenuCatalogue = () => {
  return (
    <Section>
      <DIV>
        <MenuCatalogueList />
        <Slider />
      </DIV>
    </Section>
  );
};

export default MenuCatalogue;
