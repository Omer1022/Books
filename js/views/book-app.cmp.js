import { bookService } from "../services/book-service.js";
import bookFilter from "../cmps/book-filter.cmp.js";
import bookList from "../cmps/book-list.cmp.js";

export default {
  template: `
    <section class="book-app">
      <book-filter @filtered="filterBook"/>
      <router-link to="/book/edit">Add New Book</router-link>
      <book-list :books="booksToShow" @removed="removeBook" />
  </section>
`,
  components: {
    bookFilter,
    bookList,
  },
  data() {
    return {
      books: null,
      filterBy: null,
    };
  },
  created() {
    bookService.query().then((books) => (this.books = books));
  },
  methods: {
    removeBook(bookId) {
      bookService.remove(bookId).then(() => {
        const idx = this.books.findIndex((book) => book.id === bookId);
        this.books.splice(idx, 1);
      });
    },
    filterBook(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    booksToShow() {
      if (!this.filterBy) return this.books;
      const regex = new RegExp(this.filterBy.title, "i");
      return this.books.filter((book) => regex.test(book.title));
    },
  },
  unmounted() {},
};
