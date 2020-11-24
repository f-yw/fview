<template>
  <button
    class="f-button"
    :disabled="disabled"
    :type="nativeType"
    :class="[
      type ? 'f-button--' + type : '',
      size ? 'f-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
    @click="$_click"
  >
    <slot>按钮</slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: ""
    },
    nativeType: {
      type: String,
      default: "button"
    },
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean
  },
  name: "FButton",
  data: function() {
    return {};
  },
  methods: {
    $_click() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped></style>
