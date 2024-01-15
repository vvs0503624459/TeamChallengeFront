export type initialStateAuthType = {
  user: AuthUserState[];
  token: string;
  isLoggedIn: boolean;
};

export type AuthUserState = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  password: string;
};

export type initialStateProductType = {
  productsList: MainProductState[];
};

export type MainProductState = {
  title: string;
  devices: DevicesState[];
};

export type DevicesState = {
      id: string;
      title: string;
      color: string;
      mainPhotoUri: string;
      review: {
        rating: number;
        countOfVotes: number;
      };
      price: number;
      discount: number;
      devicesWithSameColor: [];
};

export type initialStateCatalogueType = {
  catalogueList: CatalogueState[];
};

export type CatalogueState = {
  id: string;
  title: string;
  groupSpecifications: [
    {
      nameOfGroup: string;
      hashtagsOfName: {
        catalogue: string;
        catalogueGroupSpecifications: [
          {
            title: string;
            hashTagsOfTitle: {
              brand: string;
              catalogue: string;
            };
          }
        ];
      };
    }
  ];
};
