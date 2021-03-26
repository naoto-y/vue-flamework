module.exports =
    Vue.component('accordion', {
        template: require('./accordion.html'),
        data: function(){
            return {
                show: false,
            }
        },
        methods: {
            enter: function(el) {
                el.style.height = el.scrollHeight + 'px';
            },
            leave: function(el) {
                el.style.height = 0;
            }
        }
    })