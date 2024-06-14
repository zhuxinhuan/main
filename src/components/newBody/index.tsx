import './newBody.less'
import { useRef } from 'react';
import zhihuidaolan from '@/assets/zhihuidaolan.png';
import jingguanhudong from '@/assets/jingguanhudong.png';
import ShowBox from './components/showBox';
import CaseBox from './components/caseBox';
import juqing1 from '@/assets/juqing1.png';
import juqing2 from '@/assets/juqing2.png';
import chengshiyingxiao from '@/assets/chengshiyingxiao.png';
import { useInViewport, useMemoizedFn } from 'ahooks';

function NewBody() {
    const contentItemRef = useRef<HTMLDivElement[]>([]);
    const itemImgRef = useRef<HTMLImageElement[]>([]);
    const callback = useMemoizedFn((entry) => {
        if (entry.isIntersecting) {
            itemImgRef.current[entry.target.dataset.key].classList.add('animate__animated')
            itemImgRef.current[entry.target.dataset.key].classList.add('animate__headShake')
        } else {
            itemImgRef.current[entry.target.dataset.key].classList.remove('animate__animated')
            itemImgRef.current[entry.target.dataset.key].classList.remove('animate__headShake')
        }
    });
    useInViewport(contentItemRef.current, {
        callback,
        rootMargin: '0% 0px -70% 0px',
        root: () => document.getElementById('parent'),
    });


    return (
        <>
            <div className='home-header'>
                <div className='home-header-title'>
                    <span>让历史人文之美,在指尖绽放</span>
                    <span>Let the beauty of history and humanity bloom at your fingertips</span>
                </div>
            </div>
            <div className='home-content'>
                <div id='1'>
                    <div className='home-content-title'>掌上地图</div>
                    <div className='desc'>提供了丰富的地图工具和功能，旨在帮助用户快速掌握自己</div>
                    <img className='img-1' src={zhihuidaolan} alt="" />
                </div>
                <div id="2">
                    <div className='home-content-title'>景观互动  </div>
                    <div className='content-bg1'>
                        <div className='left-content'>
                            提供了丰富的地图工具和功能，旨在帮助用户快速掌握当前所在景区位置，规划路线，并准确到达目的地。提供了丰富的地图工具和功能，旨在帮助用户快速掌握当前所在景区位置，规划路线，并准确到达目的地。
                        </div>
                        <img src={jingguanhudong} alt="" />
                    </div>
                </div>
                <div id="3">
                    <div className='home-content-title'>研学浏览  </div>
                    <ShowBox imgList={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]} />
                </div>
                <div>
                    <div className='home-content-title'>剧情游览  </div>
                    <div className='content-bg2'>
                        <div>提供了丰富的地图工具和功能，旨在帮助用户快速掌握当前所在景区位置，规划路线，并准确到达目的地。</div>
                        <img src={juqing1} alt="" />
                        <img src={juqing2} alt="" />
                    </div>
                </div>
                <div id="4">
                    <div className='home-content-title'>掌上导览  </div>
                    <img className='img-1' src={chengshiyingxiao} alt="" />
                </div>
                <div id="5">
                    <div className='home-content-title'>合作案例  </div>
                    <CaseBox imgList={[]} />
                </div>
            </div>

        </>
    )
}

export default NewBody
