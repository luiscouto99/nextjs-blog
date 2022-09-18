import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

import { getKeyboardData, getSortedKeyboardsData } from '../../lib/keyboards'

import styles from "./keyboards.module.css";
import sharedStyles from "../../styles/styles.module.css"


const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

export const KeyboardList = ({ allKeyboardsData }) => {
    return (
        <>
            <Head>
                <title>{getKeyboardData.name}</title>
            </Head>
            <div className={sharedStyles.container}>
                <Header />
                <main className={sharedStyles.main}>
                    <div className={styles.keyboardGrid}>
                        {
                            allKeyboardsData.map(({ id, url, name }) => (
                                <Link key={id} href={`/keyboards/${id}`}>
                                    <div>
                                        <Image src={url} alt="" width={360} height={360} loader={myLoader} className={styles.keybImg} />
                                        <p>{name}</p>
                                    </div>
                                </Link>)
                            )
                        }
                    </div>
                </main>
                <Footer />
            </div>
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

