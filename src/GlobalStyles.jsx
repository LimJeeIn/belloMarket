import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display:flex;
    flex-direction:column; 
    align-items:center ;
  }

  ul,ol,li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color:#000
  }
  img {
   width :100% ;
  }

  #root {
   width :100% ;
  }

 code {
   font-family :source-code-pro ,Menlo ,Monaco ,Consolas ,'Courier New' ,
   monospace ;
 }
  
 input{
 padding :1rem ; 
 outline:none ; 
 border :1px solid #d1d5db ; 
 margin-top : .25rem ; 
 margin-bottom:.25rem ;

}

.space-x-16 > :not([hidden]) ~ :not([hidden]) {
 margin-right:0; 
 margin-left:0;

}

button{
  background:none;   
  color:inherit;      
  border:none;         
  padding:0;           
  font: inherit;      
  cursor:pointer;     
  outline:none !important ;        
 }
`;
