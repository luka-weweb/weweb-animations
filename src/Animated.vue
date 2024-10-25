<template>
  <transition :name="animationName">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
  },
  data() {
    return {
      showElement: true,
    };
  },
  computed: {
    animationName() {
      return this.content.animation === "slide-in"
        ? "slide-in-" + this.content.side
        : this.content.animation;
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  animation: fade-in ease;
  animation-duration: 500ms;
}
.fade-leave-active {
  animation: fade-in ease reverse;
  animation-duration: 500ms;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.zoom-enter-active {
  animation: zoom-in ease;
  animation-duration: 500ms;
}
.zoom-leave-active {
  animation: zoom-in ease reverse;

  animation-duration: 500ms;
}

@keyframes zoom-in {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.slide-in-left-enter-active {
  animation-name: slide-in-left;
  animation-duration: 500ms;
  animation-timing-function: ease;
}

.slide-in-left-leave-active {
  animation-name: slide-in-left;
  animation-duration: 500ms;
  animation-timing-function: ease;
}

@keyframes slide-in-left {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-right-enter-active {
  animation-name: slide-in-right;
  animation-duration: 500ms;
  animation-timing-function: ease;
}

.slide-in-right-leave-active {
  animation-name: slide-in-right;
  animation-duration: 500ms;
  animation-timing-function: ease;
}

@keyframes slide-in-right {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-top-enter-active {
  animation-name: slide-in-top;
  animation-duration: 500ms;
  animation-timing-function: ease;
}

.slide-in-top-leave-active {
  animation-name: slide-in-top;
  animation-duration: 500ms;
  animation-timing-function: ease;
  animation-direction: reverse;
}

@keyframes slide-in-top {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-in-bottom-enter-active {
  animation-name: slide-in-bottom;
  animation-duration: 500ms;
  animation-timing-function: ease;
}

.slide-in-bottom-leave-active {
  animation-name: slide-in-bottom;
  animation-duration: 500ms;
  animation-timing-function: ease;
}

@keyframes slide-in-bottom {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
