<template>
  <div class="home">
    <el-container class="home-container">
      <el-header>拼车小程序后台管理系统</el-header>
      <el-container>
        <el-aside width="250px">
          <el-menu :default-openeds="['1']">
            <el-submenu v-for="(item,index) in menuList" :index="item.index" :key="index">
              <template slot="title"><i :class="item.menuImage"></i>{{item.text}}</template>
              <el-menu-item-group>
                <router-link v-for="(ele,i) in item.child" :key="i" :to="ele.path">
                  <el-menu-item :index="ele.index">{{ele.text}}</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import menu from '../../utils/elMenu'
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      menuList: menu
    }
  }
})
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  &-container {
    height: 100%;
  }
}
</style>