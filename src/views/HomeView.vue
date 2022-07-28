<script setup lang="ts">
import { ref, reactive } from 'vue'
// @ts-ignore
import VForm from './VForm.vue'

const vFormRef = ref()
const data = reactive({
  deptIds: [
    {
      label: '朝鲜',
      value: 1,
    },
  ],
})

const handleClick = () => {
  data.deptIds = [
    {
      label: '中国',
      value: 1,
    },
  ]
  vFormRef.value.reloadForm()
}
</script>

<template>
  <button @click="handleClick">点击</button>
  <div>
    <VForm ref="vFormRef" :option-data="data"></VForm>
  </div>
</template>

<style scoped></style>
