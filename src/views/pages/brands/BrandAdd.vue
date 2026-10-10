
<script setup>
import { ref } from "vue";
import {  useCommons } from '@/stores'
import { storeToRefs } from 'pinia';



const common       = useCommons();
const name         = ref('');
const images       = ref([]);
const imagePreview = ref([]);
const status       = ref('');
const isTop        = ref('');

// image upload

const handleFileChange = (e) => {
  const selectedImages = Array.from(e.target.files);  

  images.value = [...images.value, ...selectedImages];

  for (const image of selectedImages) {
    let reader = new FileReader();
    reader.addEventListener("load", function () {
      imagePreview.value.push(reader.result);
    }, false);

    if (/\.(jpe?g|jpg|png|gif)$/i.test(image.name)) {
      reader.readAsDataURL(image);
    }
  }
};

const postBrandData = async () => {

    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('status', status.value);
    formData.append('isTop', isTop.value);
    formData.append('image', images.value[0]);

  const res = await common.postCommonData('/admin/brands', formData);
  console.log(res);
}


</script>

<template>
    <div>
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Brand Add</h3>
                  </div>
                    <form>
                      <div class="card-body">
                          <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" v-model="name" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Status</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" v-model="status"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Is Top</label>
                                    <input
                                        type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" v-model="isTop"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="exampleInputFile">File input</label>
                                    <div class="input-group">
                                        <div class="custom-file">
                                          <input type="file" class="custom-file-input" id="exampleInputFile" @change="handleFileChange"/>
                                          <label class="custom-file-label" for="exampleInputFile"></label>
                                        </div>
                                    </div>
                                    <span class="img-remove-btn" style="position:relative" v-for="(image, index) in imagePreview" :key="index">
                                        <img width="100" class="gallery_img" :src="image" alt="">
                                    </span>
                                </div>
                            </div>
                          </div>
                      </div>
          
                      <div class="card-footer">
                          <button  class="btn btn-primary" @click.prevent="postBrandData">Submit</button>
                      </div>
                    </form>
                </div>
            </div>
            <div class="col-md-2"></div>
          </div>
    </div>
</template>

<style>

</style>