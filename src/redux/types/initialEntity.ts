export type initialStateAuthType = {
  user: AuthUserState[];
  token: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
};

export type AuthUserState = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  password: string;
  username: string;
};

export type initialStateProductType = {
  productsList: MainProductState[];
  currentProduct: DevicesState | null;
};

export type MainProductState = {
  title: string;
  devices: DevicesState[];
};

type Specifications = {
  descriptionExtra: null;
  main: boolean;
  title: string;
  value: string;
};

type SpecGtoups = {
  title: string;
  specifications: Specifications[];
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
  specificationGroups: SpecGtoups[];
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
