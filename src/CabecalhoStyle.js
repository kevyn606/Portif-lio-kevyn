import styled from "styled-components";
import { cores } from "./styles";


export const Cabecalhostyle = styled.div`

@media (max-width: 768px) {

        flex-direction:column;
        gap:10px;
        padding:10px 10px;
        margin-top:20px;
}

padding:24px 20px;
background-color:${cores.cinza};
display:flex;
align-items:center;
justify-content:space-between;
margin-top:50px;
border-radius:24px;
img{
    height:45px;
    
}

ul{
    display:flex;
    gap:28px;
    font-weight:700;
    font-size:16px;
    
}

.link{
    text-decoration: none;
    color:${cores.preto};
}

.link:hover{
    opacity:0.5;
    transition:0.3s;
}

`

export const Homestyle = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
margin-top:60px;

@media (max-width: 768px) {

    display:block;
    img{
        width:100%;
    }
}


.texto{
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    font-size:16px;
    font-weight:700;

    @media (max-width: 768px) {
gap:20px;
align-items:center;
text-align:center;
}


    span{
        font-size:52px;
        line-height:57px;

        @media (max-width: 768px) { 
            font-size:20px;
        line-height:20px;
            
            }
    }

    ul{
        display:flex;
        align-items:center;
        gap:30px;


        img{
            width:30px;
            
        }
    }

    button{
        padding:10px 32px ;
        background-color: #4158D0;
        background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
        color:white;
        border:none;
        border-radius:24px;
        cursor: pointer;
        transition:0.5s;
    }

    button:hover{
        opacity:0.7;
    }
}

`
export const Sobrestyle = styled.div`
text-align:center;
font-weight:700;

@media (max-width: 768px) {
p{
    text-align:justify;
}
}

h3{
    margin-top:100px ;
    font-size:48px;
}


.habilidades{

    ul{
        margin-top:15px;
        display:flex;
        flex-wrap: wrap;
        justify-content:center;
        gap:10px;

        li{
            padding:10px 32px ;
            background-color: #4158D0;
        background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
        color:white;
        border:none;
        border-radius:24px;
        font-weight:400;
 


        }


    }
    
}

`

export const Projetostyle = styled.div`
h3{
    margin-top:100px ;
    font-size:48px;
    text-align:center;
    padding-bottom:20px;
}
ul{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:20px;
    margin-bottom:40px;

    @media (max-width: 768px) {
    display:block;

    li{
        margin-bottom:20px;
    }
    
}

    li{
        position:relative;
    }

    img{
        border-radius:24px;
        width:100%;
        transition: transform 0.3s;
    }

    img:hover{
        transform: scale(1.02);
        
        
    }

    .github{
        position:absolute;
        padding:20px;
        z-index: 1;

        @media (max-width: 768px) {
    padding:10px;

    img{
        width:40px;
    }
    
}

        img{
            padding:5px;
            transition:0.8s;
        }

        img:hover{
            background-color:white;
            padding:5px;
        }
        
        
    }
}

`