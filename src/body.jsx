import heroImage from "./assets/image-1.png";
import arrowsimage from "./assets/arrows.png";
import ourmissionimage from "./assets/our-mission.png";
import ourperspectiveimage from "./assets/our-perspective.png";
import whatkeepsusgoingimage from "./assets/what-keeps-us-going.png";
import achievementsimage from "./assets/achievements-bg.png";
import Android from "./assets/Android.png";
import Flutter from "./assets/Flutter.png";
import Cloud from "./assets/cloud.png";

import HorBar from "./components/hor-bar";
import HorBarblue from "./components/Hor-Bar-blue";
import HorBarYellow from "./components/Hor-Bar-yellow";

import VerticalBar from "./components/vertical-bar";
import VerticalBarGreen from "./components/vertical-bar-green";
import VerticalBarYellow from "./components/vertical-bar-yellow";

import FAQ from "./FAQ";
import Footer from "./footer";
import "./body.css";
function Body() {
  return (
    <main className="main-content">
      <div className="gdg-info">
        <h2>
          <span className="g1">G</span>
          <span className="o1">o</span>
          <span className="o2">o</span>
          <span className="g2">g</span>
          <span className="l">l</span>
          <span className="e">e</span>
          <span className="rest"> Developer Groups</span>
        </h2>
        <h3>RBU Chapter</h3>
        <img
          src={heroImage}
          alt="Community illustration"
          className="hero-image"
        />
        <p className="hero-description">
          Google Developer Groups are community groups for college and
          university students interested in Google developer technologies.
        </p>
        <button className="join-us-btn">join Us</button>
        <img
          src={arrowsimage}
          alt="Community illustration"
          className="arrows-image"
        />

        <span className="GTKU-text">Get To Know Us!</span>

        <div className="sections">
          <span>Our Mission</span>
          <HorBarblue />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px", // spacing between elements
            }}
          >
            {/* Left side image */}
            <img
              src={ourmissionimage}
              alt="Our Mission"
              style={{
                width: "350px", // adjust size as needed
                height: "auto",
              }}
            />

            {/* Middle text */}
            <span
              style={{
                maxWidth: "400px",
                fontSize: "18px",
                lineHeight: "1.6",
                textAlign: "center",
                color: "#333",
              }}
            >
              Our mission involves community engagement, leadership development,
              building strong tech foundation, while enabling all tech
              enthusiasts to contribute to the global society.
            </span>

            {/* Right vertical bar */}
            <VerticalBar />
          </div>
        </div>

        <div className="sections">
          <span>Our Perspective</span>
          <HorBar />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px", // spacing between elements
            }}
          >
            {/* Left vertical bar */}
            <VerticalBarGreen />

            {/* Middle text */}
            <span
              style={{
                maxWidth: "400px",
                fontSize: "18px",
                lineHeight: "1.6",
                textAlign: "center",
                color: "#333",
              }}
            >
              We’re a community-driven initiative aiming to bridge the gap
              between research and practice, develop evolutionary thinking and
              network throughout the process. We believe in connecting fellow
              developers, spreading stimulative ideas and working for a
              solution-driven team.
            </span>

            {/* Right image */}
            <img
              src={ourperspectiveimage}
              alt="Our Perspective"
              style={{
                width: "350px", // adjust size as needed
                height: "auto",
              }}
            />
          </div>
        </div>

        <div className="sections">
          <span>What Keeps Us Going</span>
          <HorBarYellow />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px", // spacing between elements
            }}
          >
            {/* Left image */}
            <img
              src={whatkeepsusgoingimage}
              alt="What Keeps Us Going"
              style={{
                width: "350px", // adjust size as needed
                height: "auto",
                display: "block",
              }}
            />

            {/* Middle text */}
            <span
              style={{
                maxWidth: "400px",
                fontSize: "18px",
                lineHeight: "1.6",
                textAlign: "center",
                color: "#333",
              }}
            >
              Our club helps students to connect, learn, empower and grow.
              Teamwork, innovative thinking, communication, and leading with
              solutions is what helps us achieve new heights. The entire team
              works in coordination, to inspire and motivate the upcoming coding
              community to evolve their skills and broaden their horizons of
              knowledge.
            </span>

            {/* Right vertical bar */}
            <VerticalBarYellow />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px", // space between each achievement
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {/* Achievement 1 */}
          <div className="achievements">
            <div className="achievement-item">
              <img src={achievementsimage} alt="Achievements-1" />
              <span>03+</span>
              <p className="achievement-text">Years</p>
            </div>
            <div className="achievement-item">
              <img src={achievementsimage} alt="Achievements-2" />
              <span>10+</span>
              <p className="achievement-text">Events</p>
            </div>
            <div className="achievement-item">
              <img src={achievementsimage} alt="Achievements-3" />
              <span>1K+</span>
              <p className="achievement-text">Community members</p>
            </div>
            <div className="achievement-item">
              <img src={achievementsimage} alt="Achievements-4" />
              <span>200+</span>
              <p className="achievement-text">Attendees</p>
            </div>
          </div>
        </div>
        <div className="technologies-section">
          <div className="technologies-header">
            <div className="line"></div>
            <h1>Technologies</h1>
            <div className="line"></div>
          </div>
          <p className="technologies-subheader">
            Domains That Excite Us to Collaborate and Teach!
          </p>
        </div>
        <div class="tech-grid">
          <div class="tech-card">
            <div class="card-top-line red-line"></div>
            <img src={Android} alt="Android Logo" />
            <p class="tech-name">Android</p>
            <span class="dropdown-icon">&#x2304;</span>{" "}
          </div>

          <div class="tech-card">
            <div class="card-top-line blue-line"></div>
            <img src={Flutter} alt="Flutter Logo" />
            <p class="tech-name">Flutter</p>
            <span class="dropdown-icon">&#x2304;</span>
          </div>

          <div class="tech-card">
            <div class="card-top-line green-line"></div>
            <img src={Cloud} alt="Cloud Logo" />
            <p class="tech-name">Cloud</p>
            <span class="dropdown-icon">&#x2304;</span>
          </div>
        </div>

        <FAQ />
        <Footer />
      </div>
    </main>
  );
}

export default Body;
