import { defineStore } from "pinia";
import axiosInstance from '@/service/axiosService';

export const useBrands = defineStore("brands", {
  state: () =>({
      brands : [],
      loading: false,
      addLoading :false,
  }),

  actions: {
    async getBrands(){
      this.loading = true;
      try {
        const res = await axiosInstance.get('/admin/brands');
        console.log(res);
        if(res.status === 200){
            this.brands = res.data?.result
        }
      } catch (error) {
        console.log(error);
      }finally{
        this.loading = false;
      }
    },
  }
})