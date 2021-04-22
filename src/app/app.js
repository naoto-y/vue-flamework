const { set } = require('lodash');

//common
require('./common/header/header');
require('./common/footer/footer');
require('./common/vuePage');

//components
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
            modalList: [],
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
                if(!page){
                    this.page = 'top';
                } else {
                    this.page = page;
                }
                //history.pushState('', '', page);
            },
            createModalList: function(){
                this.modalList = document.getElementsByClassName('modalWrapper');
            },
            openModal:function (name) {
                Object.keys(this.modalList).forEach(key => {
                    if (name === this.modalList[key].getAttribute('modal-name')) {
                        this.modalList[key].classList.add('display');
                        return;
                    }
                });
            },
            closeModal: function (name) {
                Object.keys(this.modalList).forEach(key => {
                    if (name === this.modalList[key].getAttribute('modal-name')) {
                        this.modalList[key].classList.remove('display');
                        return;
                    }
                });
            },
        }
    })
});