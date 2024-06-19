import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #007FFF;
  color: #fff;
  height: 64px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.a`
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
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
  max-width: 900px;
  padding: 10px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


export default function NavbarComponent(props){

    return(
        <>
        <Navbar>
            <Title href='/'>Lojão da Giu</Title>
            <SearchContainer>
                <SearchInput onChange={props.onChange} type='text' placeholder='Pesquise o nome do produto...' />
            </SearchContainer>
        </Navbar>
        </>
    )
}