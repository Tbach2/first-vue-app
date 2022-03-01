Vue.component('ListItem', {

    data: function(){
        return {
            id: Math.floor(Math.random() * 10e16),
            visible: false
        }
    },

    props:  {
        freezerItem: {
            type: Object,
            required: true,
        },
    },

    methods: {
        deleteFreezerItem() {
            this.$emit('remove-freezer-item', this.freezerItem)
        },
        add() {
            this.freezerItem.quantity++
        },
        subtract() {
            this.freezerItem.quantity--
            if(this.freezerItem.quantity <= 0){
                this.$emit('remove-freezer-item', this.item);
            }
        }
    },

    template:
            `<div>
                <b-button 
                   variant="info"
                   :class="visible ? null : 'collapsed'"
                   :aria-expanded="visible ? 'true' : 'false'"
                   @click="visible = !visible"
                   block
                >
                   <h5>{{freezerItem.name}}</h5>
                </b-button>
                <b-collapse v-model="visible" class="mt-2">
                   <b-card>
                      <b-card-text>Description: {{freezerItem.description}}</b-card-text>
                      <b-card-text>Quantity: {{freezerItem.quantity}}</b-card-text>
                      <b-icon icon="plus-circle" @click="add">add</b-icon>
                      <b-icon icon="dash-circle" @click="subtract">sub</b-icon>
                      <b-icon icon="x-circle" variant="danger" @click="deleteFreezerItem"></b-icon>
                   </b-card>
                </b-collapse>
            </div>`
});