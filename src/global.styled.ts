import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`

 :root {
  --color-PrimaryPurple: #AD1FEA;
--color-SecondaryBlue: #4661E6;
--color-LightSkyBlue: #62BCFA;  
--color-SkyBlue: #7C91F9;  
--color--Purple:#C75AF6;
--color-White: #FFFFFF; 
--color-LightGreyBlue: #F2F4FF; 
--color-LightGrey: #F2F4FE;
--color-VeryLightGrey: #F7F8FD; 
--color-MidnightBlue: #3A4374; 
--color-DarkBlue: #373F68; 
--color-SoftBlueGrey: #647196; 
--color-GrayishBlue:#656EA3;
--color-Coral: #F49F85;  
--color-Red: #D73737;  
 }
* { 
  margin:0;
  padding:0;
  box-sizing: border-box;
  
}
body {
  font-family: 'Jost', sans-serif;
  background: var(--color-VeryLightGrey);
}
`
export default GlobalStyled
