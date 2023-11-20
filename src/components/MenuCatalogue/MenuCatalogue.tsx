import { useRef } from "react";
// import styles from './MenuCatalogue.module.scss';
// import iconRight from '../../assets/icons/arrow-right.svg';
// import iconPhone from '../../assets/icons/phone.svg';
// import iconLaptop from '../../assets/icons/laptop.svg';
// import iconHeadphone from '../../assets/icons/headphones.svg';
// import iconCharge from '../../assets/icons/charge.svg';
// import iconTV from '../../assets/icons/tv.svg';
// import iconCamera from '../../assets/icons/camera.svg';
// import iconWatch from '../../assets/icons/watch.svg';
// import iconWashing from '../../assets/icons/washing machine.svg';
// import iconPercentage from '../../assets/icons/percentage.svg';

// import cs from 'classnames';
// import { CatalogueGoods } from '../CatalogueGoods/CatalogueGoods';

import MENU_CATEGORIES from "../../data/menucatalogue.json";
import { Icons } from "../IconComponents/Icons";

import { MenuList, MenuItem } from "./MenuCatalogue.styled";
// export const MenuCatalogue = ({isOpenCatalog}) => {
const MenuCatalogue = () => {
  // const [activeItem, setActiveItem] = useState({});
  const categoriesRef = useRef(null);
  //   const heightItem = useRef

  return (
    <div
      ref={categoriesRef}
      onMouseLeave={() => {
        // setActiveItem({})
        // isOpenCatalog(false)
      }}
    >
      <MenuList>
        {MENU_CATEGORIES.map(({ id, title, icon }) => (
          <MenuItem
            key={id}
            // onMouseEnter={() => setActiveItem(categore)}
          >
            {/* <Icon
							type={categore.icon || 'shield'}
							size='small'
				
						/> */}
            <Icons type={icon} />
            <p>{title}</p>
            <Icons type={icon} />
          </MenuItem>
        ))}
      </MenuList>
    </div>
  );
};
export default MenuCatalogue;
