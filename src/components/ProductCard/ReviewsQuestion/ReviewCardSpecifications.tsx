import { useTranslation } from "react-i18next";
import { GridWrap, FirstColumn, SecondColumn } from "./ReviewCardSpecifstyled";
import {
  DeviceIdState,
} from "../../../redux/types/initialEntity";
type Props = {
  device: DeviceIdState | undefined;
}

const ReviewCardSpecifications = ({ device }: Props) => {
  const { t } = useTranslation();
  const renderFirstColumn = (specificationGroups: any[]) => {
    return specificationGroups.flatMap((item) =>
      item.specifications
        .filter((obj: any) => obj.main === true )
        // .filter((obj: any) => obj.main === true || obj.main === false)
        .map((obj2: any) => <FirstColumn key={obj2.title}>{t(obj2.title)}</FirstColumn>)
    );
  };

  const renderSecondColumn = (specificationGroups: any[]) => {
    return specificationGroups.flatMap((item) =>
      item.specifications
        .filter((obj: any) => obj.main === true )
        // .filter((obj: any) => obj.main === true || obj.main === false)
        .map((obj2: any) => <SecondColumn key={obj2.title}>{t(obj2.value)}</SecondColumn>)
    );
  };


  return (
    <>
      <div>{t("Main specifications")}</div>
      {device && <GridWrap>
        {/* <ul>
          {device.specificationGroups.map(item => item.specifications.filter(obj => obj.main == true).map(obj2 => <FirstColumn>{t(obj2.title)}</FirstColumn>))}
        </ul>
        <ul>
          {device.specificationGroups.map(item => item.specifications.filter(obj => obj.main == true).map(obj2 => <SecondColumn>{t(obj2.value)}</SecondColumn>))}
        </ul> */}

        <div>{renderFirstColumn(device.specificationGroups)}</div>
        <div>{renderSecondColumn(device.specificationGroups)}</div>

      </GridWrap>}
    </>
  )
}

export default ReviewCardSpecifications