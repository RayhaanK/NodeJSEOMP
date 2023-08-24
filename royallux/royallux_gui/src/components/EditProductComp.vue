<template>
    <div>
        <button
        type="button"
        class="btn2 mb-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
      >
        Edit
      </button>
    <!-- Modal -->
    <div class="container">
      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content bg-dark-subtle">
            <div class="modal-header text-center">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form @submit.prevent="submitEditForm(prodID)">
            <div class="modal-body">
                <p class="title">Product Name</p>
                <input type="text" id="title" v-model="editProd.prodName"/>
                <p class="title">Category</p>
                <input
                type="text"
                v-model="editProd.category"
                id="category"
                />
                <p class="title">Details</p>
                <input type="text" id="details" v-model="editProd.details"/>
                <p class="title">Content</p>
                <input
                type="text"
                v-model="editProd.content"
                id="description"
                />
                <p class="title">Price</p>
                <input type="text" id="amount" v-model="editProd.amount" />
                <p class="title">Quantity</p>
                <input
                type="text"
                v-model="editProd.quantity"
                id="quantity"
                />
                <p class="title">Image Link</p>
                <input
                type="text"
                v-model="editProd.prodUrl"
                id="imageLink"
                />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn1" data-bs-dismiss="modal">
                  Close
                </button>
                <button
                type="submit"
                class="btn1"
                id="addProduct"
                >
                Save changes
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
    return {
        editProd: {
          prodName: "",
          category: "",
          details: "",
          content: "",
          amount: "",
          quantity: "",
          prodUrl: "",
        },
      };
  },
  computed: {
  },
  methods: {
    async submitEditForm() {
      this.$store.dispatch('editProduct', this.editProd) 
    }
  } 
    }
</script>

<style scoped>
.btn1 {
  background-color: #f7f7f7;
  padding: 0.3rem;
  border-radius: 10px;
  width: 9rem;
  border: none;
}

.btn1:hover {
  background-color: #f7f7f788;
}

.btn2 {
  background-color: #f7f7f7;
  width: 4rem;
  padding: 0.3rem;
  border-radius: 10px;
  border: none;
}

.btn2:hover {
  background-color: #f7f7f7d3;
}

input {
  width: 100%;
}
</style>