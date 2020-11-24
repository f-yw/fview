<template>
  <div class="button">
    <div>
      <h3>基础用法</h3>
      <div>
        <f-button>默认按钮</f-button>
        <f-button type="primary">主要按钮</f-button>
        <f-button type="success">成功按钮</f-button>
        <f-button type="info">信息按钮</f-button>
        <f-button type="warning">警告按钮</f-button>
        <f-button type="danger ">危险按钮</f-button>
      </div>
      <div style="margin-top:10px">
        <f-button plain>朴素按钮</f-button>
        <f-button plain type="primary">主要按钮</f-button>
        <f-button plain type="success">成功按钮</f-button>
        <f-button plain type="info">信息按钮</f-button>
        <f-button plain type="warning">警告按钮</f-button>
        <f-button plain type="danger ">危险按钮</f-button>
      </div>
      <div style="margin-top:10px">
        <f-button round>圆角按钮</f-button>
        <f-button round type="primary">主要按钮</f-button>
        <f-button round type="success">成功按钮</f-button>
        <f-button round type="info">信息按钮</f-button>
        <f-button round type="warning">警告按钮</f-button>
        <f-button round type="danger ">危险按钮</f-button>
      </div>
    </div>
    <div>
      <h3>禁用状态</h3>
      <div>
        <f-button disabled>默认按钮</f-button>
        <f-button disabled type="primary">主要按钮</f-button>
        <f-button disabled type="success">成功按钮</f-button>
        <f-button disabled type="info">信息按钮</f-button>
        <f-button disabled type="warning">警告按钮</f-button>
        <f-button disabled type="danger ">危险按钮</f-button>
      </div>
      <div style="margin-top:10px">
        <f-button disabled plain>朴素按钮</f-button>
        <f-button disabled plain type="primary">主要按钮</f-button>
        <f-button disabled plain type="success">成功按钮</f-button>
        <f-button disabled plain type="info">信息按钮</f-button>
        <f-button disabled plain type="warning">警告按钮</f-button>
        <f-button disabled plain type="danger ">危险按钮</f-button>
      </div>
    </div>
    <div>
      <h3>文字按钮</h3>
      <div>
        <f-button type="text">文字按钮</f-button>
        <f-button disabled type="text">文字按钮</f-button>
      </div>
    </div>
    <div>
      <h3>不同尺寸</h3>
      <div style="margin-top:10px">
        <f-button plain>默认按钮</f-button>
        <f-button size="medium" plain type="primary">中等按钮</f-button>
        <f-button size="small" plain type="success">小型按钮</f-button>
        <f-button size="mini" plain type="info">超小按钮</f-button>
      </div>
      <div style="margin-top:10px">
        <f-button round>默认按钮</f-button>
        <f-button size="medium" round type="primary">中等按钮</f-button>
        <f-button size="small" round type="success">小型按钮</f-button>
        <f-button size="mini" round type="info">超小按钮</f-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button",
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style scoped></style>
