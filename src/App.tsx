import { FC, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { GlobalContext } from "@/context";
import router from "@/routers";
// import Three from "@/views/threeDemo";
interface GlobalContext {
  top: number;
  setTop: (theme?: number) => void;
  current_href_id: number; // 当前href对应的id
  setCurrentHrefId: (id: number) => void;
}


const App: FC = () => {
  const [top, setTop] = useState<number>(0); //主题 默认日间模式
  const [current_href_id, setCurrentHrefId] = useState<number>(1); //主题 默认日间模式
  const contextVal = { top, setTop, current_href_id, setCurrentHrefId } as GlobalContext;
  return (
    <>
      <GlobalContext.Provider value={contextVal}>
        <RouterProvider router={router} />
        {/* <Three /> */}
      </GlobalContext.Provider>
    </>
  );
};


export default App
