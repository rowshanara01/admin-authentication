<script setup>
import { ref } from 'vue';
import * as yup from 'yup';
import { Form, Field } from 'vee-validate';
import { useAuth, useNotification } from '@/stores'
import { useRouter } from 'vue-router';


const auth         = useAuth();
const errorMessage = ref();
const router       = useRouter();
const notifications= useNotification();

//validation start
const schema = yup.object({
    phone_number: yup.string().required("Phone field is required"),
    password: yup.string().required(),
});
//validation end

const submit = async(values) =>{
  const res = await auth.login(values);
  // console.log(res);
  if(res?.success){
    // console.log('hhhhh');
    router.push({name:'dashboard'});
    // notifications.Success("Login Successfully")
  }else{
    // setErrors(res?.message);
    errorMessage.value = res?.message
  }
}

</script>

<template>
    <div>
         <!-- /.login-logo -->
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
      <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a>
    </div>
    <div class="card-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <Form @submit="submit" :validation-schema="schema" v-slot="{errors}">
        <div class="input-group mb-3">
          <Field
              name="phone_number"
              class="mb-0 form-control"
              type="text"
              :class="{'is-invalid' : errors.phone_number || errorMessage !== ''}"
              placeholder="Phone Number"
          />
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <span class="text-danger">{{ errors.phone_number ? errors.phone_number : errorMessage  }}</span>
        <div class="input-group mb-3">
          <Field
              name="password"
              class="mb-0 form-control"
              type="password"
              :class="{'is-invalid' : errors.password}"
              placeholder="Password"
          />
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
          </div>
          <span class="text-danger">{{ errors.password ? errors.password : errorMessage  }}</span>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember">
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </Form>

      <div class="social-auth-links text-center mt-2 mb-3">
        <a href="#" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a>
        <a href="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a>
      </div>
      <!-- /.social-auth-links -->

      <p class="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p class="mb-0">
        <a href="register.html" class="text-center">Register a new membership</a>
      </p>
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->
    </div>
</template>

<style lang="scss" scoped>

</style>