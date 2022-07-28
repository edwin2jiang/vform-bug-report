<template>
  <div>
    <v-form-render
      :form-json="formJson"
      :form-data="formData"
      :option-data="optionData"
      ref="vFormRef"
    >
    </v-form-render>
    <el-button type="primary" @click="submitForm">Submit</el-button>
  </div>
</template>
<script>
export default {
  props: {
    optionData: {
      type: Object,
    },
  },
  data() {
    return {
      formJson: {
        widgetList: [
          {
            type: 'input',
            icon: 'text-field',
            formItemFlag: true,
            options: {
              name: 'name',
              label: 'input',
              labelAlign: '',
              type: 'text',
              defaultValue: '',
              placeholder: '',
              columnWidth: '200px',
              size: '',
              labelWidth: null,
              labelHidden: false,
              readonly: false,
              disabled: false,
              hidden: false,
              clearable: true,
              showPassword: false,
              required: false,
              requiredHint: '',
              validation: '',
              validationHint: '',
              customClass: [],
              labelIconClass: null,
              labelIconPosition: 'rear',
              labelTooltip: null,
              minLength: null,
              maxLength: null,
              showWordLimit: false,
              prefixIcon: '',
              suffixIcon: '',
              appendButton: false,
              appendButtonDisabled: false,
              buttonIcon: 'el-icon-search',
              onCreated: '',
              onMounted: '',
              onInput: '',
              onChange: '',
              onFocus: '',
              onBlur: '',
              onValidate: '',
            },
            id: 'input61401',
          },
          {
            type: 'select',
            icon: 'select-field',
            formItemFlag: true,
            options: {
              name: 'deptIds',
              label: 'select',
              labelAlign: '',
              defaultValue: '',
              placeholder: '',
              columnWidth: '200px',
              size: '',
              labelWidth: null,
              labelHidden: false,
              disabled: false,
              hidden: false,
              clearable: true,
              filterable: false,
              allowCreate: false,
              remote: false,
              automaticDropdown: false,
              multiple: false,
              multipleLimit: 0,
              optionItems: [
                { label: 'select 1', value: 1 },
                { label: 'select 2', value: 2 },
                { label: 'select 3', value: 3 },
              ],
              required: false,
              requiredHint: '',
              validation: '',
              validationHint: '',
              customClass: '',
              labelIconClass: null,
              labelIconPosition: 'rear',
              labelTooltip: null,
              onCreated: '',
              onMounted: '',
              onRemoteQuery: '',
              onChange: '',
              onFocus: '',
              onBlur: '',
              onValidate: '',
            },
            id: 'select87620',
          },
        ],
        formConfig: {
          modelName: 'formData',
          refName: 'vForm',
          rulesName: 'rules',
          labelWidth: 80,
          labelPosition: 'left',
          size: '',
          labelAlign: 'label-left-align',
          cssCode: '',
          customClass: '',
          functions: '',
          layoutType: 'PC',
          onFormCreated: '',
          onFormMounted: '',
          onFormDataChange: '',
        },
      },
      formData: {},
      // optionData: {},
    }
  },
  methods: {
    reloadForm() {
      console.log('reloadForm')
      this.$refs.vFormRef.reloadOptionData()
    },
    submitForm() {
      this.$refs.vFormRef
        .getFormData()
        .then((formData) => {
          // Form Validation OK
          alert(JSON.stringify(formData))
        })
        .catch((error) => {
          // Form Validation failed
          this.$message.error(error)
        })
    },
  },
}
</script>
