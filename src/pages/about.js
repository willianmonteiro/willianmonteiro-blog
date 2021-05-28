import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { MainContent } from '../components/Post/styled'
import SocialLinks from "../components/SocialLinks"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <MainContent>
      <p>Me chamo Willian Monteiro e atualmente trabalho como front-end na <a href="https://nexfar.com.br/" alt='Nexfar'>Nexfar</a>.</p> 
  
      <p>Sou um desenvolvedor que busca criar experiências digitais que integram estratégia, design e tecnologia.</p>
      <p>
        Gosto de trabalhar em equipe, aprender sobre coisas novas, trocar experiências e 
        obter diferentes perspectivas do meu trabalho.
      </p>

      <p>
        Também sou um entusiasta de design e User Experience e tenho um bom conhecimento com softwares como Photoshop, Figma e Adobe XD.
      </p>

      <p>
       Comecei minha carreira de programação, inicialmente com PHP;
      </p>
      <p>
        Possuo experiência em desenvolvimento de temas para Wordpress e desenvolvimento de single page
        applications com JavaScript e frameworks JavaScript (React), module bundlers (webpack),
        package managers (NPM, Yarn), transpilers (Babel), pre processadores CSS (Sass),
        arquitetura CSS (BEM, CSS Modules, Styled Components), Git, SEO.
      </p>

      <p>
        Trabalhei alguns anos com Ecommerce B2C, e atualmente tenho trabalhado em projetos B2B utilizando Javascript.
      </p>
      <SocialLinks />
    </MainContent>
  </Layout>
)

export default AboutPage
