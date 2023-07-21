import request from "@/utils/request"
import { HospitalRegisterTypes } from "./model"

enum API {
  HOSPITAL_REGISTER = '/hosp/hospital'
}

export const reqHospitalRegister = (code: string) => {
  return request<HospitalRegisterTypes.Root>({
    url: `${API.HOSPITAL_REGISTER}/${code}`,
    method: 'get'
  })
}