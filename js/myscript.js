const { createApp } = Vue;

createApp ({
    data () {
        return {
            emailList: []
        }
    },
    mounted () { 
            for( i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((result) => {
                        console.log(result.data.response);
                        this.emailList.push(result.data.response);
                    });
            };
            console.log(this.emailList);
    }
}).mount("#myApp");