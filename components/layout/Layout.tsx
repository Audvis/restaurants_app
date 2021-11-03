import Header from "./Header";
import { Global, css } from "@emotion/react";
import styled from '@emotion/styled';
import Head from "next/head";

const Title = styled.div`
  text-align: center;
  font-size: 3rem;
  color: var(--primaryColor)
`;

const Layout = (props) => {
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
      <Head>
        <html lang="es" />
        <title>Restaurant App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylessheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" href="/static/css/app.css" />
      </Head>
      <Header />
    <Title>
    <main>{props.children}</main>
    </Title>      
    </>
  );
};

export default Layout;
