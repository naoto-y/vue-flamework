require('./common/header/header');

Vue.component('vueFotter',{
    template: '<div class="vueFotter">フッター</div>',
});

//components
Vue.component('vuePage',{
    template: '<div class="page"><slot /></div>',
    props: [ 'app' ],
    mounted:function() {
    }
});
require('./component/linkBtn/linkBtn');

//pages
require('./pages/top/top');
require('./pages/apple/apple');
require('./pages/orange/orange');

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