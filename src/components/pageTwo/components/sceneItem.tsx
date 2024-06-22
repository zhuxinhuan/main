import { useEffect, useRef, useState } from 'react'
import { useInViewport } from "ahooks";
import { animated, Spring } from "react-spring";
function SceneItem(props: { url: string, name: string }) {
    const { url, name } = props
    const ref = useRef(null);
    const [inview] = useInViewport(ref);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (inview) {
            setIsVisible(inview);
        }
    }, [inview]);
    return (
        <div ref={ref} className='flex align-center justify-center'>
            <div className='w-200 h-300 rounded-2xl relative overflow-hidden flex justify-center items-center shadow-2xl'>
                <img className='w-full h-full object-cover absolute left-0 top-0 ' src={url} alt="" />
                <Spring
                    to={{ opacity: isVisible ? 1 : 0, translateY: isVisible ? 0 : 100, }} config={{ duration: 800, }}            >
                    {(styles) => (
                        <animated.div style={styles}>
                            <div className='w-60 h-1/2 text-center backdrop-blur-sm flex items-center border border-white rounded-lg  '>
                                <span className='text-3xl font-blod block w-60 text-white '>{name}</span>
                            </div>
                        </animated.div>
                    )}
                </Spring>
            </div>
        </div>
    )
}
export default SceneItem