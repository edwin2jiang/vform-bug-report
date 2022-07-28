
<script lang="ts" setup>
import axios from "axios"
import { ref, reactive } from "vue";
import { Edit } from '@element-plus/icons-vue'

const tableData = ref([])

const main = async () => {
  const res = await axios.get(
    "https://www.fastmock.site/mock/94d2c91197e56cdf31f443dfe3189fc9/api/employee"
  ), { data } = res

  console.log('data', data)

  tableData.value = data.records
}

interface TableColumnType {
  id: string;
  name: string;
  age: number;
}

const tableColumnConfig = [
  {
    prop: "id",
    label: "id",
    isCanEdit: false
  },
  {
    prop: "name",
    label: "name",
    isCanEdit: true
  },
  {
    prop: "age",
    label: "age",
    isCanEdit: true
  },
]

const editingCell = reactive<any>({
  "210000202205044862.name": '12312'
})

const handleEdit = (id: string, prop: string, prevValue: any) => {
  Object.assign(editingCell, {
    [`${id}`]: {
      [`${prop}`]: {
        prevValue
      }
    }
  })

  console.log('handleEdit')
}

main()
</script>


<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="selection" />
    <el-table-column v-for="(item, index) in tableColumnConfig" :key="index" :prop="item.prop" :label="item.label">
      <template #default="{ row, column }">
        <div v-if="item.isCanEdit">
          <div class="flex items-center" v-if="!(editingCell[row.id] ? editingCell[row.id][column.prop] : false)">
            <span>{{ row[item.prop] }}</span>
            <Edit @click="handleEdit(row.id, item.prop, row[item.prop])" class="cursor-pointer!"
              style="width: 1em; height: 1em;">
            </Edit>
          </div>
          <div v-else>
            <el-input></el-input>
          </div>
        </div>

        <div v-else>
          <span>{{ row[item.prop] }}</span>
          <!-- <span>{{ column.property }}</span> -->
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>
