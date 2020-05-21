<!--
 * @Description: 第三方图钉组件
 * @Author: wonanjie
 * @Date: 2020-05-21 16:33:05
 * @LastEditors: wonanjie
 * @LastEditTime: 2020-05-21 16:47:24
-->

<!--
 * 参数	    说明	                          类型	                          默认值
 * offset	距离窗口顶部达到指定偏移量后触发	Number	0
 * boundary	设置 Affix 的活动范围，值为affix上级元素的id(可以是父元素，也可以是父元素的父元素...)	String(#parent)	 
 * on-affix	固定状态改变时触发的回调函数	   Function(affixed)	无
-->

<template>
  <div class="affix-placeholder" :style="wrapStyle">
    <div :class="{ affix: affixed }" :style="styles">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    offset: {
      type: Number,
      default: 0
    },
    onAffix: {
      type: Function,
      default() {}
    },
    boundary: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      affixed: false,
      styles: {},
      affixedClientHeight: 0,
      wrapStyle: {}
    };
  },
  methods: {
    getScroll(w, top) {
      let ret = w[`page${top ? "Y" : "X"}Offset`];
      const method = `scroll${top ? "Top" : "Left"}`;
      if (typeof ret !== "number") {
        const d = w.document;
        // ie6,7,8 standard mode
        ret = d.documentElement[method];
        if (typeof ret !== "number") {
          // quirks mode
          ret = d.body[method];
        }
      }
      return ret;
    },
    getOffset(element) {
      const rect = element.getBoundingClientRect();
      const body = document.body;
      const clientTop = element.clientTop || body.clientTop || 0;
      const clientLeft = element.clientLeft || body.clientLeft || 0;
      // const clientHeight = element.clientHeight || 0;
      const scrollTop = this.getScroll(window, true);
      const scrollLeft = this.getScroll(window);
      return {
        top: rect.bottom + scrollTop - clientTop - this.affixedClientHeight,
        left: rect.left + scrollLeft - clientLeft
      };
    },
    handleScroll() {
      const scrollTop = this.getScroll(window, true) + this.offsets; // handle setting offset
      const elementOffset = this.getOffset(this.$el);
      if (!this.affixed && scrollTop > elementOffset.top) {
        this.affixed = true;
        this.styles = {
          top: `${this.offsets}px`,
          left: `${elementOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        };
        this.onAffix(this.affixed);
      }
      // if setting boundary
      if (this.boundary && scrollTop > elementOffset.top) {
        const el = document.getElementById(this.boundary.slice(1));
        if (el) {
          const boundaryOffset = this.getOffset(el);
          if (scrollTop + this.offsets > boundaryOffset.top) {
            const top = scrollTop - boundaryOffset.top;
            this.styles.top = `-${top}px`;
          }
        }
      }
      if (this.affixed && scrollTop < elementOffset.top) {
        this.affixed = false;
        this.styles = {};
        this.onAffix(this.affixed);
      }
      if (this.affixed && this.boundary) {
        const el = document.getElementById(this.boundary.slice(1));
        if (el) {
          const boundaryOffset = this.getOffset(el);
          if (scrollTop + this.offsets <= boundaryOffset.top) {
            this.styles.top = 0;
          }
        }
      }
    }
  },
  computed: {
    offsets() {
      if (this.boundary) {
        return 0;
      }
      return this.offset;
    }
  },
  mounted() {
    this.affixedClientHeight = this.$el.children[0].clientHeight;
    this.wrapStyle = { height: `${this.affixedClientHeight}px` };
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleScroll);
  }
};
</script>
<style lang="scss">
.affix {
  position: fixed;
}
</style>
