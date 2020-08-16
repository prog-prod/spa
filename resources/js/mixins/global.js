export default {
    data: () => {
        return {
            axios: window.axios,
            trans: window.trans,
            Pace: window.Pace,
            moment: window.moment
        }
    },
    methods:{
        chunkArray: function(myArray, chunk_size){
            var index = 0;
            var arrayLength = myArray.length;
            var tempArray = [];

            for (index = 0; index < arrayLength; index += chunk_size) {
                let myChunk = myArray.slice(index, index+chunk_size);
                // Do something if you want with the group
                tempArray.push(myChunk);
            }

            return tempArray;
        },
        capitalize: function (s) {
            if (typeof s !== 'string') return ''
            return s.charAt(0).toUpperCase() + s.slice(1)
        }
    },
    created(){
        this.moment.locale(this.trans.getLocale());
    }
}
