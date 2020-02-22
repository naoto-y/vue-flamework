Vue.component('top', {
    template: require('./top.html'),
    data:function () {
        return {
          title: 'top',
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