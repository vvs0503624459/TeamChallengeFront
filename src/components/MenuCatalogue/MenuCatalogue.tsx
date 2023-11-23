import MENU_CATEGORIES from "../../data/menucatalogue.json";

import { Icons } from "../IconComponents/Icons";

import Slider from "../Slider/Slider";
import { Section } from "../../components/Container/Container.styled";
import { 
  DIV, 
  MenuList,
   MenuItem, 
   TextDiv,
   MenuTitle
   } from "./MenuCatalogue.styled";


const MenuCatalogue = ( ) => {

  return (
    <Section>
      <DIV>
        <div>
          <MenuList>
            {MENU_CATEGORIES.map(({ id, title }) => ( //icon, right
              <MenuItem key={id}>
                {/* <Icons name={icon}  />  */}
                   <Icons  /> 
                <TextDiv>
                <MenuTitle>{title}</MenuTitle>
                {/* <Icons name={right}  /> */}
                <Icons  /> 
                </TextDiv>
              </MenuItem>
            ))}
          </MenuList>
        </div>
        <Slider />
      </DIV>
    </Section>
  );
};
export default MenuCatalogue;


//    type MenuCategory = {
//     id: string;
//     title: string;
//     icon: string;
//     right: string;
// };
// type IconName = "phone" | "laptop" | "headphones" | "charge" | "iconTV" | "iconCamera" | "iconWatch" | "iconWashing" | "iconPercentage" | "iconRight";

// type Props = {
//     name: IconName;
// };

// import Select from 'react-select';

// const goods = [
//   {
//       "brand": "Apple"

//   },
//   {
//       "brand": "Audio"
//   },
//   {
//       "brand": "Laptops and PCs"
//   }
// ]

                {/* <Select
                classNamePrefix="Select"
                closeMenuOnSelect={true}
                isClearable={true}
                options={goods.map((good) => ({
                  value: good.brand,
                  label: good.brand,
                }))}
       
                id="categories"
                // {...field}

                // onChange={(selectedOption) => {
                //   setCategory(selectedOption ? selectedOption.value : '');

                // }}
                placeholder=""
              /> */}