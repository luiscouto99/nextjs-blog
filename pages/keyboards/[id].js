import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

import Image from "next/image"
import Link from "next/link"

import { getAllKeyboardsIds, getKeyboardData } from '../../lib/keyboards';

import { Container, Main } from '../../styles/sharedStyles'

import styled from 'styled-components'

const ImageContainer = styled.div`
    width: 100%;
    height: 500px;
    position: relative;
`;

const KeybInfo = styled.p``;

const KeybLink = styled.a`
    text-decoration: underline;
`;

const BackLink = styled.a`
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
`;

export const KeyboardDetail = ({ keyboardData }) => {
    return (
        <Container>
            <Header />
            <Main>
                <ImageContainer>
                    <Image src={keyboardData.url} layout='fill' objectFit='cover' />
                </ImageContainer>
                <KeybInfo>Name: {keyboardData.name}</KeybInfo>
                <KeybInfo>Maker: {keyboardData.maker}</KeybInfo>
                <KeybLink href={keyboardData.website}>Website</KeybLink>

                <div dangerouslySetInnerHTML={{ __html: keyboardData.contentHtml }} />

                <Link href="/keyboards" passHref >
                    <BackLink>Back to Keyboard List</BackLink>
                </Link>
            </Main>
            <Footer />
        </Container>
    )
}

export async function getStaticPaths() {
    const paths = getAllKeyboardsIds();
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const keyboardData = await getKeyboardData(params.id);
    return {
        props: {
            keyboardData: keyboardData,
        },
    };
}

export default KeyboardDetail