import { reqHospital } from "@/api/home"
import { reqHospitalRegister } from "@/api/hospital"
import { HospitalRegisterTypes } from "@/api/hospital/model"
import { defineStore } from "pinia"

const useHospital = defineStore('hospital', {
  state: (): {
    detail: HospitalRegisterTypes.Data | null
  } => {
    return {
      detail: null
    }
  },
  getters: {

  },
  actions: {
    async getHospital(code: string) {
      const res = await reqHospitalRegister(code)
      if(res.code === 200) {
        this.detail = res.data
      }
    }
  }
})

export default useHospital