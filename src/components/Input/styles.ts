import styled from 'styled-components'

export const Input = styled.input`
  width: 90vw;
  max-width: 710px;
  min-width: 334px;
  height: 50px;

  border-radius: 10px;
  border: none;

  background-color: rgba(255, 255, 255, 0.77);

  padding: 0 1rem;
  margin-top: 20px;

  font-size: 20px;
  color: #6AA2D1;
  font-family: 'Montserrat', sans-serif;

  &:focus-visible{
    outline: 2px solid #6AA2D1;
  }
  &::placeholder{
    font-size: 20px;
    color: #6AA2D1;
    font-family: 'Montserrat', sans-serif;
  }
`