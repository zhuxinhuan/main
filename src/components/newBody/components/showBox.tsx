/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import "./common.less";
let prevId = -1
let init = false
function ShowBox(props: { imgList: Array<any> }) {
    const { imgList } = props
    useEffect(() => {
        // 初始化
        const first = document.querySelector(`.animation-item[data-value="${imgList[0].id}"]`)
        if (first) {
            first.classList.add('active')
            init = true
        }
    }, [imgList])
    const changeShow = (e: any) => {
        if (init) {
            const first = document.querySelector(`.animation-item[data-value="${imgList[0].id}"]`)
            first?.classList.remove('active')
            init = false
        }
        const parent = e.target.parentNode
        const nowId = e.target.dataset.value
        if (prevId === nowId) return    //重复点击当前，终止行为
        parent.classList.add('active')    // 添加当前的active
        const prev = document.querySelector(`.animation-item[data-value="${prevId}"]`)  // 移除上一个的active
        prev && prev.classList.remove('active')
        prevId = nowId
    }
    return (
        <div className='animation-box'>
            {
                imgList.map((item, index) => {
                    return <div key={index} className='animation-item' data-value={item.id}>
                        <img data-value={item.id} onClick={changeShow} src="https://file.ysronline.uninote.com.cn/resource/726/xm5.png" alt="" />
                    </div>
                })
            }
        </div >
    )
}

export default ShowBox
