<script setup>
import { useRoute } from "vue-router";
import { useCommons } from "@/stores";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";

const common = useCommons();
const brand = ref("");
const route = useRoute();

const getBrandSingleData = async () => {
  const res = await common.getCommonData(`/admin/brands/${route.params.id}`);
  console.log(res);
  brand.value = res;
};

onMounted(() => {
  getBrandSingleData();
});
</script>
<template>
  <div>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">{{ route.meta.title }}</h3>
            </div>
              <form>
                <div class="card-body">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter email"
                        />
                    </div>
                    <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                    </div>
                    <div class="form-group">
                    <label for="exampleInputFile">File input</label>
                    <div class="input-group">
                        <div class="custom-file">
                        <input
                            type="file"
                            class="custom-file-input"
                            id="exampleInputFile"
                        />
                        <label class="custom-file-label" for="exampleInputFile"
                            >Choose file</label
                        >
                        </div>
                        <div class="input-group-append">
                        <span class="input-group-text">Upload</span>
                        </div>
                    </div>
                    </div>
                    <div class="form-check">
                    <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1"
                        >Check me out</label
                    >
                    </div>
                </div>
    
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
          </div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<style></style>
