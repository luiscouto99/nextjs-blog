import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

import Head from "next/head"

import { getKeyboardData, getSortedKeyboardsData } from '../../lib/keyboards'

import { Container, Main } from '../../styles/sharedStyles'

import styled from 'styled-components'
import { KeyboardCard } from "../../components/keyboardCard/keyboardCard";

const KeyboardGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 20px;
    justify-content: center;
`;

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

export const KeyboardList = ({ allKeyboardsData }) => {
    return (
        <>
            <Head>
                <title>{getKeyboardData.name}</title>
            </Head>
            <Container>
                <Header />
                <Main>
                    <KeyboardGrid>
                        {
                            allKeyboardsData.map(({ id, url, name }) => 
                                <KeyboardCard key={id} id={id} url={url} name={name} loader={myLoader} />
                            )
                        }
                    </KeyboardGrid>
                </Main>
                <Footer />
            </Container>
        </>
    );
}

export async function getStaticProps() {
    const allKeyboardsData = getSortedKeyboardsData()
    return {
        props: {
            allKeyboardsData,
        }
    }
}

export default KeyboardList

