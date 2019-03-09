Vue.component('vueHeader',{
    template: '<div class="vheHeader">header<button @click="app.setPage()">トップ</button><button @click="app.setPage(' + "'apple'" + ')">リンゴ</button></div>',
    props: [ 'app' ],
})

Vue.component('vueFotter',{
    template: '<div class="vueFotter">fotter</div>',
})

Vue.component('vuePage',{
    template: '<div class="page"><slot /></div>',
    props: [ 'app' ],
    mounted:function() {
    }
})

Vue.component('top', {
    template: '<div>{{title}}</div>',
    data:function () {
        return {
          title: 'top',
        }
    },
})

Vue.component('apple', {
    template: '<div class="apple" :app="this">リンゴのページ<button @click="app.setPage(' + "'orange'" +')">オレンジ</button></div>',
    data:function( ){
        return {
            app,
        }
    },
    created:function(){
        this.app = window.app;
    }
})

Vue.component('orange', {
    template: '<div>オレンジのページ</div>',
})

window.app = class {};

window.app = new Vue({
    el: '#app',
    template: '<div class="main"><vueHeader :app="this"/><component :is="page" /><vueFotter /></div>',
    data: {
        page: 'top',
    },
    created:function() {
    },
    mounted:function() {
    },
    methods: {
        setPage:function(page){
            if(!page){
                this.page = 'top';
            } else {
                this.page = page;
            }
        }
    }
})