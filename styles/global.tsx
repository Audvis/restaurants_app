import { Global, css } from "@emotion/react";


const global = () => {
    return (
        <>
      <Global
        styles={css`
          :root {
            --backgroundColor: #f5f5f5;
            --primaryColor: #AA1616 ;
            --secondaryColor: #254475;
            --white: #F7F6F6;
            --black: #1C1C1C 
          }
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 1.6rem; /* 16px */
            line-height: 1.5;
            font-family: 'PT Sans', sans-serif;
            background-color: var(--backgroundColor)
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
          }
          h1, h2 {
            font-family: 'Roboto Slab', serif;
            font-weight: 700;
          }
          h3 {
            font-family: 'PT Sans', sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          a {
            text-decoration: none;
            color: var(--PrimaryColor);
          }
        `}
      />
            
        </>
    )
}

export default global