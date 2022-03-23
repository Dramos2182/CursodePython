const app = Vue.createApp({
    data(){
        return{
            Nombre: 'David',
            apellido: 'Ramos',
            email: 'dramosmireles@inovvaccion.mx',
            genero: 'male',
            foto:'https://randomuser.me/api/portraits/men/3.jpg'

        }
    },
    methods: {
        async cambiarusuario(){
            const rest=await fetch('https://randomuser.me/api/');
            const {results}=await rest.json();

            this.Nombre= results[0].name.first
            this.apellido= results[0].name.last
            this.email= results[0].email
            this.genero= results[0].gender
            this.foto= results[0].picture.large
        }
    }
})
app.mount('#app');


