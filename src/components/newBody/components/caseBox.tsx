/* eslint-disable @typescript-eslint/no-explicit-any */
import "./common.less";

function CaseBox(props: { imgList: Array<any> }) {
    let { imgList } = props
    imgList = [
        { name: 'qqq', src: 'https://file.ysronline.uninote.com.cn/resource/726/xm5.png', mini: 'https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/b8c391776cfdf40bfa04ff8ab20c7b68.png' },
        // { name: 'www', src: 'https://file.ysronline.uninote.com.cn/resource/726/xm5.png', mini: 'https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/b8c391776cfdf40bfa04ff8ab20c7b68.png' },
        // { name: 'rrr', src: 'https://file.ysronline.uninote.com.cn/resource/726/xm5.png', mini: 'https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/b8c391776cfdf40bfa04ff8ab20c7b68.png' },
        { name: 'rr', src: 'https://file.ysronline.uninote.com.cn/resource/726/xm5.png', mini: 'https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/b8c391776cfdf40bfa04ff8ab20c7b68.png' },
        { name: 'eee', src: 'https://file.ysronline.uninote.com.cn/resource/726/xm5.png', mini: 'https://ysr-resource-0205.oss-cn-chengdu.aliyuncs.com/uploads/b8c391776cfdf40bfa04ff8ab20c7b68.png' }
    ]
    const onMouseEnter = (e: any) => {
        const id = e.target.dataset.value
        const imgwrap = document.getElementById(id)
        if (imgwrap) {
            imgwrap.style.visibility = "visible"
        }
    }
    const onMouseLeave = (e: any) => {
        const id = e.target.dataset.value
        const imgwrap = document.getElementById(id)
        if (imgwrap) {
            imgwrap.style.visibility = "hidden"
        }
    }
    return (
        <div className='case-box' >
            <div className="case-box-main">
                <img src={'https://file.ysronline.uninote.com.cn/resource/726/xm5.png'}></img>
            </div>
            <div className="case-simple">
                {imgList.map((item,) => {
                    return (
                        <div onMouseLeave={onMouseLeave} key={item.name} data-value={item.name} className="case-simple-item">
                            <div id={item.name} data-value={item.name} onMouseLeave={onMouseLeave} className="case-simple-item-mini">
                                <img src={item.mini}></img>
                            </div>
                            <img onMouseEnter={onMouseEnter} className="case-simple-item-bg" data-value={item.name} src={item.src} alt={item.name} />
                        </div>
                    )
                })}
            </div >
        </div>
    )
}

export default CaseBox
