import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #6200ea;
  color: #fff;
  height: 64px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin: 0;
`;

const SearchContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding: 0 16px;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 8px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CartButton = styled.button`
  background-color: #03dac6;
  color: #000;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #018786;
  }
`;

export default function NavbarComponent(){
    return(
        <>
        <Navbar>
            <Title>Lojão da Giu</Title>
            <SearchContainer>
                <SearchInput type='text' placeholder='Pesquise o nome do produto...' />
            </SearchContainer>
            <CartButton>Ver carrinho</CartButton>
        </Navbar>
        
        
        </>
    )
}