import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Example.module.scss'

function Example() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className={styles.title}>
              Example <span>Component</span>
            </div>

            <div className="card-body">I'm an example component!</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Example

if (document.getElementById('example')) {
  ReactDOM.render(<Example />, document.getElementById('example'))
}
