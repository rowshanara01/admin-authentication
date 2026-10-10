<script setup>
import {  useCommons } from '@/stores'
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';


const common = useCommons();
const brands = ref('');

const getBrandsData = async () => {
  const res = await common.getCommonData('/admin/brands');
  brands.value = res
}

onMounted(() => {
  getBrandsData();
})

</script>

<template>
    <div>
        <div class="card">
              <div class="card-header">
                <h3 class="card-title">DataTable with default features</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>SL</th>
                    <th>Image</th>
                    <th>Brand Name</th>
                    <th>Brand Status</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(brand, index) in brands.data" :key="index">
                    <!-- {{ brand }} -->
                    <td>{{ index + 1 }}</td>
                    <td><img :src="brand.image" alt="" width="50"></td>
                    <td>{{ brand.name }}</td>
                    <td><span :class="{'active-status' : brand.status=='active', 'inactive-status': brand.status=='inactive'}">{{ brand.status }}</span></td>
                    <td>
                        <router-link :to="{name: 'brand-edit', params: {id : brand.id} }" class="btn btn-info btn-sm mr-2">
                            <i class="fas fa-edit"></i>
                        </router-link>
                        <a href="javascript::void(0)" class="btn btn-danger btn-sm" v-if="deleteLoder == brand.id"><i class="fas fa-spinner fa-spin"></i></a>
                        <a href="javascript::void(0)" class="btn btn-danger btn-sm" v-else><i class="fas fa-trash"></i></a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
    </div>
</template>

<style scoped>

</style>