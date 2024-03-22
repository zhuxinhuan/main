import { HeaderComponent } from "@/components";
import { Outlet } from "react-router-dom";
import "./index.less";
import { useCallback, useContext, useEffect, useRef } from "react";
import { useScroll } from "ahooks";
import { GlobalContext } from "@/context";
import FootComp from '@/components/foot'
type Position = {
    left: number;
    top: number;
};
const DefaultLayout = () => {
    const contentRef = useRef<HTMLDivElement>(null)
    const scrollBtn = useRef<HTMLDivElement>(null)
    const footContainerRef = useRef<HTMLDivElement>(null)
    const globalCtx = useContext(GlobalContext)
    const scroll = useScroll(contentRef) as Position
    useEffect(() => {
        const element = document.getElementById(`${globalCtx.current_href_id}`);
        contentRef.current?.scrollTo({ top: element?.offsetTop || 0, })
    }, [globalCtx.current_href_id])
    useEffect(() => {
        globalCtx.setTop(scroll?.top)
        if (scroll?.top > 100) {
            scrollBtn.current?.classList.add('scroll-button')
        } else {
            scrollBtn.current?.classList.remove('scroll-button')
        }
    }, [globalCtx, scroll?.top])

    const goTop = useCallback(() => {
        contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])
    return (
        <>
            <HeaderComponent />
            <div className="layout-container" style={{ height: window.innerHeight + 'px' }} id="parent" ref={contentRef}>
                <div className="layout-content"  >
                    <Outlet />
                    <div ref={scrollBtn} onClick={goTop}>
                    </div>
                </div >
                <FootComp ref={footContainerRef}></FootComp>
            </div>
        </>

    );
}
export default DefaultLayout;