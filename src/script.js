var app = new Vue({
    el: '#app',
    data:{
        arrayDischi: '',
        generi: ['All'],
        search: 'All'
    },
    mounted(){
        axios
        .get('server.php')
        .then(result => {
            this.arrayDischi = result.data;
            console.log(this.arrayDischi);
            this.arrayDischiFiltrato = this.arrayDischi;

            this.arrayDischi.forEach(element => {
                if(!this.generi.includes(element.genre)){
                    this.generi.push(element.genre);
                }
                console.log(this.generi);
            });
        })
    },
    methods: {
        filterBy(){

            if(this.search == "All"){
                this.arrayDischiFiltrato = this.arrayDischi;
            }
            else{
                this.arrayDischiFiltrato = this.arrayDischi.filter((element) => {
                    return element.genre.match(this.search);
                    
                })
            }
        }
    }
})