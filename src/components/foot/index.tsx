import React from "react";
import "./FootCompnent.less";

const FootCompnent = React.forwardRef<HTMLDivElement>(() => {
    return (
        <div className="foot">
            <span className="partner">
                合作伙伴:自贡文旅、荣县大佛文旅投、西昌文旅投、川威集团、启明芯智能、天府文创、海南留学生创业科技园、四川旅游学院、海南师范学院
            </span>
            <span className="project">
                合作项目:江姐故里、玉章故里(4A)、螺髻山景区(4A)、西昌卫星发射中心4大石板古村、建昌古城、酒泉西汉胜迹(4A)、肃州植物园、夜游釜溪、浣花溪公园、塔子山公园、望江楼公园
            </span>
            <span className="contactUs">
                联系我们:12345678900
            </span>
            <div className="imgwrap">
                <img className="img" src={'https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/b8c391776cfdf40bfa04ff8ab20c7b68.png'} alt="" />
            </div>
        </div>
    );

});

export default FootCompnent
