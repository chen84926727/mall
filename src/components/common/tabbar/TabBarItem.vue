
<template>
  <div class="tab-bar-item"
       @click="itemClick">
    <!-- default icon -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <!-- select icon -->
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- name -->
    <div :style="itemColor">
      <slot name="item-name"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data () {
    return {
      // isActive: true
    }
  },
  props: {
    path: {
      type: String,
      required: true
    },
    activeItemColor: {
      type: String,
      default: 'red'
    },
    defaultItemColor: {
      type: String,
      default: 'black'
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    itemColor () {
      return this.isActive ? { color: this.activeItemColor } : { color: this.defaultItemColor }
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
