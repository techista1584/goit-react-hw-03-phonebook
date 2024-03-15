import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color:white;
  color:black;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  border-radius:20px;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.45);
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:5px;
  line-height:30px;
  padding:5px;
  text-align: center;
  align-content:center;
  margin: 15px;
  font-size: ${(p) => p.theme.fontSize.l};
  color: ${(p) => p.theme.colors.black};
`;