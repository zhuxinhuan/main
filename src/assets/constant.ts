const headData = [
    { name: '首页', id: 1, path: '/' },
    { name: '景观互动', id: 2, path: '/' },
    { name: '公司介绍', id: 3, path: '/' },

    {
        name: '掌上地图',
        children: [
            { name: '手绘地图', path: '/cooperation' },
            { name: '实时定位' },
            { name: '景观导览' },
        ]
    },
    { name: '联系我们', id: 4, path: '/' },
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
        content: `1:公司介绍公司介绍公司介绍公司介·2:公司介绍详情·3:司介绍公司介绍公司介绍公司介绍公司介绍`
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