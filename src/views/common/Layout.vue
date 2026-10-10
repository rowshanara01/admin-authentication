<script setup>
    import {Navbar, Sidebar, Breadcrumb} from '@/views/common'
</script>

<template>
    <div>
        <Navbar/>
        <Sidebar/>
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
                <Breadcrumb />
                <slot />
          </div>
        <!-- /.content-wrapper -->
    </div>
</template>

<style>

</style>