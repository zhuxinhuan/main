import './HeaderComponent.less'
import { headData } from '@/assets/constant'
import { GlobalContext } from '@/context'
import { useContext, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
function HeaderComponent() {
    const navigate = useNavigate()
    const location = useLocation()
    const globalCtx = useContext(GlobalContext)
    const contentPageRef = useRef<HTMLDivElement>(null)
    const logoImgRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (globalCtx.top > 100) {
            contentPageRef.current?.classList.add('header-background')
            logoImgRef.current?.classList.remove('logo-bg')
        } else {
            contentPageRef.current?.classList.remove('header-background')
            logoImgRef.current?.classList.add('logo-bg')
        }
    }, [globalCtx.top])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const changeAnchor = (event: any) => {
        const { id } = event.target.dataset
        if (location.pathname !== '/') {
            globalCtx.setCurrentHrefId(id)
            navigate('/')
            return
        }
        id && globalCtx.setCurrentHrefId(id)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const changePage = (event: any) => {
        const { path } = event.target.dataset
        if (path) {
            globalCtx.setCurrentHrefId(0)
            navigate(path)
        }
        event.stopPropagation()
    }

    return (
        <div ref={contentPageRef} className='header'>
            <div className='left'>
                <img ref={logoImgRef} className='logo' src="https://file.ysronline.uninote.com.cn/resource/3d95cede6e2edda291f23cfb2bf991fa.png" alt="游界元始人Logo" />
            </div>
            <div className='right'>
                {headData.map((item, index) => {
                    return <div className='item' data-id={item.id} key={index} onClick={changeAnchor}>
                        {item.name}
                        {
                            item.children && <div className='nav-container'>
                                {
                                    item.children && item.children.map((item, index) => {
                                        return <div className='nav-item' key={index} data-path={item.path} onClick={changePage}>
                                            <span data-path={item.path}  >
                                                {item.name}
                                                {item.path && <span className='has-path'></span>}
                                            </span>
                                        </div>
                                    })
                                }
                            </div>
                        }
                    </div>
                })}
            </div>
        </div>
    )
}

export default HeaderComponent
