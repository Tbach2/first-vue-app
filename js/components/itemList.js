Vue.component('ItemList', {

    props: {
        name: {
            type: String,
        },
        freezerItems: {
            type: Array,
            required: true,
        },
    },

    template:
            `<div>
               <list-item 
                  v-for="freezerItem in freezerItems"
                  :freezer-item="freezerItem"
                  :key="freezerItem.id"
                  @remove-freezer-item="$emit('remove-freezer-item', freezerItem)"
                  >                         
               </list-item>
               <p>
                  <small>Variety of Freezer Items: {{ freezerItems.length }}</small>
               </p>
            </div>`
});


