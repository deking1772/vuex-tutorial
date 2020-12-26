<template>
  <div class="controller">
     <div class="select">
      <label class="blind" for="order">Order</label>
      <select name="order" id="order" class="selectbox" v-model="selected" @change="sortTodo">
        <option value="date-asc">Oldest</option>
        <option value="date-desc">Latest</option>
      </select>
    </div>
    <button class="clear" v-on:click="clearTodo">Clear All</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "date-asc"
    };
  },
  methods: {
    sortTodo() {
      console.log(this.selected);
      this.$emit("sortItem", { value: this.selected });
    },
    clearTodo() {
      this.$emit("clearAll");   
    }
  }
};
</script>