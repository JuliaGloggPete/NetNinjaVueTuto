const app = Vue.createApp({

data(){
    return{
        url: 'http://www.thenetninja.co.uk',
        showBooks: true,
        books:[
            { title: 'The Final Empire',author: 'brandon sanderson', img: 'assets/1.jpeg', isFav:true},
            { title: 'TBook 2',author: 'Bla bla',img: 'assets/2.jpeg', isFav: false},
            { title: 'Book 3',author: 'Bla blu blu', img: 'assets/3.jpeg', isFav:true},
    ],

       
        x:0,
        y:0
    }
},

methods:{
    toggleShowBooks(){

       this.showBooks = !this.showBooks

    },
    handleEvent(e, data)//e = always the first argument därför $event om man vill ha det med och en till param
    {
        console.log(e, e.type)
        if(data){
            console.log(data)
        }
    },
    handleMousemove(e){
        this.x = e.offsetX
        this.y = e.offsetY

    }
  
   
}

//template: '<h2> Hallo </h2>'
})//routcomponent


app.mount('#app')

