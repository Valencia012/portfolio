import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

const valencia = {
    thumb1: require('../assets/images/thumbs/Valencia1.jpg'),
    thumb2: require('../assets/images/thumbs/Valencia5.jpg'),
}


const DEFAULT_IMAGES = [
    { id: '1', source: valencia.thumb1, thumbnail: valencia.thumb1, caption: 'Photo 1', description: 'My #1 Team '},
    { id: '2', source: valencia.thumb2, thumbnail: valencia.thumb2, caption: 'Photo 2', description: 'I look like I know a few things'},
]

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Valencia"
        const siteDescription = ""

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Hello world<br />
                             </h2>
                        </header>
                        <p>Today is going to be a GREAT DAY so lets make the best of it and be Blessed  and have fun while doing it!
                            Learning how to build a portfolio.....  
                        </p>
                        {/* <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul> */}
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        {/* <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul> */}
                    </section>
{/* 
                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1531 13th Ave.<br />
                                        Seattle, WA<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        206-320-6600
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">vmckinney012@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section> */}

                </div>

            </Layout>
        )
    }
}

export default HomeIndex