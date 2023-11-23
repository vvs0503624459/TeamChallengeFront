
import PageTitle from "../../components/PageTitle/PageTitle";
import {Section} from "../../components/Container/Container.styled";

import Samsung from "../../assets/samsung.png";
import Apple from "../../assets/apple.png";
import Xiaomi from "../../assets/xiaomi.png";
import Lenovo from "../../assets/lenovo.png";
import Jbl from "../../assets/jbl.png";
import Dyson from "../../assets/dyson.png";
import Asus from "../../assets/asus.png";

import { List, Li } from "./BrandList.styled";

const BrandList = () => {
  return (
    <Section>
    <PageTitle title={"Popular brands"} />
    <List>
      <Li>
        <img src={Samsung} width="99" height="15" />
      </Li>
      <Li>
        <img src={Apple} width="42" height="43" />
      </Li>
      <Li>
        <img src={Xiaomi} width="126" height="33" />
      </Li>
      <Li>
        <img src={Lenovo} width="93" height="20" />
      </Li>
      <Li>
        <img src={Jbl} width="58" height="31" />
      </Li>
      <Li>
        <img src={Dyson} width="88" height="34" />
      </Li>
      <Li>
        <img src={Asus} width="119" height="34" />
      </Li>
    </List>

  </Section>

  );
};
export default BrandList;
