const app= new Vue({ // instancia
    el:'#app', //permite llamar al div llamado app
    data:{ //datos 
        Titulo: 'Tienda',
        //Categoria:['Camisa','Pantalon','Medias','Busos'] //ARRAY se necesita iterar en un ciclo for para leer el contenido del array

        //otro metodo trabaja con objetos

        Categoria:[
            {Nombre:'Camisa', cantidad:10},
            {Nombre:'Pantalon', cantidad:0},
            {Nombre:'Medias', cantidad:11},
            {Nombre:'Busos', cantidad:20}
        ],
        nuevaCategoria:''

    },
    methods:{ //metodos
        agregarCategoria(){ //nuevo metodo 
            console.log('diste click');
        }
    }



})