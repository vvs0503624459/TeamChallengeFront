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
  product: DeviceIdState | null;
};

export type MainProductState = {
  title: string;
  devices: DevicesState[];
};

// type Specifications = {
//   descriptionExtra: null;
//   main: boolean;
//   title: string;
//   value: string;
// };

// type SpecGtoups = {
//   title: string;
//   specifications: Specifications[];
// };

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

type SpecificationsItem = {
  title: string;
  value: string;
  descriptionExtra: string;
  main: true;
};

type SpecificationsGroupItem = {
  title: string;
  specifications: SpecificationsItem[];
};

export type DeviceIdState = {
  id: string;
  title: string;
  price: number;
  discount: number;
  sameDevices: [
    {
      id: string;
      value: string;
    }
  ];
  sameMemories: [
    {
      id: string;
      value: string;
    }
  ];
  photoUris: [string];
  presentation: [
    {
      text: string;
      photoUri: string;
    }
  ];
  specificationGroups: SpecificationsGroupItem[];
  recommendations: [
    {
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
      devicesWithSameColor: [
        {
          id: string;
          value: string;
        }
      ];
    }
  ];
  accessories: {
    additionalProp1: [
      {
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
        devicesWithSameColor: [
          {
            id: string;
            value: string;
          }
        ];
      }
    ];
    additionalProp2: [
      {
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
        devicesWithSameColor: [
          {
            id: string;
            value: string;
          }
        ];
      }
    ];
    additionalProp3: [
      {
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
        devicesWithSameColor: [
          {
            id: string;
            value: string;
          }
        ];
      }
    ];
  };
};
