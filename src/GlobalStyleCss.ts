import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`

 :root {
  --color-PrimaryPurple: #AD1FEA;
--color-SecondaryBlue: #4661E6;
--color-White: #FFFFFF; 
--color-DarkBlue: #373F68; 
--color-LightGreyBlue: #F2F4FF; 
--color-VeryLightGrey: #F7F8FD; 
--color-MidnightBlue: #3A4374; 
--color-SoftBlueGrey: #647196; 
--color-Coral: #F49F85;  
--color-LightSkyBlue: #62BCFA;  
 }
* { 
  margin:0;
  padding:0;
  box-sizing: border-box;
  background: var(--color-VeryLightGrey);
}
body {
  font-family: 'Jost', sans-serif;
}
`
export default GlobalStyled
