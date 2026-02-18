import { useState } from "react"
import "../styles/donation.css"

function DonationSection() {

  const [type, setType] = useState("one")

  return (
    <section className="main-section">

      <div className="box">

        <h2>Support Subhojanam Seva</h2>

        <p>
          Every meal brings comfort to caregivers watching over their loved ones
        </p>

   
        <div className="toggle">

          <button
            className={type === "one" ? "active" : ""}
            onClick={() => setType("one")}
          >
            One-time Donation
          </button>

          <button
            className={type === "monthly" ? "active" : ""}
            onClick={() => setType("monthly")}
          >
            Monthly Donation
          </button>

        </div>

       
        <div className="cards">

          <div className="card">
            <h3>₹500</h3>
            <p>Serve 20 Hot Meals</p>
            <span>@ ₹25 per meal</span>
          </div>

          <div className="card">
            <h3>₹1,000</h3>
            <p>Serve 40 Hot Meals</p>
            <span>@ ₹25 per meal</span>
          </div>

          <div className="card special">
            <div className="tag">MOST DONATED</div>
            <h3>₹2,500</h3>
            <p>Serve 100 Hot Meals</p>
            <span>@ ₹25 per meal</span>
          </div>

          <div className="card">
            <h3>₹5,000</h3>
            <p>Serve 200 Hot Meals</p>
            <span>Seva Karta</span>
          </div>

        </div>

        <input
          type="text"
          placeholder="Enter custom amount (₹)"
          className="input-box"
        />

        <button className="big-btn">
          Donate Now & Feed a Soul →
        </button>

        <div className="small-info">
          @Secure Payment &nbsp; @ 80G Tax Exempt &nbsp; @ 100% to Food
        </div>

      </div>

    </section>
  )
}

export default DonationSection
