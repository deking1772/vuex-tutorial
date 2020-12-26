<template>
  <transition name="modal" appear>
    <div class="modal modal__dim" v-on:click.self="$emit('close')">
      <div class="modal__content">
        <p class="modal__text">
          <slot name="modal-text"></slot>
        </p>
        <button class="modal__close" v-on:click="$emit('close')">OK</button>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">

.modal-enter {
  opacity: 0;

  .modal__content {
    transform: translateY(30px);
    transition: transform 0.6s;
  }
}

.modal-enter-active {
  transition: opacity 0.3s;
}

.modal-leave-active {
  transition: opacity 0.3s 0.05s;
}

.modal-leave-to {
  opacity: 0;

  .modal__content {
    transform: translateY(30px);
    transition: transform 0.6s;
  }
}
</style>