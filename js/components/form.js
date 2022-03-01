Vue.component('AddFreezerItemForm', {

    props: {
        freezerItem: {
            type: Object,
            required: true,
        },
    },

    methods: {
        addFreezerItem() {
            this.$emit('add-freezer-item', this.freezerItem)
        }
    },

    template:
            `<div>
               <b-form @submit.prevent="addFreezerItem">
                  <b-form-group
                     id="input-group-name"
                     label="Item Name: "
                     label-for="input-name"
                  >     
                     <b-form-input
                        id="input-name"
                        v-model="freezerItem.name"
                        placeholder="Item Name: "
                        required
                     >
                     </b-form-input>           
                  </b-form-group>
                  <b-form-group
                     id="input-group-description"
                     label="Item Description: "
                     label-for="input-description"
                  >     
                     <b-form-input
                        id="input-description"
                        v-model="freezerItem.description"
                        placeholder="Item Description: "
                        required
                     >
                     </b-form-input> 
                  </b-form-group> 
                  <b-form-group
                     id="input-group-quantity"
                     label="Item Quantity: "
                     label-for="input-quantity"
                  >     
                     <b-form-input
                        id="input-quantity"
                        v-model="freezerItem.quantity"
                        placeholder="Item Quantity: "
                        type="number"
                        required
                     >
                     </b-form-input>      
                  </b-form-group>                
                  <b-button variant="info" type="submit">Add Freezer Item</b-button>                             
               </b-form>
            </div>`
});