import { FC, useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GlobalContext, IGlobalContext } from "@/context";
import { routes, moblieRoute } from "@/routers";

import Three from "@/views/threeDemo";


const App: FC = () => {
  const [mobile] = useState<boolean>(() => {
    return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
  }); // 是否是移动端
  const router = mobile ? createBrowserRouter(moblieRoute, { basename: import.meta.env.BASE_URL }) : createBrowserRouter(routes, { basename: import.meta.env.BASE_URL });
  const [top, setTop] = useState<number>(0); //顶部距离
  const [current_href_id, setCurrentHrefId] = useState<number>(1); // 锚点
  const contextVal = { top, setTop, current_href_id, setCurrentHrefId, mobile } as IGlobalContext;
  return (
    <>
      <GlobalContext.Provider value={contextVal}>
        {
          import.meta.env.MODE === 'prod_an' ? <Three /> : <RouterProvider router={router} />
        }

      </GlobalContext.Provider>
    </>
  );
};


export default App
