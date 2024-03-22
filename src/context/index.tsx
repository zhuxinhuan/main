import { createContext } from "react";
interface GlobalContext {
    top: number;
    setTop: (theme?: number) => void;
    current_href_id: number; // 当前href对应的id
    setCurrentHrefId: (id: number) => void;

}
export const GlobalContext = createContext<GlobalContext>({
    top: 0,
    setTop: () => { },
    setCurrentHrefId: () => { },
    current_href_id: 1
});