import { useEffect, useState } from "react";
import { Button, ActiveIcon, HartIcon, NotActiveIcon } from "./HartButton.styled";
import { DeviceIdState } from "@/redux/types/initialEntity";
import { useProduct } from "@/redux/hooks/usePeoduct";
import iconsSprite from "@/assets/iconsSprite.svg";

export const HartButton = () => {
  const [isFavoriteProduct, setIsFavoriteProduct] = useState<boolean>(false);
  const { currentProduct } = useProduct();

  useEffect(() => {
    if (!localStorage.getItem("favoriteProducts")) {
      localStorage.setItem("favoriteProducts", JSON.stringify([]));
    }
    const localstorageFavoriteProducts = JSON.parse(localStorage.getItem("favoriteProducts") || "");
    const favoriteIndex: number = localstorageFavoriteProducts.findIndex(
      (item: DeviceIdState) => item.id === currentProduct?.id
    );
    if (favoriteIndex !== -1) {
      setIsFavoriteProduct(true);
    }
  }, [currentProduct?.id]);

  function handleButton(): void {
    const localstorageFavoriteProducts = JSON.parse(localStorage.getItem("favoriteProducts") || "");
    const favoriteIndex: number = localstorageFavoriteProducts.findIndex(
      (item: DeviceIdState) => item.id === currentProduct?.id
    );
    if (isFavoriteProduct) {
      localstorageFavoriteProducts.splice(favoriteIndex, 1);
      localStorage.setItem("favoriteProducts", JSON.stringify(localstorageFavoriteProducts));
      setIsFavoriteProduct(false);
      return;
    }
    localStorage.setItem(
      "favoriteProducts",
      JSON.stringify([...localstorageFavoriteProducts, currentProduct])
    );
    setIsFavoriteProduct(true);
  }

  return (
    <Button type="button" onClick={handleButton}>
      {!isFavoriteProduct ? (
        <NotActiveIcon>
          <HartIcon>
            <use href={iconsSprite + "#icon-heart"}></use>
          </HartIcon>
        </NotActiveIcon>
      ) : (
        <ActiveIcon>
          <HartIcon>
            <use href={iconsSprite + "#icon-heart"}></use>
          </HartIcon>
        </ActiveIcon>
      )}
    </Button>
  );
};
