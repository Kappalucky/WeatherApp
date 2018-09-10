<template>
  <transition name="modal-fade">
    <div
      class="modal fade show"
      role="dialog"
      aria-labelledby="modal"
      aria-hidden="true">
      <div
        class="modal-dialog modal-dialog-centered"
        role="document">
        <div class="modal-content">
          <header
            id="modalTitle"
            class="modal-header">
            <slot name="header">
              <h5 class="modal-title">Default Header</h5>
            </slot>
            <button
              type="button"
              class="close"
              aria-label="Close"
              @click="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </header>

          <section
            id="modalDescription"
            class="modal-body">
            <slot name="body">
              Default Body!
            </slot>
          </section>

          <footer class="modal-footer">
            <slot name="footer">
              Default footer!
            </slot>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

/*.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  //background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.modal-large {
  background: #ffffff;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}
.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}*/
.modal {
  justify-content: center;
}
.modal-footer {
  justify-content: center;
}
</style>
