var app = new Vue({
    el: '#app',
    data:{
        arrayDischi: '',
        generi: ['All'],
        search: 'All',
        contatore: 0,
        arrayEffects : [
            {
                logo: "https://tidal.com/_nuxt/img/5.d4dd1c0.jpg",
                title: 'Oltre 70 milioni di canzoni. Senza pubblicitá.',
                descrizione: 'Con oltre 70 milioni di brani, uscite esclusive e tonnellate di interviste e video musicali, TIDAL ti avvicina agli artisti che ascolti. Completamente senza pubblicitá.'
            },
            {
                logo: "https://tidal.com/_nuxt/img/phone.e0723a9.png",
                title: 'Mix e radio.',
                descrizione: 'Ottieni una selezione personalizzata di brani e video con My Mix o scopri nuova musica con Artist Radio.'
            },
            {
                logo: "https://www.tpi.it/app/uploads/2018/03/Spotify.jpg",
                title: 'Playlist selezionate con cura.',
                descrizione: "Dai un'occhiata alle playlist originali selezionate personalmente dal nostro team di esperti o ascolta in streaming le playlist degli ospiti curate dagli artisti che ami."
            },
            {
                logo: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022219953",
                title: 'Video e livestream.',
                descrizione: "Guarda oltre 250.000 video di alta qualitá, tra cui video musicali, contenuti originali, livestream esclusivi ed eventi."
            },
            {
                logo: "https://www.droid-life.com/wp-content/uploads/2016/02/tidal-jay-z-samsung-980x653.jpg",
                title: 'In qualsiasi momento. Dovunque.',
                descrizione: "Ascolta quando vuoi e su qualsiasi dispositivo, che tu sia offline, in mezzo alla natura, a casa o in macchina."
            }
        ]
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
        },
        choiceEffect(indexFunction){
            this.contatore = indexFunction;
        }
    }
})