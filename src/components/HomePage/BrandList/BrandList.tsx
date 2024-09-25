
import PageTitle from "../../../shared/PageTitle/PageTitle";
import {Section} from "../../Container/Container.styled";

import Samsung from "../../../assets/samsung.png";
import Apple from "../../../assets/apple.png";
import Xiaomi from "../../../assets/xiaomi.png";
import Lenovo from "../../../assets/lenovo.png";
import Jbl from "../../../assets/jbl.png";
import Dyson from "../../../assets/dyson.png";
import Asus from "../../../assets/asus.png";

import { BrandListList, BrandListItem } from "./BrandList.styled";

const BrandList = () => {
  return (
    <Section>
    <PageTitle title={"Popular brands"} />
    <BrandListList>
      <BrandListItem>
        <img src={Samsung} width="99" height="15" />
      </BrandListItem>
      <BrandListItem>
        <img src={Apple} width="42" height="43" />
      </BrandListItem>
      <BrandListItem>
        <img src={Xiaomi} width="126" height="33" />
      </BrandListItem>
      <BrandListItem>
        <img src={Lenovo} width="93" height="20" />
      </BrandListItem>
      <BrandListItem>
        <img src={Jbl} width="58" height="31" />
      </BrandListItem>
      <BrandListItem>
        <img src={Dyson} width="88" height="34" />
      </BrandListItem>
      <BrandListItem>
        <img src={Asus} width="119" height="34" />
      </BrandListItem>
    </BrandListList>
  </Section>

  );
};
export default BrandList;
