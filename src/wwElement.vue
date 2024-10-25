<template>
  <div>
    <Animation :content="content">
      <div class="my-element" v-if="showElement">
        <p :style="textStyle">I am a custom element !</p>
      </div>
    </Animation>

    <button @click="toggleElement">Toggle Element</button>
  </div>
</template>

<script>
import Animation from "./Animated.vue";

export default {
  components: {
    Animation,
  },
  props: {
    content: { type: Object, required: true },
  },
  data() {
    return {
      showElement: true,
    };
  },
  methods: {
    toggleElement() {
      this.showElement = !this.showElement;
    },
  },
};
</script>
