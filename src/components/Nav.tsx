import styled from "styled-components";
import {Link} from "react-router-dom";
import Icon from "./Icon"


const Nav = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.33%;
      padding: 4px 0;
      text-align: center;
      display:flex;
      flex-direction:column;
      align-items:center;
      > a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`

const Component = () => {
    return (
        <Nav>
            <ul>
                <li>
                    <Icon name="Tags"/>
                    <Link to="/tags">标签</Link>
                </li>
                <li>
                   <Icon name="money"/>
                    <Link to="/">记账</Link></li>
                <li>
                  <Icon name="Statistics"/>
                  <Link to="/statistics">统计</Link></li>
            </ul>
        </Nav>
    )
}

export default Component