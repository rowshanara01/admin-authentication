// All Import File  Code Is Here......................................................................................................
import { defineStore } from "pinia";
import axiosInstance from "@/service/axiosService.js";
import { useToken }     from '@/stores'

export const useAuth = defineStore("auth", {
  // All Variable  Code Is Here.....................................................................................................
  state: () => ({
    user      : {},
    isLoggedIn: false,
    loading   : false,
  }),

  getters:{
    // getUser:(state) => {
    //     return state.user?.data;
    // },
    getAuthStatus: (state) => {
        return state.isLoggedIn;
    }
 },

  persist: {
    persist:['user', 'isLoggedIn'],
  },

  actions: {
    // API Calling Code Is Here.....................................................................................................

    async login(formData) {
      const token = useToken();
      try {

        console.log(formData)
        const res = await axiosInstance.post("/admin/login", formData);
        if (res.data?.success) {
          this.user = res?.data?.result?.user;
          token.setToken(res.data?.result?.token)
          this.isLoggedIn = true;
          return res.data;
        }else{
          return res.data;
        }
      } catch (error) {
        console.log(error);
          if(error.response.data){
            throw(error.response.data)
        }
      }
    },

    async register(formData) {
      try {
        const res = await axiosInstance.post("/user/register", formData);
        if (res.status === 201) {
          return new Promise((resolve) => {
            resolve(res.data);
          });
        }
      } catch (error) {
        if (error.response.data) {
          return new Promise((reject) => {
            reject(error.response.data.errors);
          });
        }
      }
    },

    async otpVerify(formData) {
      try {
        const res = await axiosInstance.post("/user/otp-verify", formData);
        if (res.status === 200) {
          this.user = res.data;
          return new Promise((resolve) => {
            resolve(res.data);
          });
        }
      } catch (error) {
        if (error.response.data) {
          return new Promise((reject) => {
            reject(error.response.data.errors);
          });
        }
      }
    },

    async resendOtp(phone) {
      try {
        const res = await axiosInstance.post("/user/otp-resend", {
          phone: phone,
        });
        if (res.status === 200) {
          this.user = res.data;
          return new Promise((resolve) => {
            resolve(res.data);
          });
        }
      } catch (error) {
        if (error.response.data) {
          return new Promise((reject) => {
            reject(error.response.data.errors);
          });
        }
      }
    },

    async logout() {
      const token = useToken();
      this.loading = true;
      try {
        const res = await axiosInstance.post('/admin/logout');
        console.log(res);
        if (res.status === 200) {
          token.removeToken();
              this.$reset();
              return res;
          return new Promise((resolve) => {
            resolve(res.data);
          });
        }
      } catch (error) {
        if (error.response) {
          return new Promise((reject) => {
            reject(error.response);
          });
        }
      } finally {
        this.loading = false;
      }
    },

  //   async logout(){
  //     const token = useToken();
  //     this.logoutLoading = true;
  //     try {
  //         const res = await axiosInstance.post('/admin/logout');
  //         if(res.status === 200){
  //             token.removeToken();
  //             this.$reset();
  //             return res;
  //         }
  //     } catch (error) {
  //         if(error.response){
  //             this.$reset();
  //             return error.response;
  //         }
  //     }finally{
  //         this.logoutLoading = false;
  //     }
  // },



  },
});
// All Function  Code Is Here.....................................................................................................
