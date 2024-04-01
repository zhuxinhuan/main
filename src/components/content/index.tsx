import './MainContent.less'
import { useCallback, useContext, useRef, useState } from 'react';
import { contentImg } from '@/assets/constant';
import { useInViewport, useMemoizedFn } from 'ahooks';
import Title from '../titile';
import { GlobalContext } from '@/context';

function MainContent() {
    const contentItemRef = useRef<HTMLDivElement[]>([]);
    const itemImgRef = useRef<HTMLImageElement[]>([]);
    const globalCtx = useContext(GlobalContext)
    const callback = useMemoizedFn((entry) => {
        if (entry.isIntersecting) {
            itemImgRef.current[entry.target.dataset.key].classList.add('animate__animated')
            itemImgRef.current[entry.target.dataset.key].classList.add('animate__headShake')
        }
    });
    useInViewport(contentItemRef.current, {
        callback,
        rootMargin: '0% 0px -70% 0px',
        root: () => document.getElementById('parent'),
    });

    const splitContent = useCallback((str: string) => {
        const result = str.split('·')
        if (result.length == 1) {
            return <span className='item-description'>{result[0]}</span>
        } else {
            return <ul>
                {
                    result.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        }
    }, [])
    return (
        <>
            {contentImg.map((item, index) => {
                return (<div key={index} className={globalCtx.mobile ? 'main-content-item main-content-item-mobile' : 'main-content-item'} style={{ height: window.innerHeight }} id={`${item.id}`} data-key={index} ref={(el: HTMLDivElement) => {
                    contentItemRef.current[index] = el;
                }}>
                    <Title id={item.id} />
                    <img className='main-content-item-img' src={item.backgroundImage} alt="" ref={(el: HTMLImageElement) => {
                        itemImgRef.current[index] = el;
                    }} id={`img${item.id}`} />
                    {
                        item.content && <div className='main-content-item-content'>
                            {splitContent(item.content)}
                        </div>
                    }
                </div>)
            })}
        </>
    )
}

export default MainContent
