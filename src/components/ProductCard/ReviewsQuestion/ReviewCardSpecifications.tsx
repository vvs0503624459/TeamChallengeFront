import { useTranslation } from "react-i18next";
import { GridWrap, FirstColumn, SecondColumn, GridContainer, GridContainerTitle, GridContainerBtn, GridBox } from "./ReviewCardSpecifstyled";
import {
  DeviceIdState,
} from "../../../redux/types/initialEntity";
import { ReadMore } from "../../IconComponents/IconsCatalogue";
import { useState } from "react";
type Props = {
  device: DeviceIdState | undefined;
}

const ReviewCardSpecifications = ({ device }: Props) => {
  const { t } = useTranslation();
  const [readProperties, setReadProperties] = useState(true);

  const renderMainList = (specificationGroups: any[]) => {
    return specificationGroups.flatMap((item) =>
      item.specifications
        .filter((obj: any) => obj.main === true)
        .map((obj2: any) => <GridWrap key={obj2.title}><FirstColumn key={obj2.title}>{t(obj2.title)}</FirstColumn><SecondColumn key={obj2.title}>{t(obj2.value)}</SecondColumn></GridWrap >)
    );
  };
  const renderLargeList = (specificationGroups: any[]) => {
    return specificationGroups.flatMap((item) =>
      item.specifications
        .map((obj2: any) => <GridWrap key={obj2.title}><FirstColumn key={obj2.title}>{t(obj2.title)}</FirstColumn><SecondColumn key={obj2.title}>{t(obj2.value)}</SecondColumn></GridWrap >)
    );
  };
  const contentToRender = readProperties
    ? renderMainList(device?.specificationGroups || [])
    : renderLargeList(device?.specificationGroups || []);
  return (
    device && <GridBox>
      <GridContainerTitle>{t("Main specifications")}</GridContainerTitle>
      <GridContainer>{contentToRender}</GridContainer>
      <GridContainerBtn onClick={() => setReadProperties((state) => !state)}><ReadMore /> {t("Read All")}</GridContainerBtn>
    </GridBox>
  )
}

export default ReviewCardSpecifications