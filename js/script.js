/*
Fare una lista della spesa per la pasquetta, 
inserire un campo di input 
dove poter inserire gli gli elementi della spesa,
aggiungere un btn per inviare gli elementi 
per ogni elemento della lista aggiungere un btn cancella
ed un btn con spunta
*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            listaSpesa: [
                {
                    quantity: 2,
                    name: 'pane',
                    completed: false
                },
                {
                    quantity: 1,
                    name: 'acqua',
                    completed: false
                }
            ],
            newQuantity: 1,
            newLista: '',
            message: '',
        }
    },
    methods: {
        inserisci() {
            this.message = '';
            const newItem = {
                quantity: this.newQuantity,
                name: this.newLista,
                completed: false
            }
            if (this.newLista === '' || this.newQuantity < 1) {
                this.message = 'inserisci un valore valido';

            } else {
                let duplicate = false;
                for (let i = 0; i < this.listaSpesa.length; i++) {
                    if (this.listaSpesa[i].name === this.newLista) {
                        duplicate = true;
                    }
                }
                if (duplicate) {
                    this.message = 'questo prodotto è già presente nella lista';
                } else {
                    this.listaSpesa.push(newItem);
                }
            }

        },
        deleteList(index) {
            this.listaSpesa.splice(index, 1);
        },
        complete(index) {
            this.listaSpesa[index].completed = true;
        }
    }
}).mount('#app');