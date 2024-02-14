import { useEffect, useState } from "react";
import { ActiveIcon, Button, CompareIcon, NotActiveIcon } from "./CompareButton.styled";
import iconsSprite from "@/assets/iconsSprite.svg";
import { useProduct } from "@/redux/hooks/usePeoduct";
import { DeviceIdState } from "@/redux/types/initialEntity";

export const CompareButton = () => {
  const [isCompareProduct, setIsCompareProduct] = useState<boolean>(false);
  const { currentProduct } = useProduct();

  useEffect(() => {
    if (!localStorage.getItem("compareProducts")) {
      localStorage.setItem("compareProducts", JSON.stringify([]));
    }
    const localstorageFavoriteProducts = JSON.parse(localStorage.getItem("compareProducts") || "");
    const favoriteIndex: number = localstorageFavoriteProducts.findIndex(
      (item: DeviceIdState) => item.id === currentProduct?.id
    );
    if (favoriteIndex !== -1) {
      setIsCompareProduct(true);
    }
  }, [currentProduct?.id]);

  function handleButton(): void {
    const localstorageFavoriteProducts = JSON.parse(localStorage.getItem("compareProducts") || "");
    const favoriteIndex: number = localstorageFavoriteProducts.findIndex(
      (item: DeviceIdState) => item.id === currentProduct?.id
    );
    if (isCompareProduct) {
      localstorageFavoriteProducts.splice(favoriteIndex, 1);
      localStorage.setItem("compareProducts", JSON.stringify(localstorageFavoriteProducts));
      setIsCompareProduct(false);
      return;
    }
    localStorage.setItem(
      "compareProducts",
      JSON.stringify([...localstorageFavoriteProducts, currentProduct])
    );
    setIsCompareProduct(true);
  }

  return (
    <Button type="button" onClick={handleButton}>
      {!isCompareProduct ? (
        <NotActiveIcon>
          <CompareIcon>
            <use href={iconsSprite + "#icon-compare"}></use>
          </CompareIcon>
        </NotActiveIcon>
      ) : (
        <ActiveIcon>
          <CompareIcon>
            <use href={iconsSprite + "#icon-compare"}></use>
          </CompareIcon>
        </ActiveIcon>
      )}
    </Button>
  );
};
