import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  margin: 0;
  padding: 16px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #eee;
`;

const CardDescription = styled.p`
  font-size: 1em;
  padding: 16px;
  color: #666;
`;


export default function CardComponent(props){
    return(
        <Card>
            <CardTitle>{props.title}</CardTitle>
            <CardDescription>{props.description}</CardDescription>
        </Card>
    )
}