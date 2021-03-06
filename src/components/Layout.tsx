import styled from "styled-components";
import * as React from "react";
import Nav from "./Nav";


const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
`

const Header = styled.header`
  overflow: auto;
  text-align: center;
`

const Main = styled.main`
  overflow: auto;
  flex: 1;
`



const Layout =(props:any)=>{
    return(
        < Wrapper className="App">

            <Header>
                <h2>小孟账本!</h2>
            </Header>

            <Main>
                {props.children}
            </Main>

           
            <Nav/>
            
        </Wrapper>
    )
}

export  default  Layout;