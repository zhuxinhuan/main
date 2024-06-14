/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import "./MapContainer.less";
import AMapLoader from "@amap/amap-jsapi-loader";
const mockData = {
  code: 1,
  data: {
    sceneries: [
      {
        id: 150,
        name: "悠泊青城院子温泉美食度假酒店",
        logo: "https:\\/\\/ysr-resource-0205.oss-cn-chengdu.aliyuncs.com\\/images\\/logos\\/a6cd34bc6feba1a91e28a0cfa8f0ef08.jpg",
        phone: "111111111",
        license: null,
        description:
          "青城院子是隐于青城山脚下的一家幽幽庭院酒店。度假休憩在此，享受“诗酒花茶琴棋书画”的理想生活，修心，养生，青城下，体验“道”至逍遥，何论出入世。",
        price: null,
        start_time: "00:00:00",
        end_time: "23:59:00",
        city: "四川省成都市都江堰市青城山镇",
        address: "四川省都江堰市青城山镇大三路上善栖二期212号57栋1-2层",
        pv: 1814,
        lat: "30.8860773",
        lng: "103.5926314",
        distance: null,
        tags: [],
        property_tags: [],
        facility_tags: [],
      },
    ],
    stores: [
      {
        id: 17,
        name: "悠泊青城院子温泉美食度假酒店",
        image:
          "https:\\/\\/ysr-resource-0205.oss-cn-chengdu.aliyuncs.com\\/images\\/sceneries\\/2fb8c766290a69cf4fef84b59768fcb2.jpg",
        phone: null,
        license: null,
        lat: "30.88606955371876",
        lng: "103.59263434358581",
        consumption: "0.00",
        city: "四川省成都市都江堰市青城山镇",
        address: "四川省都江堰市青城山镇大三路上善栖二期212号57栋1-2层",
        tags: [{ id: 2, name: "商户标签" }],
        shopDesc:
          '<p><img src="https:\\/\\/ysr-resource-0205.oss-cn-chengdu.aliyuncs.com\\/uploads\\/475744ab9b5fc8b98ae4791346f969b2.jpg"><img src="https:\\/\\/ysr-resource-0205.oss-cn-chengdu.aliyuncs.com\\/uploads\\/265883a3b703d9b1cb006e1bc11f47ab.jpg"><\\/p>',
      },
      {
        id: 16,
        name: "泰安古镇",
        image:
          "https:\\/\\/ysr-resource-0205.oss-cn-chengdu.aliyuncs.com\\/images\\/sceneries\\/ec69d2055ae09cc75ffc02a334c91af8.jpg",
        phone: null,
        license: null,
        lat: "30.921168939011313",
        lng: "103.49118412064854",
        consumption: "0.00",
        city: "四川省成都市都江堰市青城山镇",
        address: "四川省都江堰市的青城后山",
        tags: [{ id: 2, name: "商户标签" }],
        shopDesc:
          '<p><img src="https:\\/\\/ysr-resource-0205.oss-cn-chengdu.aliyuncs.com\\/uploads\\/3aec1b395bc082a7d54e73412e78d6dc.jpg"><img src="https:\\/\\/ysr-resource-0205.oss-cn-chengdu.aliyuncs.com\\/uploads\\/075a792a0faede0ed614b78c79edadd6.jpg"><\\/p>',
      },
      {
        id: 15,
        name: "青城山",
        image:
          "https:\\/\\/ysr-resource-0205.oss-cn-chengdu.aliyuncs.com\\/images\\/sceneries\\/1791cbd9dde6382e841f253e239fd123.jpeg",
        phone: null,
        license: null,
        lat: "30.887850818151648",
        lng: "103.51000785827637",
        consumption: "0.00",
        city: "四川省成都市都江堰市青城山镇",
        address: "四川省成都市都江堰市",
        tags: [{ id: 2, name: "商户标签" }],
        shopDesc:
          '<p><img src="https:\\/\\/ysr-resource-0205.oss-cn-chengdu.aliyuncs.com\\/uploads\\/8f742dc265f74ae1c877fb5884ff0857.jpeg"><img src="https:\\/\\/ysr-resource-0205.oss-cn-chengdu.aliyuncs.com\\/uploads\\/c150925d353accbaf73a34462326363c.jpeg"><\\/p>',
      },
      {
        id: 14,
        name: "街子古镇",
        image:
          "https:\\/\\/ysr-resource-0205.oss-cn-chengdu.aliyuncs.com\\/images\\/sceneries\\/92d3cd413032f88fd8f0a2395f4688e0.jpeg",
        phone: null,
        license: null,
        lat: "30.813800065379436",
        lng: "103.55976821039803",
        consumption: "0.00",
        city: "四川省成都市崇州市街子镇",
        address: "四川省成都市崇州市",
        tags: [{ id: 2, name: "商户标签" }],
        shopDesc:
          '<p><img src="https:\\/\\/ysr-resource-0205.oss-cn-chengdu.aliyuncs.com\\/uploads\\/58fd2e53a2e30d509168e68671d9aa43.jpeg"><img src="https:\\/\\/ysr-resource-0205.oss-cn-chengdu.aliyuncs.com\\/uploads\\/63fc3202b0d2338da213cf0ae436eb8f.jpeg"><\\/p>',
      },
      {
        id: 13,
        name: "东软学院",
        image:
          "https:\\/\\/ysr-resource-0205.oss-cn-chengdu.aliyuncs.com\\/images\\/sceneries\\/71cfe63f32c6424a145675888cd8ebb6.jpg",
        phone: null,
        license: null,
        lat: "30.88840518991572",
        lng: "103.59651178121567",
        consumption: "0.00",
        city: "四川省成都市都江堰市青城山镇",
        address: "四川省成都市都江堰市青城山镇东软大道1号",
        tags: [{ id: 2, name: "商户标签" }],
        shopDesc:
          '<p><img src="https:\\/\\/ysr-resource-0205.oss-cn-chengdu.aliyuncs.com\\/uploads\\/1585f87d1e21817614b846b3e61dbf1d.jpg"><img src="https:\\/\\/ysr-resource-0205.oss-cn-chengdu.aliyuncs.com\\/uploads\\/63c94cdaa2107bf369a1aa1ff846b849.jpg"><\\/p>',
      },
    ],
    goods: [],
  },
  msg: "success",
};
let AMap: Map = {};
export default function MapContainer() {
  const map = useRef();
  const [allPositon, setAllPosition] = useState([])
  const [AllMarker, setAllMarker] = useState([])
  useEffect(() => {
    const initMap = async () => {
      window._AMapSecurityConfig = {
        securityJsCode: "db7811de20fec7676bbdf29685c1e90d",
      };
      AMap = await AMapLoader.load({
        key: "9a4c0c585c0c4200413af5624797ee28", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Walking'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      });
      map.current = new AMap.Map("container", {
        zoom: 11, // 初始化地图级别
      });
      return Promise.resolve();
    };
    initMap().then(() => {
      const { sceneries } = mockData.data;
      const { lat, lng } = sceneries[0]
      map.current.setCenter([lng, lat]); //设置地图中心点
      showAllMarker()
    });
    return () => {
      map?.current?.destroy();
    };
  }, []);
  const showAllMarker = () => {
    const { sceneries, stores } = mockData.data;
    const markerArr = [...sceneries, ...stores];
    const markerRef = []
    setAllPosition(markerArr)
    for (let index = 0; index < markerArr.length; index++) {
      const element = markerArr[index];
      const marker = new AMap.Marker({
        position: [element.lng, element.lat],
      });
      markerRef.push(marker)
    }
    setAllMarker(markerRef)
  };
  const editMarker = (event) => {
    console.log(typeof event.target.dataset.edit);
    if (event.target.dataset.edit === 'add') {
      map?.current?.add(AllMarker);
    } else {
      map?.current?.remove(AllMarker);
    }
  };
  const plan = async () => {
    const walking = new AMap.Walking({
      map: map.current
    });
    const result = await walking.search([allPositon[0].lng, allPositon[0].lat], [allPositon[3].lng, allPositon[3].lat])
    console.log(result, 'result')
    //根据起终点坐标规划步行路线
    // walking.search([allPositon[0].lng, allPositon[0].lat], [allPositon[3].lng, allPositon[3].lat], function (status, result) {
    //   // result即是对应的步行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkingResult
    //   if (status === 'complete') {
    //     console.log('绘制步行路线完成')
    //   } else {
    //     console.log('步行路线数据查询失败' + result)
    //   }
    // })
  };

  return (
    <>
      <div onClick={editMarker} data-edit="remove">移除所有图标</div>
      <div onClick={editMarker} data-edit="add">新增所有图标</div>
      <div onClick={plan}>路线规划</div>
      <div id="container" className="container"></div>
    </>
  );
}
