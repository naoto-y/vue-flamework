module.exports = 
    Vue.component('modal', {
        template: require('./modal.html'),
        props: ['modalName'],
        data: function(){
            return {
            }
        },
        methods: {
            closeModal: function (name) {
                const modals = document.getElementsByClassName('modalWrapper');
                let modalObj;
                Object.keys(modals).forEach(key => {
                    if (name === modals[key].getAttribute('modal-name')) {
                        modalObj = modals[key];
                        return;
                    }
                });
                modalObj.classList.remove('display');
            }
        }
    })
