import { useState } from 'react'
import './App.scss'

function App() {
  const [isYearly, setIsYearly] = useState(false)
  return (
    <>
      <header>
        <h1>Our Pricing</h1>
        <div className="toggle">
          <p>Annualy</p>
          <label className="switch">
            <input onClick={() => setIsYearly(!isYearly)} type="checkbox" />
            <span className="slider round"></span>
          </label>
          <p>Monthly</p>
        </div>
      </header>
      <main>
        <section className="basic">
          <h2>Basic</h2>
          <h3>
            <span>$</span>
            {isYearly ? '199.99' : '19.99'}
          </h3>
          <div className="border-b">
            <p>500 GB Storage</p>
            <p>2 Users Allowed</p>
            <p>Send up to 3 GB</p>
          </div>
          <button>Learn More</button>
        </section>
        <section className="professional">
          <h2>Professional</h2>
          <h3>
            <span>$</span>
            {isYearly ? '249.99' : '24.99'}
          </h3>
          <div className="border-b">
            <p>1 TB Storage</p>
            <p>5 Users Allowed</p>
            <p>Send up to 10 GB</p>
          </div>
          <button>Learn More</button>
        </section>
        <section className="master">
          <h2>Master</h2>
          <h3>
            <span>$</span>
            {isYearly ? '399.99' : '39.99'}
          </h3>
          <div className="border-b">
            <p>2 TB Storage</p>
            <p>10 Users Allowed</p>
            <p>Send up to 20 GB</p>
          </div>
          <button>Learn More</button>
        </section>
      </main>
    </>
  )
}

export default App
