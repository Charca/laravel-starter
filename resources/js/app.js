import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: red;
  font-size: 20px;
`

export default () => {
  return (
    <>
      <h1>Hello World</h1>
      <Button>Click me</Button>
    </>
  )
}
