import * as React from "react";
import {Routes,Route,Navigate } from "react-router-dom";
import Account from "./views/Account";
import NoItem from "./views/NoItem";
import Tags from "./views/Tags";
import Statistics from "./views/Statistics";


function App() {
    return (
            <>
                {/* 这里通过Routes进行路由匹配，通过路径的不同，展示几个不同的页面*/}
                <Routes>
                    {/*routers下路展示的就是组件，以后通过模块化引进*/}
                    <Route path="/tags" element={<Tags/>}/>
                    <Route path="/account" element={<Account/>}/>
                    <Route path="/statistics" element={<Statistics/>}/>
                    <Route path="/" element={<Navigate to="/account"/>}/>
                    <Route path="*" element={<NoItem/>}/>
                </Routes>
            </>
    );
}



export default App;