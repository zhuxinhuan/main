import { createContext } from "react";
export interface IGlobalContext {
    top: number;
    setTop: (theme?: number) => void;
    current_href_id: number; // 当前href对应的id
    setCurrentHrefId: (id: number) => void;
    mobile: boolean; // 是否是移动端    
}
export const GlobalContext = createContext<IGlobalContext>({
    top: 0,
    setTop: () => { },
    setCurrentHrefId: () => { },
    current_href_id: 1,
    mobile: false,
});