# ANT Design

## 下拉框,时间日期选择的弹框定位问题

在标签上添加该属性

    `getPopupContainer={() => document.getElementById('branch_area') as any}`

    例如:
    <DatePicker
      getPopupContainer={() => document.getElementById('branch_area') as any}
    />
    <Select
      getPopupContainer={() => document.getElementById('branch_area') as any}
    >
        <Select.Option key={item.value} value={item.value}>
        </Select.Option>
    </Select>

## 表单验证

## Select搜索功能不支持label

`
<Select
	showSearch
	optionFilterProp="children" 添加这个属性
>
...
</Select>
`