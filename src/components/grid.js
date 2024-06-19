import styled from 'styled-components';



// Tamanhos de tela
const breakpoints = {
    xs: '0px',
    sm: '576px', 
    md: '768px', 
    lg: '992px', 
    xl: '1200px' 
  };

  const getColumnWidth = (span) => {
    if (!span) return;
    let width = (span / 12) * 100;
    return `width: ${width}%;`;
  };

  const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GridItem = styled.div`
  padding: 15px;
  box-sizing: border-box;

  ${({ xs }) => (xs ? getColumnWidth(xs) : 'width: 100%;')}

  @media (min-width: ${breakpoints.sm}) {
    ${({ sm }) => sm && getColumnWidth(sm)}
  }
  @media (min-width: ${breakpoints.md}) {
    ${({ md }) => md && getColumnWidth(md)}
  }
  @media (min-width: ${breakpoints.lg}) {
    ${({ lg }) => lg && getColumnWidth(lg)}
  }
  @media (min-width: ${breakpoints.xl}) {
    ${({ xl }) => xl && getColumnWidth(xl)}
  }
`;

export { GridContainer, GridItem };
