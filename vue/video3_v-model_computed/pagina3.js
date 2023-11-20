const app= new Vue({ // instancia
    el:'#app', //permite llamar al div llamado app
    data:{ //datos 
        Titulo: 'Tienda',
        //Categoria:['Camisa','Pantalon','Medias','Busos'] //ARRAY se necesita iterar en un ciclo for para leer el contenido del array

        //otro metodo trabaja con objetos

        Categoria:[
            {nombre:'Camisa', cantidad:10},
            {nombre:'Pantalon', cantidad:0},
            {nombre:'Medias', cantidad:11},
            {nombre:'Busos', cantidad:20}


        ],
        nuevaCategoria:'',
        total:0



    },
    methods:{
        agregarCategoria(){
            this.Categoria.push({
                nombre:this.nuevaCategoria, cantidad:0
                
            });
            this.nuevaCategoria = '';

        }

    },
    computed:{
        sumarCategoria(){
            this.total = 0;
            for(tienda of this.Categoria){
                this.total=this.total + tienda.cantidad;
            }
            return this.total;

        }
    }



})