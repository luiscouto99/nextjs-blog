import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'

const Card = styled.div`
    cursor: pointer;
`;

const CardContainer = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;

    & img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
`;

const Title = styled.p`
    margin: 0 12px 10px;
`;

export const KeyboardCard = ({ id, url, name, loader }) => {
    return (
        <Card>
            <Link href={`/keyboards/${id}`}>
                <CardContainer>
                    <Image src={url} alt="" width={360} height={360} loader={loader} />
                    <Title>{name}</Title>
                </CardContainer>
            </Link>
        </Card>
    )
}