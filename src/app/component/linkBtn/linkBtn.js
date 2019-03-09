module.exports = 
    Vue.component('linkBtn',{
        template: '<button class="linkBtn" @click="app.setPage(page)"><slot /></button>',
        props: [ 'page' ],
        data:function( ){
            return {
                app,
            }
        },
        created:function(){
            this.app = window.app;
        }
    })