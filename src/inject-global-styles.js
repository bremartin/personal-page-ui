import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const ParagraphFont = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Sacramento|Cormorant+Garamond|Fredoka+One|Poiret+One');
    html {
        box-sizing: border-box;
        font-size: 16px;
        overflow-y: scroll;

    }
     
    {
        font-family: 'Sacramento', sans-serif;
        font-size: 200px;
        color: #fff;
        box-sizing: border-box 
        margin-left: auto;
        margin-right: auto;
    }


`;

export const Links = styled.div`
  {
    font-size: 16px;
    class: top-right;
    width: 100px
    height: 50px
    right: 50px;
    top: 100px;
    display: inline-block
  }
`;

export const Pronunciation = styled.p`
  font-size: 50px;
  text-align: center;
  font-family: 'Cormorant Garamond', sans-serif;
  color: #fff;
 // display: inline-block;
  margin-bottom: auto;
  position: relative
  top: -300px
`;

export default ParagraphFont