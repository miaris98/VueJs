<template>
  <div class="container">
    <div class="block" :class="{ Ani: animatedBl }"></div>
    <button @click="animateB">Animate</button>
  </div>
  <div class="container">
    <transition name="Para"
      ><!-- you can name each step ie enter-to-class="some_name" -->
      <p v-if="isP_visible">Now you see me</p>
    </transition>
    <button @click="pVisibile">Toggle P</button>
    <div class="container">
      <transition name="fade-button" mode="out-in">
      <button @click="show" v-if="!buttonVisibility">Show</button>
      <button @click="hide" v-else>Hide</button>
      </transition>
    </div>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBl: false,
      isP_visible: false,
      buttonVisibility: false
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    pVisibile() {
      this.isP_visible = !this.isP_visible;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateB() {
      this.animatedBl = true;
    },
    show() {
      this.buttonVisibility = true;
    },
    hide() {
      this.buttonVisibility = false;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /*transition: transform 0.3s ease-out;*/
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.Ani {
  /*transform: translateX(-50px);*/
  animation: slide-fade 0.5s ease-out forwards;
}

.Para-enter-from {
  opacity: 0;
  transform: translateY(-30px) scale(0.9);
}

.Para-enter-active {
  transition: all 0.3s ease-out;
}

.Para-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.Para-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.Para-leave-active {
  transition: all 0.3s ease-in;
}

.Para-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.9);
}

.fade-button-enter-from
.fade-button-leave-to{
  opacity: 0;
}

.fade-button-enter-active{
  transition: opacity 0.3s ease-out ;
}

.fade-button-leave-active{
  transition: opacity 0.3s ease-in ;
}

.fade-button-enter-to
.fade-button-leave-from{
  opacity: 1;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  69% {
    transform: translateX(120px) scale(0.9);
  }
  100% {
    transform: translateX(-120px) scale(1.1);
  }
}
</style>
