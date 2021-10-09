<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<style scoped>
dialog {
    margin:0;
    position: fixed;
    top: 20vh;
    left: 30%;
    width: 40%;
    background-color: wheat;
    box-shadow:0 2px 8px darkcyan;
    padding:1rem;
}
</style>