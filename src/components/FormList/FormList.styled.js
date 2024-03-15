import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  background-color:white;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  color: ${(p) => p.theme.colors.black};
`;
export const Input = styled.input`
  width: 350px;
  margin-bottom: 25px;
  background: white;
  border: ${(p) => p.theme.border.none};
  outline: none;
  padding: 10px;
  font-size: ${(p) => p.theme.fontSize.s};
  color: ${(p) => p.theme.colors.black};
  text-shadow: ${(p) => p.theme.boxShadow.textShadow};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  box-shadow:${(p) => p.theme.boxShadow.textShadow};
  transition: border 0.3s ease-in-out; /* Add this line */
  &:focus {
    border: 1.65px solid pink;
  }
  &:hover {
    border: 1.65px solid pink;
  }
`;


export const Button = styled.button`
  display: flex;
  justify-content:center;
  align-items: center;
  text-align:center;
  font-weight:bold;
  width:93%;
  gap: 10px;
  color: ${(p) => p.theme.colors.grey};
  padding: 10px;
  background: pink;
  border: none;
  border-radius: 20px;
  :focus,
  :hover {
    background: ${(p) => p.theme.colors.pink}; 
    box-shadow: ${(p) => p.theme.boxShadow.boxShadow};
  }
`;

export const Span = styled.span`
  display: flex;
  margin-bottom: 3px;
`;
