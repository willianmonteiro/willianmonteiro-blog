import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { MainContent } from '../components/Post/styled'
import SocialLinks from '../components/SocialLinks'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <MainContent>
      <p>Me chamo Willian Monteiro e atualmente trabalho como front-end na Fractal Engenharia.</p> 
  
      <p>Sou um desenvolvedor que busca criar experiências digitais que integram estratégia, design e tecnologia.</p>
      <p>
        Gosto de trabalhar em equipe, aprender sobre coisas novas, trocar experiências e 
        obter diferentes perspectivas do meu trabalho.
      </p>

      <p>
        Também sou um entusiasta de design e User Experience e tenho um bom conhecimento com softwares como Photoshop, Figma e Adobe XD.
      </p>

      <p>
       Comecei minha carreira de programação inicialmente com PHP, onde pude ter uma boa base de estudos sobre Programação Orientada a Objetos;
      </p>
      <p>
        Possuo experiência em desenvolvimento de temas para Wordpress e desenvolvimento de single page
        applications com JavaScript/TypeScript e frameworks JavaScript (React, Angular, Vue), module bundlers (webpack),
        package managers (NPM, Yarn), transpilers (Babel), pre processadores CSS (Sass),
        arquitetura CSS (BEM, CSS Modules, Styled Components), Git, SEO.
      </p>

      <p>Tenho me aprofundado em arquitetura de software com Clean Architecture e Domain-Driven Design (DDD), testes de Software com Jest e Cypress.</p>
      <p>Além disso, busco aplicar em meu dia a dia boas práticas através de Clean Code, Don't Repeat Yourself (DRY), Keep It Simple (KISS) e princípios SOLID.</p>

      <p>
        Trabalhei muitos anos com Ecommerce B2C/B2B e atualmente trabalho em ferramentas de análise de Segurança de Barragens e situação/previsão de eventos hidrológicos críticos.
      </p>
      <SocialLinks />
    </MainContent>
  </Layout>
)

export default AboutPage
