<template>
    <transition-group name="list" tag="ul" class="list" v-bind:class="listempty">
        <li class="list__item" v-for="(todoItem, index) in propItems" v-bind:key="todoItem.item">
            <input
            type="checkbox"
            v-bind:id="todoItem.item"
            v-bind:checked="todoItem.completed === true"
            v-on:change="toggleComplete(todoItem)"
        />
        <label v-bind:for="todoItem.item" class="list__label">
            {{todoItem.item}}
        </label>
            <button class="list__delete" v-on:click="removeTodo(todoItem, index)">
            <div class="blind">Delete</div>
            </button>
        </li>
    </transition-group>
</template>


<script>
export default {
  props: ["propItems", "propEmpty"], 
  methods: {
    removeTodo(todoItem, index) {
      this.$emit("removeItem", todoItem, index);
    },

    toggleComplete(todoItem) {
      this.$emit("toggleItem", todoItem);
    }
  },
  computed: {
    listempty() {
      return this.propEmpty ? "list--empty" : null;
    }
  },
};
</script>

<style lang="scss">
// ==== 트랜지션

.list-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.list-enter-active,
.list-leave-active {
  transition: transform 0.5s, opacity 0.5s;
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>