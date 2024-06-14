/* eslint-disable @typescript-eslint/no-explicit-any */
import "./common.less";

function CaseBox(props: { imgList: Array<any> }) {
    const { imgList } = props
    const onMouseEnter = (e: any) => {
        const id = e.target.dataset.value
        console.log(id, 1111111111)
        const imgwrap = document.getElementById(id)
        if (imgwrap) {
            // imgwrap.style.visibility = "visible"
            imgwrap.style.width = "100%"
            imgwrap.style.height = "100%"
        }
    }
    const onMouseLeave = (e: any) => {
        const id = e.target.dataset.value
        console.log(id, 22222222222)
        const imgwrap = document.getElementById(id)
        if (imgwrap) {
            // imgwrap.style.visibility = "hidden"
            imgwrap.style.width = "0%"
            imgwrap.style.height = "0%"
        }
    }
    return (
        <div className='case-box'>
            {imgList.map((item,) => {
                return (
                    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} data-value={item.id} className="case-item">
                        <div id={item.id} data-value={item.id} onMouseLeave={onMouseLeave} >
                            <img src={item.img}></img>
                        </div>
                    </div>
                )
            })}
            <div onMouseEnter={onMouseEnter} data-value={'ffff'} className="case-item">
                <div id="ffff" data-value={'ffff'} onMouseLeave={onMouseLeave} >
                    <img src="https://file.ysronline.uninote.com.cn/resource/726/xm5.png"></img>
                </div>
            </div>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} data-value={'gggg'} className="case-item">
                <div id="gggg" data-value={'gggg'} onMouseLeave={onMouseLeave} >
                    <img src="https://file.ysronline.uninote.com.cn/resource/726/xm5.png"></img>
                </div>
            </div>
        </div >
    )
}

export default CaseBox
