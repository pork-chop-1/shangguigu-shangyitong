import request from '@/utils/request'
import type { HospitalTypes, HospitalDictTypes } from './model'

// 通过枚举管理接口地址
enum API {
  HOSPITAL_URL = '/hosp/hospital',
  FIND_BY_DICT_CODE = '/cmn/dict/findByDictCode'
}

export type reqHospitalType = { page: number, limit: number }
export const reqHospital = ({ page, limit }: reqHospitalType) => {
  return request<HospitalTypes.RootObject>({
    url: `${API.HOSPITAL_URL}/${page}/${limit}`,
    method: 'get',
  })
}

export type reqHospitalDictType = {dictCode: 'Hostype'}
export const reqHospitalDict = ({dictCode}: reqHospitalDictType) => {
  return request<HospitalDictTypes.RootObject>({
    url: `${API.FIND_BY_DICT_CODE}/${dictCode}`,
    method: 'get',
  })
}