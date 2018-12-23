Vue.component('page', {
    template: '<div class="page"><vueMain /></div',
    data:function(){
        return {
            routing: null,
        }
    },
    created:function(){
        console.log('page');
    },
    methods:{
        loadRouting:function(){
            this.routing = 'hoge';
        }
    }
})

Vue.component('vueMain', {
    template: '<div>main</div>',
    created:function(){
        console.log('main');
    }
})

Vue.component('myh1', {
    template: '<h1 :id="id" class="myh1">{{data}}</h1>',
    props: {id:null,data:null},
    methods: {
        color: function(text){
            echo('color: ${text};');
        }
    }
});

const app = new Vue({
    el: '#app',
    data: {
    },
    beforeCreate:function(){
    },
    mounted:function(){
    },
    methods:{

    }
})
