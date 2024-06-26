// const headData = [
//     { name: '首页', id: 1, path: '/' },
//     { name: '景观互动', id: 2, path: '/' },
//     { name: '应用场景', id: 3, path: '/' },
//     // {
//     //     name: '掌上地图',
//     //     children: [
//     //         { name: '手绘地图', path: '/cooperation' },
//     //         { name: '实时定位' },
//     //         { name: '景观导览' },
//     //     ]
//     // },
//     { name: '景区使用案例', id: 4, path: '/' },
//     { name: '解决方案', id: 5, path: '/' },
// ]
const headData = [
    { name: '首页', id: 1, path: '/' },
    { name: '功能概览', id: 2, path: '/' },
    { name: '景观互动', id: 3, path: '/' },
    { name: '全域旅游', id: 4, path: '/' },
    { name: '应用场景', id: 5, path: '/' },
    { name: '解决方案', id: 6, path: '/' },
    { name: '合作景区', id: 7, path: '/' },
]
const contentImg = [
    {
        id: 1,
        backgroundImage: 'https://uploadstatic.mihoyo.com/contentweb/20210719/2021071918001232800.jpg',
    },
    {
        id: 2,
        backgroundImage: 'https://uploadstatic.mihoyo.com/contentweb/20200319/2020031921550320292.jpg',
        name: "景观互动",
        content: "1：参与·2：娱乐·3：互动",
    },
    {
        id: 3,
        backgroundImage: 'https://uploadstatic.mihoyo.com/contentweb/20200319/2020031921552395638.jpg',
        name: `公司介绍`,
        content: `1:公司概况·2:合作案例·3:手绘地图·4:其他项`
    },
    {
        id: 4,
        backgroundImage: 'https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/8969f683b92839ac427c875d0d742be2_4825576482548821743.jpg',
        name: "联系我们",
        content: `公司名称：四川游界元始人网络科技有限公司·联系电话：028-85566666·地址：成都市武侯区人民南路四段商鼎国际2幢2单元2409`,
    },
]

export {
    headData, contentImg
}