import { defineStore } from "pinia";
import axiosInstance from '@/service/axiosService';

export const useCommons = defineStore("commons", {
  state: () =>({
      brands : [],
      loading: false,
      addLoading :false,
  }),

  actions: {
    async getCommonData(url){
      this.loading = true;
      try {
        const res = await axiosInstance.get(url);
        if(res.status === 200){
            return res.data?.result;
        }
      } catch (error) {
        console.log(error);
      }finally{
        this.loading = false;
      }
    },

    async postCommonData(url, formData){
      this.loading = true;
      try {
        const res = await axiosInstance.post(url, formData);
        console.log(res);
        if(res.status === 200){
            return res.data?.result;
        }
      } catch (error) {
        console.log(error);
      }finally{
        this.loading = false;
      }
    },
  }
})