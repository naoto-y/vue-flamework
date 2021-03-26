Vue.component('top', {
    template: require('./top.html'),
    data: function () {
        return {
            title: 'トップページ',
            pagerData: [
                {"no": 1, "name": "長門", "type": "戦艦", "class": "長門型"},
                {"no": 2, "name": "陸奥", "type": "戦艦", "class": "長門型"},
                {"no": 3, "name": "伊勢", "type": "戦艦", "class": "伊勢型"},
                {"no": 4, "name": "日向", "type": "戦艦", "class": "伊勢型"},
                {"no": 5, "name": "雪風", "type": "駆逐艦", "class": "陽炎型"},
                {"no": 6, "name": "赤城", "type": "正規空母", "class": "赤城型"},
                {"no": 7, "name": "加賀", "type": "正規空母", "class": "加賀型"},
                {"no": 8, "name": "蒼龍", "type": "正規空母", "class": "蒼龍型"},
                {"no": 9, "name": "飛竜", "type": "正規空母", "class": "飛竜型"},
                {"no": 10, "name": "島風", "type": "駆逐艦", "class": "島風型"},
                {"no": 11, "name": "吹雪", "type": "駆逐艦", "class": "吹雪型"},
                {"no": 12, "name": "白雪", "type": "駆逐艦", "class": "吹雪型"},
                {"no": 13, "name": "初雪", "type": "駆逐艦", "class": "吹雪型"},
                {"no": 14, "name": "深雪", "type": "駆逐艦", "class": "吹雪型"},
                {"no": 15, "name": "叢雲", "type": "駆逐艦", "class": "吹雪型"},
                {"no": 16, "name": "磯波", "type": "駆逐艦", "class": "吹雪型"},
                {"no": 17, "name": "綾波", "type": "駆逐艦", "class": "綾波型"},
                {"no": 18, "name": "敷波", "type": "駆逐艦", "class": "綾波方"},
                {"no": 19, "name": "大井", "type": "軽巡洋艦", "class": "球磨型"},
                {"no": 20, "name": "北上", "type": "軽巡洋艦", "class": "球磨型"},
            ],
        }
    },
    mounted: function() {
    },
    methods: {

    }
})