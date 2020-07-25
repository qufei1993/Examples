
/* const { get } = require('../util/httpClient');

const url = 'https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=31.249632&longitude=121.457939&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5'

function getHomeData(url){
    const result = get(url);
} */

module.exports = {
    hasMore: true,
    data: [
        {
            img: 'https://p0.meituan.net/deal/0be8d6f4610dee0150b65f874192cabd47239.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
            title: '汉堡大大',
            subTitle: '叫我汉堡大大，还你多彩口味',
            price: '28',
            distance: '120m',
            mumber: '389',
            id: Math.random().toString().slice(2)
        },
        {
            img: 'https://p1.meituan.net/deal/__46171757__9330126.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
            title: '北京开源饭店',
            subTitle: '[望京]自助晚餐',
            price: '98',
            distance: '140m',
            mumber: '689',
            id: Math.random().toString().slice(2)
        },
        {
            img: 'https://p1.meituan.net/deal/495ecea2c53950a4c48eb955da1ec6c666035.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
            title: 'Regiustea天御皇茶',
            subTitle: '仅售15.8元！价值21元的全场饮品任选1杯，提供免费WiFi。',
            price: '15.8',
            distance: '160',
            mumber: '106',
            id: Math.random().toString().slice(2)
        },
        {
            img: 'https://p1.meituan.net/deal/4892df4dd552ef106a74a9b923d4d195132226.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
            title: '婚纱摄影',
            subTitle: '免费试穿，拍照留念',
            price: '2899',
            distance: '160',
            mumber: '58',
            id: Math.random().toString().slice(2)
        },
        {
            img: 'https://p1.meituan.net/deal/aca981b70cf8d8e0cc13bdc7264cdf6e90506.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
            title: '麻辣串串烧',
            subTitle: '双人免费套餐等你抢购',
            price: '0',
            distance: '160',
            mumber: '1426',
            id: Math.random().toString().slice(2)
        }
    ]
}