import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

import styles from "./keyboards.module.css"
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


export const KeyboardDetail = ({ keyboardData }) => {
    return (
        <Container>
            <Header />
            <Main>
                <ImageContainer>
                    <Image src={keyboardData.url} layout='fill' objectFit='cover' />
                </ImageContainer>
                <p>Name: {keyboardData.name}</p>
                <p>Maker: {keyboardData.maker}</p>
                <a href={keyboardData.website} className={styles.website}>Website</a>

                <div dangerouslySetInnerHTML={{ __html: keyboardData.contentHtml }} />

                <Link href="/keyboards" passHref >
                    <a className={styles.backLink}>
                        Back to Keyboard List
                    </a>
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