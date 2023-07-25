interface IPoets {
    id: number;
    name: string;
    description: string;
    fullUrl: string;
    rootCatId: number;
    nickname: string;
    published: true;
    imageUrl: string;
    birthYearInLHijri: number;
    validBirthDate: true;
    deathYearInLHijri: number;
    validDeathDate: true;
    pinOrder: number;
    birthPlace: string;
    birthPlaceLatitude: number;
    birthPlaceLongitude: number;
    deathPlace: string;
    deathPlaceLatitude: number;
    deathPlaceLongitude: number;
  }

  export type { IPoets };  