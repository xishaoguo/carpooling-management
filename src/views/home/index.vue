<template>
  <div class="home">
    <el-container class="home-container">
      <el-header>
        <span>拼车小程序后台管理系统</span>
        <div class="header-right-setting">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="header-right-setting-username">二小1号</span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-openeds="['1']" :default-active="this.$route.path" router>
            <el-submenu v-for="(item,index) in menuList" :index="item.index" :key="index">
              <template slot="title"><i :class="item.menuImage"></i>{{item.text}}</template>
              <el-menu-item v-for="(ele,i) in item.child" :key="i" :index="ele.path">{{ele.text}}</el-menu-item>
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
import menu from '../../utils/elMenu';
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      menuList: menu
    };
  }
});
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  &-container {
    height: 100%;
    .header-right-setting {
      float: right;
      transform: translateX(-50px);
      &-username {
        font-size: 15px;;
      }
    }
  }
}
</style>