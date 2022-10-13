import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Footer } from '../components/footer/footer'
import { Header } from '../components/header/header'

import { Container, Main } from '../styles/sharedStyles'

import styled from 'styled-components'

const LandingSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

const LandingInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  & a {
    margin-top: 20px;
    width: 240px;
    border: none;
    background-color: black;
    color: white;
    padding: 8px 0;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    text-align: center; 
  }
`;

const Title = styled.h2`
  font-size: 48px;
`;

const Separator = styled.div`
  height: 6px;
  width: 72px;
  background-color: black;
`;

const SubTitle = styled.h3`
  font-size: 32px;
  font-weight: normal;
`;

const Description = styled.p`
  font-size: 20px;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Keyboards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        <LandingSection>
          <Image src="/images/sonnet.jpg" height={764} width={480} alt="sonnet keyboard" />
          <LandingInfo>
            <Title>The Sonnet</Title>
            <Separator />
            <SubTitle>Versatility like no other</SubTitle>
            <Description>
              Defined by its stunning accent and graceful side profile, the Sonnet is Mode's Design most customizable keyboard, packaged in a 75% form-factor.
            </Description>
            <Link href="/keyboards/sonnet">Take a look</Link>
          </LandingInfo>
        </LandingSection>
      </Main>

      <Footer />
    </Container>
  )
}
