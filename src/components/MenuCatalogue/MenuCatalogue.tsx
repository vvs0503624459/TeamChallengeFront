import MENU_CATEGORIES from "../../data/menucatalogue.json";
// import {useState } from "react";
import { Icons } from "../IconComponents/Icons";
// import Select from 'react-select';
import Slider from "../Slider/Slider";
import { Section } from "../../components/Container/Container.styled";
import {
  StyledSelect,
  DIV,
  MenuList,
  MenuItem,
  TextDiv,
  MenuTitle,
} from "./MenuCatalogue.styled";

const MenuCatalogue = () => {
  // const [isHovering, setIsHovering] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovering(false);
  // };

    // const style = {
    //   // backgroundColor: isHovering ? '#5826da' : '#FFFFFF',
    //  color: isHovering ? '#5826da' : 'black',
    //   // background: "#FFFFFF",

    //   // "&:hover": {
    //   //   background: "#E0E4F0",
    //   //   color: "#5826DA"
    //   // }
    //   // &:focus,
    //   // &:hover {
    //   //   background-color: #5826da;
    //   //   color: #f3f3f3;
    //   // }
    // };
  return (
    <Section>
      <DIV>
        <div>
          <MenuList>
            {MENU_CATEGORIES.map(({id, icon, title, goods}) => (
              <MenuItem key={id}
              //  style={style}
              //  onMouseEnter={handleMouseEnter}
              //  onMouseLeave={handleMouseLeave}
               >
                <Icons name={icon} />
                <TextDiv>
                  <MenuTitle 
                  >{title}</MenuTitle>

                  {/* <Icons name={category.right} /> */}
                   <StyledSelect
                classNamePrefix="Select"
                closeMenuOnSelect={true}
                isClearable={true}
                options={goods.map(({brand}) => ({
                  value: brand,
                  label: brand,
                }))}
       
                id="categories"
                // {...field}

                // onChange={(selectedOption) => {
                //   setCategory(selectedOption ? selectedOption.value : '');

                // }}
                // placeholder=""
              /> 
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

// "model": [
//   "iPhone 13 Pro Max",
// "iPhone 13 Pro",
// "iPhone 13",
// "iPhone 13 mini",
// "iPhone 12 Pro Max",
// "iPhone 12 Pro",
// "iPhone 12",
// "iPhone 12 mini",
// "iPhone SE (2nd generation)",
// "iPhone 11 Pro Max",
// "iPhone 11 Pro",
// "iPhone 11",
// "iPhone XR",
// "iPhone XS Max",
// "iPhone XS",
// "iPhone X",
// "iPhone 8 Plus",
// "iPhone 8",
// "iPhone 7 Plus",
// "iPhone 7"
// ]

// "model": [
//   "iPhone 13 Pro Max",
//   "iPhone 13 Pro",
//   "iPhone 13",
//   "iPhone 13 mini",
//   "iPhone 12 Pro Max",
//   "iPhone 12 Pro",
//   "iPhone 12",
//   "iPhone 12 mini",
//   "iPhone SE (2nd generation)"
//         ]

//         "model": [
// 					"iPhone 13 Pro Max",
// 					"iPhone 13 Pro",
// 					"iPhone 13",
// 					"iPhone 13 mini",
// 					"iPhone 12 Pro Max",
// 					"iPhone 12 Pro",
// 					"iPhone 12",
// 					"iPhone 12 mini",
// 					"iPhone SE (2nd generation)",
// 					"iPhone 11 Pro Max",
// 					"iPhone 11 Pro",
// 					"iPhone 11",
// 					"iPhone XR",
// 					"iPhone XS Max"
//                 ]

//                 "model": [
//                   "iPhone 13 Pro Max",
//                   "iPhone 13 Pro",
//                   "iPhone 13",
//                   "iPhone 13 mini",
//                   "iPhone 12 Pro Max",
//                   "iPhone 12 Pro",
//                   "iPhone 12",
//                   "iPhone 12 mini",
//                   "iPhone SE (2nd generation)",
//                   "iPhone 11 Pro Max",
//                   "iPhone 11 Pro",
//                   "iPhone 11",
//                   "iPhone XR"
//                         ]