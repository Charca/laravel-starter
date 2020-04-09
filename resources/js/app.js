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
      <div class="md:flex container border p-4">
        <div class="md:flex-shrink-0">
          <img
            class="rounded-lg md:w-56"
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
            alt="Woman paying for a purchase"
          />
        </div>
        <div class="mt-4 md:mt-0 md:ml-6">
          <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">
            Marketing
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
          >
            Finding customers for your new business
          </a>
          <p class="mt-2 text-gray-600">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>
    </>
  )
}
