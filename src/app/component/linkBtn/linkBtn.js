module.exports = 
    Vue.component('linkBtn',{
        template: require('./linkBtn.html'),
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