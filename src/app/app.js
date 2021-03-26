const { set } = require('lodash');

//common
require('./common/header/header');
require('./common/footer/footer');

//components
require('./component/vuePage');
require('./component/linkBtn/linkBtn');
require('./component/accordion/accordion');
require('./component/modal/modal');
require('./component/pager/pager');

//pages
require('./pages/top/top');
require('./pages/apple/apple');
require('./pages/orange/orange');

window.app = class {};

document.addEventListener('DOMContentLoaded',function(){
    window.app = new Vue({
        el: '#app',
        template: require('./app.html'),
        data: {
            page: 'top',
        },
        created:function() {
            if(location.pathname == '/') {
                //history.replaceState('', '', 'top');
            } else {
                this.setPage(location.pathname);
                //history.replaceState('', '', location.pathname);
            }
        },
        mounted:function() {
        },
        methods: {
            setPage:function(page){
                console.log(page);
                if(!page){
                    this.page = 'top';
                } else {
                    this.page = page;
                }
                //history.pushState('', '', page);
            },
            openModal:function (name) {
                const modals = document.getElementsByClassName('modalWrapper');
                let modalObj;
                Object.keys(modals).forEach(key => {
                    if (name === modals[key].getAttribute('modal-name')) {
                        modalObj = modals[key];
                        return;
                    }
                });
                modalObj.classList.add('display');
            },
        }
    })
});