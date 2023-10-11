import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  border: 1px solid #ccc;
  width: 600px;
  margin: 10px;
  border-radius: 8px;
  background-color: #3a3a3a;
  color: #fff;
  }
`;

export const Image = styled.img`
  width: 200px;
  border-radius: 4px;
  margin-right: 10px;
  object-fit:cover;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: rgb(255, 152, 0);
  }
`;

export const Status = styled.p`
  margin: 0 0 10px 0;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => (props.status === 'Alive' ? '#4caf50' : props.status === 'Dead' ? '#f44336' : '#adadad')};
    margin-right: 5px;
  }
`;

export const Location = styled.p`
  font-size: 1em;
  margin: 5px 0;
  color: #adadad;

  p {
    color: #fff;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: rgb(255, 152, 0);;
    }
  }
`;

export const Origin = styled(Location)``;
