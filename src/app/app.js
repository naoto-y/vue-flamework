Vue.component('vueHeader',{
    template: '<div class="vheHeader">header</div>',
})

Vue.component('vueFotter',{
    template: '<div class="vueFotter">fotter</div>',
})

Vue.component('page',{
    template: '<div class="page"><slot /></div>',
    mounted:function() {
        console.log('page');
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
    template: '<div>リンゴのページ</div>',
})

const app = new Vue({
    el: '#app',
    template: '<div class="main"><vueHeader /><component :is="page" /><button @click="setPage()">トップ</button><button @click="setPage(' + "'apple'" + ')">リンゴ</button></page><vueFotter /></div>',
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