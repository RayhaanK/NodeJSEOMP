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
        class="table table-responsive table-bordered border-black table-light table-hover"
      >
        <thead>
          <tr>
            <th scope="col">ID#</th>
            <th scope="col">Title</th>
            <th scope="col d-none d-sm-block">Image</th>
            <th scope="col d-none d-sm-block">Description</th>
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
              <div class="tableRows d-none d-sm-block">
                <img class="img-fluid" :src="product.prodUrl" :alt="product.prodName" loading="lazy" />
              </div>
            </td>
            <td>
              <div class="tableRows d-none d-sm-block">{{ product.details }}</div>
            </td>
            <td>
              <div class="tableRows">R{{ product.amount }}</div>
            </td>
            <td>
              <div class="tableRows">
                <editButton :product="product"/>
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
import editButton from "@/components/EditProductComp.vue"
export default {
  components: {
    addButton, editButton
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchProduct");
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
  background-color: #000000;
  color: white;
  padding: 0.3rem;
  border-radius: 10px;
  width: 4rem;
  border: 1px solid black;
}

.btn1:hover {
  background-color:white;
  color: black;
}

.btn2 {
  background-color: #000000;
  color: white;
  width: 9rem;
  padding: 0.3rem;
  border-radius: 10px;
  border: 1px solid black;
}

.btn2:hover {
  background-color: #fffdfd;
  color: black;
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
@media screen and (max-width: 808px) {

}
</style>
