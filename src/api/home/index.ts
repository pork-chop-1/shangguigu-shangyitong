import request from '@/utils/request'
import type { HospitalTypes, HospitalDictTypes, hospitalListByName } from './model'

// 通过枚举管理接口地址
enum API {
  HOSPITAL_URL = '/hosp/hospital',
  DICT_CODE = '/cmn/dict/findByDictCode',
  GET_BY_NAME = '/hosp/hospital/findByHosname/'
}

export type reqHospitalType = { page: number, limit: number, hostype?: string, districtCode?: string }
export const reqHospital = ({ page, limit, hostype, districtCode }: reqHospitalType) => {
  return request<HospitalTypes.Root>({
    url: `${API.HOSPITAL_URL}/${page}/${limit}`,
    method: 'get',
    params: {
      hostype,
      districtCode
    }
  })
}

export type reqHospitalDictType = {dictCode: 'Hostype' | 'Beijin'}
export const reqHospitalDict = ({dictCode}: reqHospitalDictType) => {
  return request<HospitalDictTypes.Root>({
    url: `${API.DICT_CODE}/${dictCode}`,
    method: 'get',
  })
}

export const reqHospitalByName = (name: string = '') => {
  return request <hospitalListByName.Root> ({
    url: `${API.GET_BY_NAME}/${name}`,
    method: 'get'
  })
}