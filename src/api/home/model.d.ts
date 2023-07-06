export namespace HospitalTypes {
  interface Param {
    hostypeString: string;
    fullAddress: string;
  }

  interface BookingRule {
    cycle: number;
    releaseTime: string;
    stopTime: string;
    quitDay: number;
    quitTime: string;
    rule: string[];
  }

  interface Content {
    id: string;
    createTime: string;
    updateTime: string;
    isDeleted: number;
    param: Param;
    hoscode: string;
    hosname: string;
    hostype: string;
    provinceCode: string;
    cityCode: string;
    districtCode: string;
    address: string;
    logoData: string;
    intro?: any;
    route: string;
    status: number;
    bookingRule: BookingRule;
  }

  interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  }

  interface Pageable {
    sort: Sort;
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
  }

  interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  }

  interface Data {
    content: Content[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    first: boolean;
    sort: Sort;
    numberOfElements: number;
    size: number;
    number: number;
    empty: boolean;
  }

  interface RootObject {
    code: number;
    message: string;
    data: Data;
    ok: boolean;
  }
}

export namespace HospitalDictTypes {
  export interface Param { }

  export interface Data {
    id: number;
    createTime: string;
    updateTime: string;
    isDeleted: number;
    param: Param;
    parentId: number;
    name: string;
    value: string;
    dictCode: string;
    hasChildren: boolean;
  }

  export interface RootObject {
    code: number;
    message: string;
    data: Data[];
    ok: boolean;
  }
}