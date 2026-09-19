import "./App.css";

function App() {
  const whatsappNumber = "919354191102";
  const phoneNumber = "+919354191102";
  const email = "krishnapg@gmail.com";

  const whatsappMessage = encodeURIComponent(
    "Hello Krishna PG, I want to enquire about room availability."
  );

  const googleMapsLink =
    "https://www.google.com/maps/place/Krishna+PG/@28.3500145,77.4856281,13z/data=!4m22!1m15!4m14!1m6!1m2!1s0x390cc772b7343ed1:0x781af21da64b97b5!2sKrishna+PG,+Prempuri(Friday+Market,+Mohalla,+Dhankauri+Road,+Dankaur,+Uttar+Pradesh+203201!2m2!1d77.5577061!2d28.3500468!1m6!1m2!1s0x390cc772b7343ed1:0x781af21da64b97b5!2sKrishna+PG,+Prempuri(Friday+Market,+Mohalla,+Dhankauri+Road,+Dankaur,+Uttar+Pradesh+203201!2m2!1d77.5577061!2d28.3500468!3m5!1s0x390cc772b7343ed1:0x781af21da64b97b5!8m2!3d28.3500468!4d77.5577061!16s%2Fg%2F11zfxn1rd5?entry=ttu";

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="logo">
          <span>KRISHNA</span> PG
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#rooms">Rooms</a>
          <a href="#facilities">Facilities</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#enquiry" className="nav-btn">
          Enquire Now
        </a>
      </nav>

      {/* ================= FLOATING CONTACT ================= */}

      <div className="floating-contact">

        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          className="float-whatsapp"
          title="WhatsApp"
        >
          💬
        </a>

        <a
          href={`tel:${phoneNumber}`}
          className="float-call"
          title="Call"
        >
          ☎
        </a>

      </div>

      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <div className="hero-badge">
            ✦ PREMIUM PG ACCOMMODATION
          </div>

          <h1>
            Find Your
            <span>Perfect Home</span>
            Away From Home
          </h1>

          <p className="hero-text">
            Comfortable rooms, modern facilities, secure living and a
            friendly community — everything you need for a better PG life.
          </p>

          <div className="hero-buttons">

            <a href="#rooms" className="primary-btn">
              Explore Rooms →
            </a>

            <a href="#enquiry" className="secondary-btn">
              Send Enquiry
            </a>

          </div>

          <div className="hero-contact">

            <a href={`tel:${phoneNumber}`}>
              ☎ <span>Call Us</span>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              💬 <span>WhatsApp</span>
            </a>

            <a href={`mailto:${email}`}>
              ✉ <span>Email</span>
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <strong>500+</strong>
              <small>Residents</small>
            </div>

            <div>
              <strong>25+</strong>
              <small>Rooms</small>
            </div>

            <div>
              <strong>4.9★</strong>
              <small>Rating</small>
            </div>

            <div>
              <strong>24/7</strong>
              <small>Security</small>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-glow"></div>

          <div className="hero-image-box">

            <div className="house-icon">
              🏠
            </div>

            <div className="image-text">
              <span>WELCOME TO</span>
              <strong>KRISHNA PG</strong>
            </div>

          </div>

          <div className="floating-info rating-card">

            <span>★</span>

            <div>
              <strong>4.9/5</strong>
              <small>Resident Rating</small>
            </div>

          </div>

          <div className="floating-info secure-card">

            <span>🛡</span>

            <div>
              <strong>100% Secure</strong>
              <small>Safe & Comfortable</small>
            </div>

          </div>

        </div>

      </section>

      {/* ================= MARQUEE ================= */}

      <div className="marquee">

        <div className="marquee-track">

          <span>PREMIUM ROOMS</span>
          <b>✦</b>

          <span>24/7 SECURITY</span>
          <b>✦</b>

          <span>HIGH SPEED WIFI</span>
          <b>✦</b>

          <span>HEALTHY FOOD</span>
          <b>✦</b>

          <span>HOUSEKEEPING</span>
          <b>✦</b>

          <span>PREMIUM ROOMS</span>
          <b>✦</b>

          <span>24/7 SECURITY</span>

        </div>

      </div>

      {/* ================= ABOUT ================= */}

      <section className="about section" id="about">

        <div className="about-visual">

          <div className="about-big-number">
            01
          </div>

          <div className="about-card">

            <div>🏡</div>

            <h3>More Than A Room</h3>

            <p>
              We create a comfortable environment where you can
              study, work, relax and connect.
            </p>

          </div>

        </div>

        <div className="about-content">

          <p className="section-label">
            ABOUT KRISHNA PG
          </p>

          <h2>
            A place where
            <span>you feel at home.</span>
          </h2>

          <p>
            Krishna PG provides comfortable and affordable accommodation
            for students and working professionals. Our goal is to make
            everyday living simple, safe and enjoyable.
          </p>

          <p>
            From furnished rooms and high-speed Wi-Fi to security and
            housekeeping, everything is designed around your comfort.
          </p>

          <a href="#enquiry" className="text-btn">
            Know More About Us →
          </a>

        </div>

      </section>

      {/* ================= ROOMS ================= */}

      <section className="rooms section" id="rooms">

        <div className="section-heading">

          <p className="section-label">
            OUR ROOMS
          </p>

          <h2>
            Choose Your
            <span>Perfect Space</span>
          </h2>

          <p>
            Flexible room options designed for different budgets and
            lifestyles.
          </p>

        </div>

        <div className="room-grid">

          {/* SINGLE ROOM */}

          <div className="room-card">

            <div
              className="room-image room-one"
              style={{
                backgroundImage:
                  "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdvrHtUYJsXTpV1NXjJaqcALrihMkh4jp2XVfYHcepA&s=10')"
              }}
            >
              <span>POPULAR</span>
            </div>

            <div className="room-info">

              <div className="room-title">

                <h3>
                  Single Room
                </h3>

                <strong>
                  ₹12,000
                  <span>/month</span>
                </strong>

              </div>

              <p>
                Private and peaceful room for maximum privacy.
              </p>

              <div className="room-features">

                <span>🛏 Single Bed</span>
                <span>🚿 Attached Bath</span>
                <span>📶 Wi-Fi</span>
                <span>❄️ AC</span>

              </div>

              <a href="#enquiry" className="room-btn">
                Enquire About Room
              </a>

            </div>

          </div>

          {/* DOUBLE SHARING */}

          <div className="room-card">

            <div
              className="room-image room-two"
              style={{
                backgroundImage:
                  "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDLwIiVummUshl_Il-RGArR-wXUCIDRtJ_0V2sn1DgA&s=10')"
              }}
            >
              <span>BEST VALUE</span>
            </div>

            <div className="room-info">

              <div className="room-title">

                <h3>
                  Double Sharing
                </h3>

                <strong>
                  ₹8,500
                  <span>/month</span>
                </strong>

              </div>

              <p>
                Comfortable shared room with modern facilities.
              </p>

              <div className="room-features">

                <span>🛏 2 Beds</span>
                <span>🚿 Attached Bath</span>
                <span>📶 Wi-Fi</span>
                <span>🧹 Housekeeping</span>

              </div>

              <a href="#enquiry" className="room-btn">
                Enquire About Room
              </a>

            </div>

          </div>

          {/* TRIPLE SHARING */}

          <div className="room-card">

            <div
              className="room-image room-three"
              style={{
                backgroundImage:
                  "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdh2Mwt5N73_q3coozTyQCl4M42sfbrWkiWb08HpLrw&s=10')"
              }}
            >
              <span>AFFORDABLE</span>
            </div>

            <div className="room-info">

              <div className="room-title">

                <h3>
                  Triple Sharing
                </h3>

                <strong>
                  ₹7,500
                  <span>/month</span>
                </strong>

              </div>

              <p>
                Budget-friendly room with all essential facilities.
              </p>

              <div className="room-features">

                <span>🛏 3 Beds</span>
                <span>🚿 Attached Bath</span>
                <span>📶 Wi-Fi</span>
                <span>🍽 Food</span>

              </div>

              <a href="#enquiry" className="room-btn">
                Enquire About Room
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FACILITIES ================= */}

      <section className="facilities section" id="facilities">

        <div className="section-heading">

          <p className="section-label">
            OUR FACILITIES
          </p>

          <h2>
            Everything You
            <span>Need To Live Better</span>
          </h2>

        </div>

        <div className="facility-grid">

          <div className="facility-card">
            <div>📶</div>
            <h3>High Speed Wi-Fi</h3>
            <p>Fast and reliable internet for work and study.</p>
          </div>

          <div className="facility-card">
            <div>🛡️</div>
            <h3>24/7 Security</h3>
            <p>Secure premises and a safe living environment.</p>
          </div>

          <div className="facility-card">
            <div>🍽️</div>
            <h3>Healthy Food</h3>
            <p>Fresh and hygienic meals available regularly.</p>
          </div>

          <div className="facility-card">
            <div>🧹</div>
            <h3>Housekeeping</h3>
            <p>Regular cleaning for a fresh and comfortable space.</p>
          </div>

          <div className="facility-card">
            <div>🚗</div>
            <h3>Parking</h3>
            <p>Convenient parking space for residents.</p>
          </div>

          <div className="facility-card">
            <div>⚡</div>
            <h3>Power Backup</h3>
            <p>Stay comfortable even during power cuts.</p>
          </div>

          <div className="facility-card">
            <div>🧺</div>
            <h3>Laundry</h3>
            <p>Easy and convenient laundry facilities.</p>
          </div>

          <div className="facility-card">
            <div>❄️</div>
            <h3>AC Rooms</h3>
            <p>Comfortable rooms with cooling facilities.</p>
          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="stats-section">

        <div>
          <strong>500+</strong>
          <span>Happy Residents</span>
        </div>

        <div>
          <strong>25+</strong>
          <span>Premium Rooms</span>
        </div>

        <div>
          <strong>5+</strong>
          <span>Years Experience</span>
        </div>

        <div>
          <strong>4.9</strong>
          <span>Average Rating</span>
        </div>

      </section>

      {/* ================= PROCESS ================= */}

      <section className="process section">

        <div className="section-heading">

          <p className="section-label">
            HOW IT WORKS
          </p>

          <h2>
            Finding Your PG Is
            <span>Super Easy</span>
          </h2>

        </div>

        <div className="process-grid">

          <div className="process-card">

            <span>01</span>

            <div>🔎</div>

            <h3>
              Explore Rooms
            </h3>

            <p>
              Check our rooms and facilities.
            </p>

          </div>

          <div className="process-card">

            <span>02</span>

            <div>💬</div>

            <h3>
              Send Enquiry
            </h3>

            <p>
              Contact us through call or WhatsApp.
            </p>

          </div>

          <div className="process-card">

            <span>03</span>

            <div>🏠</div>

            <h3>
              Visit PG
            </h3>

            <p>
              Schedule a visit and see the property.
            </p>

          </div>

          <div className="process-card">

            <span>04</span>

            <div>🔑</div>

            <h3>
              Move In
            </h3>

            <p>
              Complete the process and get your room.
            </p>

          </div>

        </div>

      </section>

      {/* ================= GALLERY ================= */}

      <section className="gallery section" id="gallery">

        <div className="section-heading">

          <p className="section-label">
            OUR GALLERY
          </p>

          <h2>
            Take A Look
            <span>Inside Krishna PG</span>
          </h2>

        </div>

        <div className="gallery-grid">

          <div className="gallery-item large">
            🏠
          </div>

          <div className="gallery-item">
            🛏️
          </div>

          <div className="gallery-item">
            🛋️
          </div>

          <div className="gallery-item">
            🍽️
          </div>

          <div className="gallery-item large">
            🌿
          </div>

          <div className="gallery-item">
            🚿
          </div>

        </div>

      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section className="testimonials section">

        <div className="section-heading">

          <p className="section-label">
            RESIDENT REVIEWS
          </p>

          <h2>
            What Our
            <span>Residents Say</span>
          </h2>

        </div>

        <div className="testimonial-grid">

          <div className="testimonial">

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "The rooms are comfortable and the environment is very
              peaceful. Really good experience."
            </p>

            <strong>
              Rahul Sharma
            </strong>

            <small>
              Resident
            </small>

          </div>

          <div className="testimonial">

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "The facilities are good and the staff is helpful.
              The location is also very convenient."
            </p>

            <strong>
              Aditya Verma
            </strong>

            <small>
              Resident
            </small>

          </div>

          <div className="testimonial">

            <div className="stars">
              ★★★★★
            </div>

            <p>
              "Clean rooms, good food and secure environment.
              Overall a comfortable place to stay."
            </p>

            <strong>
              Priya Singh
            </strong>

            <small>
              Resident
            </small>

          </div>

        </div>

      </section>

      {/* ================= LOCATION ================= */}

      <section className="location section" id="location">

        <div className="location-content">

          <p className="section-label">
            OUR LOCATION
          </p>

          <h2>
            Visit
            <span>Krishna PG</span>
          </h2>

          <p>
            Krishna PG is located at Prempuri, Friday Market,
            Mohalla, Dhankauri Road, Dankaur, Uttar Pradesh 203201.
          </p>

          <div className="location-points">

            <span>
              📍 Prempuri, Dankaur
            </span>

            <span>
              🛣️ Dhankauri Road
            </span>

            <span>
              🛒 Friday Market Nearby
            </span>

            <span>
              🏠 Krishna PG
            </span>

          </div>

          <a
            href={googleMapsLink}
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            Open Google Maps →
          </a>

        </div>

        <a
          href={googleMapsLink}
          target="_blank"
          rel="noreferrer"
          className="map-box"
          aria-label="Open Krishna PG location in Google Maps"
        >

          <div className="map-pin">
            📍
          </div>

          <strong>
            KRISHNA PG
          </strong>

          <span>
            Prempuri, Dankaur
          </span>

          <b>
            Open in Google Maps →
          </b>

        </a>

      </section>

      {/* ================= ENQUIRY ================= */}

      <section className="enquiry section" id="enquiry">

        <div className="enquiry-heading">

          <p className="section-label">
            GET IN TOUCH
          </p>

          <h2>
            Ready To Find
            <span>Your New Home?</span>
          </h2>

          <p>
            Send us your details and our team will contact you shortly.
          </p>

          <div className="direct-contact">

            <a href={`tel:${phoneNumber}`}>

              ☎

              <div>
                <small>
                  Call Us
                </small>

                <strong>
                  {phoneNumber}
                </strong>
              </div>

            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >

              💬

              <div>
                <small>
                  WhatsApp
                </small>

                <strong>
                  Chat With Us
                </strong>
              </div>

            </a>

            <a href={`mailto:${email}`}>

              ✉

              <div>
                <small>
                  Email
                </small>

                <strong>
                  {email}
                </strong>
              </div>

            </a>

          </div>

        </div>

        <form
          className="enquiry-form"
          onSubmit={(e) => e.preventDefault()}
        >

          <div className="form-row">

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
            />

          </div>

          <div className="form-row">

            <select defaultValue="" required>

              <option value="" disabled>
                Select Room Type
              </option>

              <option>
                Single Room
              </option>

              <option>
                Double Sharing
              </option>

              <option>
                Triple Sharing
              </option>

            </select>

            <select defaultValue="" required>

              <option value="" disabled>
                Expected Move-in
              </option>

              <option>
                Immediately
              </option>

              <option>
                Within 15 Days
              </option>

              <option>
                Within 1 Month
              </option>

            </select>

          </div>

          <textarea
            rows="5"
            placeholder="Write your enquiry..."
          ></textarea>

          <button
            type="submit"
            className="submit-btn"
          >
            Send Enquiry →
          </button>

          <p className="form-note">
            Your information will only be used to contact you regarding
            your PG enquiry.
          </p>

        </form>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="final-cta">

        <div>

          <p>
            YOUR NEW HOME IS WAITING
          </p>

          <h2>
            Let's Find The
            <span>Right Room For You.</span>
          </h2>

        </div>

        <div className="cta-buttons">

          <a
            href={`tel:${phoneNumber}`}
            className="cta-call"
          >
            ☎ Call Now
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="cta-whatsapp"
          >
            💬 WhatsApp
          </a>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer id="contact">

        <div className="footer-main">

          <div className="footer-brand">

            <div className="logo">
              <span>KRISHNA</span> PG
            </div>

            <p>
              Comfortable living. Better experiences.
              Your home away from home.
            </p>

            <div className="socials">

              <a href={`mailto:${email}`}>
                ✉
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                💬
              </a>

              <a href={`tel:${phoneNumber}`}>
                ☎
              </a>

            </div>

          </div>

          <div>

            <h4>
              Quick Links
            </h4>

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#rooms">
              Rooms
            </a>

            <a href="#facilities">
              Facilities
            </a>

          </div>

          <div>

            <h4>
              Support
            </h4>

            <a href="#enquiry">
              Enquiry
            </a>

            <a href="#location">
              Location
            </a>

            <a href="#gallery">
              Gallery
            </a>

          </div>

          <div>

            <h4>
              Contact
            </h4>

            <p>
              📍 Prempuri, Dankaur, Uttar Pradesh 203201
            </p>

            <a href={`tel:${phoneNumber}`}>
              {phoneNumber}
            </a>

            <a href={`mailto:${email}`}>
              {email}
            </a>

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noreferrer"
            >
              📍 Open Google Maps
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 Krishna PG. All Rights Reserved.
          </span>

          <span>
            Made With ❤️ For Better Living
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;