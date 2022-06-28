import { bookService } from "../services/book-service.js";

export default {
  template: `
      <section v-if="book" class="book-details app-main">
          <h4>Book Details</h4>
          <img :src="book.thumbnail" alt="book-img" class="book-card-img">
          <p>Title: {{book.title}}</p>
          <p>Subtitle: {{book.subtitle}}</p>
          <p>Authors: {{book.authors}}</p>
          <p>Published Date: {{book.publishedDate}}</p>
          <p>Description: {{book.description}}</p>
          <p>PageCount: {{book.pageCount}}</p>
          <p>Categories: {{book.categories}}</p>
          <p>Language: {{book.language}}</p>
          <p>listPrice: {{book.listPrice}}</p>
          <button @click="$emit('close')">X</button>
      </section>
  `,
  data() {
    return {
      book: null,
    };
  },
  created() {
    const id = this.$route.params.bookId;
    bookService.get(id).then((book) => (this.book = book));
    console.log("id", id);
  },
  methods: {},
  computed: {},
};
