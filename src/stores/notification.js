import { defineStore } from "pinia";
import { ElNotification } from "element-plus";
export const useNotification = defineStore("notification", {
  state: () => ({
    type: {
      success: "success",
      warning: "warning",
      info: "info",
      error: "error",
    },

    position: "top-left",
    duration: 2000,
  }),

  actions: {
    Success(msg) {
      ElNotification({
        title: "Success",
        message: msg,
        type: this.type.success,
        position: this.position,
        duration: this.duration,
      });
    },

    Warning(msg) {
      ElNotification({
        title: "Success",
        message: msg,
        type: this.type.warning,
        position: this.position,
        duration: this.duration,
      });
    },

    Info(msg) {
      ElNotification({
        title: "Success",
        message: msg,
        type: this.type.info,
        position: this.position,
        duration: this.duration,
      });
    },

    Error(msg) {
      ElNotification({
        title: "Error",
        message: msg,
        type: this.type.error,
        position: this.position,
        duration: this.duration,
      });
    },
  },
});