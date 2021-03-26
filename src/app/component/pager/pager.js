const { isArray } = require('lodash');

module.exports =
    Vue.component('pager', {
        template: require('./pager.html'),
        props: ['data', 'dataNum'],
        data: function() {
            return {
                pagerData: [],
                currentPageData: null,
                currentPageNum: 1,
                minPage: 1,
                maxPage: '',
                keys: [],
            }
        },
        created: function(){
            let page = 0;
            let cnt = 0;
            let arr = [];
            Object.keys(this.data).forEach(key => {
                arr[cnt] = this.data[key];
                ++cnt;
                if(cnt >= this.dataNum){
                    this.pagerData[page] = arr;
                    arr = [];
                    ++page;
                    cnt = 0;
                }
            });
            this.currentPageData = this.pagerData[this.currentPageNum - 1];
            this.maxPage = this.pagerData.length;
        },
        methods: {
            toTop:function(){
                this.currentPageNum = 1;
                this.currentPageData = this.pagerData[this.currentPageNum - 1];
            },
            toEnd:function(){
                this.currentPageNum = this.pagerData.length;
                this.currentPageData = this.pagerData[this.currentPageNum - 1];
            },
            next:function(){
                ++this.currentPageNum;
                this.currentPageData = this.pagerData[this.currentPageNum - 1];
            },
            back:function(){
                --this.currentPageNum;
                this.currentPageData = this.pagerData[this.currentPageNum - 1];
            }
        }
    })