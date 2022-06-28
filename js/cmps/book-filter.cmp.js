export default {
  props: ["books"],
  template: `
   <section class="book-filter">
      Search: <input type="text" v-model="filterBy.title" @input="filter">
   </section>
  `,
  data() {
    return {
      filterBy: {
        title: "",
      },
    };
  },
  methods: {
    filter() {
      this.$emit("filtered", this.filterBy);
    },
  },
  computed: {},
};
