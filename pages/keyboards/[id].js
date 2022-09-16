import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

import sharedStyles from "../../styles/styles.module.css"
import styles from "./keyboards.module.css"
import Image from "next/image"
import Link from "next/link"

import { getAllKeyboardsIds, getKeyboardData } from '../../lib/keyboards';

export const KeyboardDetail = ({ keyboardData }) => {
    return (
        <div className={sharedStyles.container}>
            <Header />
            <main className={sharedStyles.main}>
                <Image src={keyboardData.url} height={360} width={360} />
                <p>Name: {keyboardData.name}</p>
                <p>Maker: {keyboardData.maker}</p>
                <a href={keyboardData.website} className={styles.website}>Website</a>

                <div dangerouslySetInnerHTML={{ __html: keyboardData.contentHtml }} />

                <Link href="/keyboards" passHref >
                    <a className={styles.backLink}>
                        Back to Keyboard List
                    </a>
                </Link>
            </main>
            <Footer />
        </div>
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