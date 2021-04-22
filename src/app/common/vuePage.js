Vue.component('vuePage',{
    template: '<div class="page"><slot /></div>',
    props: [ 'app' ],
    mounted:function() {
        app.createModalList();
    },
    methods: {
    },
});