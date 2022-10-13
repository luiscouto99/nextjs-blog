import { Header } from "../../components/header/header"
import { Footer } from "../../components/footer/footer"
import styles from "./about.module.css";
import {Container, Main} from '../../styles/sharedStyles'


export const About = () => {
    return (
        <Container>
            <Header />
            <Main>
                <section className={styles.aboutSection}>
                    <img src="/images/logo.png" alt="" />


                    <div className={styles.whoWeAre}>
                            <h2>Who are we?</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis non minima doloremque dignissimos enim iste corporis iure doloribus, tempora earum, soluta ut nesciunt veniam recusandae porro sit nulla minus ipsa.
                                Rem quo corrupti suscipit harum veritatis magni facere illum hic, fugit illo quasi animi! Illo eveniet, quo nam dignissimos sunt repellat, error aperiam harum pariatur earum ipsa doloremque dolor assumenda?
                                Magnam suscipit saepe fugit laboriosam ullam quasi dicta expedita, unde amet exercitationem, ratione, quae repellat repellendus laborum iure velit numquam quod cupiditate tenetur itaque accusamus. Molestias quo consequuntur quasi impedit!
                                Animi, earum velit placeat cum eveniet quasi officia ad illum harum aliquid quaerat, eos dolorem eligendi blanditiis fuga ipsam labore officiis vel esse. Ipsa laudantium iure quae vel, velit fugiat?
                                Quos amet dolorum et quod corporis similique, necessitatibus ut dolor perferendis molestias earum numquam adipisci aspernatur magni, quam ab ex illo aliquid obcaecati doloremque libero temporibus. Molestiae voluptates repudiandae facilis.
                            </p>
                    </div>
                </section>
            </Main>
            <Footer />
        </Container>
    )
}

export default About