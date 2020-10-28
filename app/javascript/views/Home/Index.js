import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let styles = {
      background: '#f3f3f3'
    }

    return (
      <div>
        <section id="hero" className="clearfix">
          <div className="container d-flex h-100">
            <div className="row justify-content-center align-self-center aos-init aos-animate" data-aos="fade-up">
              <div className="col-md-6 intro-info order-md-first order-last aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                <h2>Rapid Solutions<br/>for Your <span>Business!</span></h2>
                <div>
                  <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>
              </div>
              <div className="col-md-6 intro-img order-md-last order-first aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
                <img src="images/intro-img.svg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <main id="main">
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <div className="images/about-img" data-aos="fade-right" data-aos-delay="100">
                    <img src="images/about-img.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="about-content" data-aos="fade-left" data-aos-delay="100">
                    <h2>About Us</h2>
                    <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.</p>
                    <ul>
                      <li><i className="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="ion-android-checkmark-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Home
