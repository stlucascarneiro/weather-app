import styled from 'styled-components'

export const Body = styled.main`
  width: 100%;
  max-width: 1200px;
  height: 258px;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Anchor = styled.a`
  margin-top: 1rem;
  text-decoration: underline;
  cursor: pointer;
  transition: .3s;

  &:hover {
    color: #1163a9;
    transition: .3s;
  }
`