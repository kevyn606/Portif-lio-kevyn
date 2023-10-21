import  { createGlobalStyle } from 'styled-components';


export const cores = {
    fundo: '#F9FBFC',
    cinza: '#EDEDEE',
    preto: '#10001f'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
box-sizing: border-box;
font-family: Poppins;
list-style: none;
text-decoration:none;
}

body {
  background-color: ${cores.fundo};
  color: ${cores.preto};
  width: 100vw ;
  overflow-x: hidden; /* Oculta a barra de rolagem horizontal se o conteúdo for muito largo */
  

}

.Container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;

}



}

  
`

