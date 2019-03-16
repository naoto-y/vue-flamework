//common
require('./common/header/header');
require('./common/footer/footer');

//components
require('./component/vuePage');
require('./component/linkBtn/linkBtn');

//pages
require('./pages/top/top');
require('./pages/apple/apple');
require('./pages/orange/orange');

window.app = class {};

window.app = new Vue({
    el: '#app',
    template: require('./app.html'),
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