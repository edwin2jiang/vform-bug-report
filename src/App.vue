<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ElConfigProvider } from 'element-plus'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const locale = zhCn;
</script>
 
<template>
  <el-config-provider :locale="locale">
    <el-button>测试</el-button>
    <RouterView />
  </el-config-provider>
</template>

