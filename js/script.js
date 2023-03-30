/*
Fare una lista della spesa per la pasquetta, 
inserire un campo di input 
dove poter inserire gli gli elementi della spesa,
aggiungere un btn per inviare gli elementi 
per ogni elemento della lista aggiungere un btn cancella
ed un btn con spunta
*/

const {createApp} = Vue;

createApp({
    data(){
        return{
            listaSpesa: [
                {
                    name: 'pane',
                    completed: false
                },
                {
                    name: 'acqua',
                    completed: false
                }
            ],
            newLista: '',
            message: '',
        }
    },
    methods: {
        inserisci(){
            this.message = '';
            const newItem= {
                name: this.newLista,
                completed: false
            }
            if(this.newLista === ''){
                this.message = 'inserisci un valore valido';
            } else{
                this.listaSpesa.push(newItem);                
            }
            
        },
        deleteList(index){
            this.listaSpesa.splice(index, 1);
        },
        complete(index){
            this.listaSpesa[index].completed = true;
        }
    }
}).mount('#app');