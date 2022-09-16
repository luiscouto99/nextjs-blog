import Image from 'next/image'
import Link from 'next/link'
// import styles from "keyboardCard.module.styles"

export const KeyboardCard = ({keybImage, propId}) => {
    return (
        <Link href={`/keyboards/${propId}`}>
            <Image src={keybImage} height={360} width={360}/>
        </Link>
    )
}