import info from "../../../data/general.json";
import { BriefGeneral } from "./BriefGeneral/BriefGeneral";
import { DeliveryInfo } from "./DeliveryInfo/DeliveryInfo";
import { useProduct } from "../../../redux/hooks/usePeoduct";
import { useAppSelector } from "../../../redux/hooks";
import ReviewCardSpecifications from "../ReviewsQuestion/ReviewCardSpecifications";
import { DeviceIdState } from "../../../redux/types/initialEntity";
import  PriceInfo  from "./PriceInfo/PriceInfo";
import { BuyToCredit } from "@/components/BuyToCredit/BuyToCredit";

import { GeneralContainer, BriefWrap, ButtonsBuyWrap } from "./General.styled";

const General = () => {
  const { currentProduct } = useProduct();

  const product = useAppSelector((state) => {
    return state.products.product;
  });

  console.log(currentProduct);

  //     const sameInternalMemory =  [
  //         {
  //             "id": "abc10",
  //             "memory": "128 GB"
  //         },
  //         {
  //             "id": "abc11",
  //             "memory": "256 GB"
  //         },
  //         {
  //         "id": "abc12",
  //         "memory": "512 GB"
  //     },
  //     {
  //         "id": "abc13",
  //         "memory": "1 T"
  //     }
  // ]
  const internalMemory = info.map(({ sameInternalMemory }) => {
    return sameInternalMemory;
  });
  console.log(internalMemory);

  let device: DeviceIdState | undefined;
  if (product) {
    device = product;
  }

  return (
    <GeneralContainer>
      <BriefWrap>
        <BriefGeneral />

        <ButtonsBuyWrap>
          <PriceInfo />
          <BuyToCredit />
          <DeliveryInfo />
        </ButtonsBuyWrap>
      </BriefWrap>
      <ReviewCardSpecifications device={device} />
    </GeneralContainer>
  );
};
export default General;
