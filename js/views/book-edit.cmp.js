import { bookService } from "../services/book-service.js";

export default {
  template: `

 <section v-if="bookToEdit" class="book-edit app-main">
  <h4>{{pageTitle}}</h4>
    <form @submit.prevent="save">
        <input type="text" placeholder="title" v-model="bookToEdit.title">
        <button>Save</button>    
    </form>
 </section>
`,
  data() {
    return {
      bookToEdit: null,
    };
  },
  created() {
    const id = this.$route.params.bookId;
    if (id) {
      bookService.get(id).then((book) => (this.bookToEdit = book));
    } else {
      this.bookToEdit = bookService.getEmptyBook();
    }
  },
  methods: {
    save() {
      if (!this.bookToEdit.title) return;
      bookService.save(this.bookToEdit).then((book) => {
        this.$router.push("/book");
      });
    },
  },
  computed: {
    pageTitle() {
      const id = this.$route.params.bookdId;
      return id ? "Edit Book" : "Add Book";
    },
  },
};
