import { useEffect, useRef, useState } from 'react'
import { useInViewport } from "ahooks";
import { animated, Spring } from "react-spring";
import ApplicationItem from './components/applicationItem'
import SceneItem from './components/sceneItem'
import SolutionItem from './components/solutionItem'
import Wrap from './components/wrap'
import './pageTwo.less'
function PageTwo() {
    const ref = useRef(null);
    const [inview] = useInViewport(ref);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (inview) {
            setIsVisible(inview);
        }
    }, [inview]);
    return (
        <div className='w-full h-full relative'>
            <div id="1" className='w-full h-full relative'>
                <img className='w-full h-full' src="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/781576e038c6ddb83cef61e418514c44.png" alt="" />
                <div ref={ref} className='absolute top-0 left-0 w-full h-full text-white flex justify-center items-center flex-col'>
                    <Spring to={{ opacity: isVisible ? 1 : 0, translateY: isVisible ? -200 : 600, }} config={{ duration: 500, }} >
                        {(styles) => (
                            <animated.h1 className="text-[36px] md:text-[48px] lg:text-[54px] font-semibold w-fit" style={styles} >
                                让历史人文之美，在指尖绽放。
                            </animated.h1>
                        )}
                    </Spring>
                    <Spring to={{ opacity: isVisible ? 1 : 0, translateY: isVisible ? -190 : 100, }} config={{ duration: 600, }}>
                        {(styles) => (
                            <animated.p className="text-[24px] md:text-[36px] lg:text-[42px] font-semibold w-fit" style={styles} >
                                Let the beauty of history and humanity bloom at your fingertips
                            </animated.p>
                        )}
                    </Spring>

                </div>
            </div>
            <Wrap target={'2'} desc="元始人智慧导览系统为游客带来个性化手机导览体验，涵盖手绘地图、全景导览、语音讲解、线路规划、景观互动、特色游览及IP文创孵化等服务及营销功能，全面提升景区服务质量，为游客带来更便捷的旅游公共服务和更有趣的游览方式。">
                <img className='w-full h-full pt-30 pb-100' src="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/b0af9e43532e8fd5d9f2ba2cd0afddd4.jpg" alt="" />
            </Wrap>
            <Wrap target={'3'} title='景观互动，智慧景区新体验' desc='我们引入了前沿的AR技术，为游客带来全新的景观互动体验。通过AR技术，游客可以与景观、历史遗迹进行深度互动，置身于一个虚拟与现实交织的奇幻世界。能够更深入地了解景区的历史、文化和特色，享受前所未有的游览乐趣。'>
                <img className='w-full h-full pb-100' src="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/33f8fcc67f91faee744cf966ecf27fed.jpg" alt="" />
            </Wrap>
            <Wrap target={'4'} title="全域旅游" desc='全域旅游作为一种前沿的旅游发展理念和模式，专注于在特定区域内，以旅游业为主导，全面整合区域资源，实现资源、产业、生态、文化、社会等多元要素的深度融合与发展。元始人全域旅游平台致力于优化区域旅游公共服务，深度挖掘和传承区域文化，有效融合地方产业，进而驱动经济社会实现全面、协调、可持续的繁荣与发展。'>
                <img className='w-full h-full pt-40 pb-100' src="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/c36b79c8967f6e8c56ff06e8caf92f8a.jpg" alt="" />
            </Wrap>
            <Wrap target={'5'} title="应用场景" desc="智慧导览已成为文旅产业中不可或缺的一部分。元始人智慧景区系统广泛应用于各文旅场景，为游客提供一站式、个性化、便捷的智能化导览服务。为景区实现高效管理、实时监受区存要套明控、数据分析和精准营销，提高运营效率和服务质量。">
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-1 gap-40 pt-40 pb-100 md:px-100 lg:px-240'>
                    <SceneItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/14e1cf99bea4541bbe20585dab4b0525.jpg" name="景区"></SceneItem>
                    <SceneItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/8b16cda8b425955b17505e42f1d9b203.jpg" name="展览馆"></SceneItem>
                    <SceneItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/8170bf6160a4bdb912a932d675d492cc.jpg" name="主题公园"></SceneItem>
                    <SceneItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/0eb5fbd46b502f563e9ec1e47f30fb8d.jpg" name="全域旅游"></SceneItem>
                    <SceneItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/15420d419cb9bfb33f3197ab673b87f8.jpg" name="动植物园"></SceneItem>
                    <SceneItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/f71a1e606adb873cc1dd69124b1f11a4.jpg" name="博物馆"></SceneItem>
                </div>
            </Wrap>

            <Wrap target={'6'} title="数字文旅解决方案" desc="元始人智慧景区导览广泛应用于各类旅游场景，包括旅游景区、博物馆、特色园区及全域旅游，为旅游场景精心打造功能丰富的电子导览平台，使游客能够畅享智慧、便捷、有趣的游览体验。">
                <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-y-40 pt-40 pb-100 md:px-80 lg:px-140'>
                    <ApplicationItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/1482963a7359e41b4424771686f076af.jpg" />
                    <ApplicationItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/fc0ba1d756f27c7d6798d5e085075c2d.jpg" />
                    <ApplicationItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/c92cfa559f574882546340a682beed63.jpg" />
                    <ApplicationItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/3d81fa11b9b6e9a3cfcdc37935088012.jpg" />
                    <ApplicationItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/5cf46ec80e1a514361f459323ce2e5de.jpg" />
                    <ApplicationItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/8407db2a62d37a8cd66755d4864d3e7a.jpg" />
                    <ApplicationItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/d5e2252f582994a5f483b48dba50d3c3.jpg" />
                    <ApplicationItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/99b6b4f6e28f9e9fc50e316947fd053f.jpg" />
                </div>
            </Wrap>
            <Wrap target={'7'} title="合作景区风采">
                <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xs:grid-rows-8 md:grid-rows-4 lg:grid-rows-2 gap-x-10 gap-y-40 pt-40 pb-100 md:px-40 lg:px-100'>
                    <SolutionItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/a99aa27e3a9e359a731a5cb5b74dee18.jpg" desc="第三十届自贡国际恐龙灯会" />
                    <SolutionItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/c11c7d604fe8ccff3305824dac19a57a.jpg" desc="大石板古村" />
                    <SolutionItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/3e089f194862b34fcfa0d523933f5915.jpg" desc="建昌古城" />
                    <SolutionItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/528ed5da8767fd6c007b7c27da0084be.jpg" desc="江姐故里" />
                    <SolutionItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/c12f0a896612c86627edf083ef5f3b32.jpg" desc="西昌卫星发射中心" />
                    <SolutionItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/fe2a16663aed34b6459850838f77af14.jpg" desc="玉章故里" />
                    <SolutionItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/8db444a00fcaa0c77fdd5c481fd96c2d.jpg" desc="西汉酒泉胜迹" />
                    <SolutionItem url="https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/7a0e467ee25e76281cf91f973381759f.jpg" desc="夜游釜溪" />
                </div>
            </Wrap>
            {/* <FootComp></FootComp> */}
        </div>
    )
}

export default PageTwo
