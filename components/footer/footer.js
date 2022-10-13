import styled from 'styled-components'

const FooterCotainer = styled.footer`
    background-color: white;
    width: 100%;
    text-align: center;
    font-size: 16px;
    padding: 12px 0;
`;

export const Footer = () => {
    return (
        <FooterCotainer>
            A Next.js project by Luis Couto
        </FooterCotainer>
    )
}