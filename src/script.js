var app = new Vue({
    el: '#app',
    data:{
        ciao: 'come stai',
        arrayDischi: ''
    },
    mounted(){
        axios
        .get('server.php')
        .then(result => {
            this.arrayDischi = result.data;
            console.log(this.arrayDischi);
        })
    }
})