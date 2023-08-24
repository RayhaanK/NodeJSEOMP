<template>
  <section id="admin" class="adm">
    <div class="container-fluid">
      <h1
        class="display-1 text-center mb-2 p-4"
      >
        Admin Interface
      </h1>
      <div class="container-fluid">
        <button class="btn2 float-start" id="sort">Sort By ID(asc/desc)</button>
        <addButton/>
      </div>
      <table
        class="table table-responsive table-bordered border-black table-secondary table-hover"
      >
        <thead>
          <tr>
            <th scope="col">ID#</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.prodID">
            <th>
              <div class="tableRows">{{ product.prodID }}</div>
            </th>
            <td>
              <div class="tableRows">{{ product.prodName }}</div>
            </td>
            <td>
              <div class="tableRows">
                <img class="img-fluid" :src="product.prodUrl" :alt="product.prodName" loading="lazy" />
              </div>
            </td>
            <td>
              <div class="tableRows">{{ product.details }}</div>
            </td>
            <td>
              <div class="tableRows">R{{ product.amount }}</div>
            </td>
            <td>
              <div class="tableRows">
                <button
                  type="button"
                  class="btn1 mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  Edit
                </button>
                <div
                  class="modal fade"
                  id="exampleModal2"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content bg-dark-subtle">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Add Item
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <p>Title</p>
                        <input type="text" id="editTitle" />
                        <p>Description</p>
                        <input type="text" id="editDescription" />
                        <p>Content</p>
                        <input type="text" id="editContent" />
                        <p>Image Link</p>
                        <input type="text" id="editImageLink" />
                        <p>Price</p>
                        <input type="text" id="editPrice" />
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn1"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn1" id="updateProduct">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button @click.prevent="deleteContent(product.prodID)" class="btn1" id="deleteBtn">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import addButton from "@/components/AddProductComp.vue"
export default {
  components: {
    addButton
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    async deleteContent(prodID) {
      this.$store.dispatch('deleteProduct', prodID) 
    }
  }
};
</script>

<style scoped>
.btn1 {
  background-color: #f7f7f7;
  padding: 0.3rem;
  border-radius: 10px;
  width: 4rem;
  border: none;
}

.btn1:hover {
  background-color: #f7f7f788;
}

.btn2 {
  background-color: #f7f7f7;
  width: 9rem;
  padding: 0.3rem;
  border-radius: 10px;
  border: none;
}

.btn2:hover {
  background-color: #f7f7f7d3;
}

img {
  width: 11rem;
}

.tableRows {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
}

th {
  text-align: center;
}

td {
  height: 150px;
}

</style>
