export namespace HospitalRegisterTypes {
  export interface Root {
    code: number
    message: string
    data: Data
    ok: boolean
  }

  export interface Data {
    bookingRule: BookingRule
    hospital: Hospital
  }

  export interface BookingRule {
    cycle: number
    releaseTime: string
    stopTime: string
    quitDay: number
    quitTime: string
    rule: string[]
  }

  export interface Hospital {
    id: string
    createTime: string
    updateTime: string
    isDeleted: number
    param: Param
    hoscode: string
    hosname: string
    hostype: string
    provinceCode: string
    cityCode: string
    districtCode: string
    address: string
    logoData: string
    intro: string
    route: string
    status: number
    bookingRule: any
  }

  export interface Param {
    hostypeString: string
    fullAddress: string
  }

}