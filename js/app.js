const app = new Vue({
    el: '#app',

    data: {
        freezerItem: {
            name: '',
            description: '',
            quantity: null
        },
        freezerItemList: [
            {name: 'Vegan Pizza', description: 'Italian Shame', quantity: 3},
        ],
    },

    methods: {
        addFreezerItem() {
            this.freezerItemList.push(this.freezerItem)

            this.freezerItem = {
                name: '',
                description: '',
                quantity: null
            }
        },
        removeFreezerItem(freezerItem) {
            this.freezerItemList.splice(this.freezerItemList.indexOf(freezerItem), 1);
        }
    }
});