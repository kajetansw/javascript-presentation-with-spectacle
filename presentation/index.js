// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote, Cite, Deck, Heading, Image, List, ListItem, Link,
  Quote, Slide, Text, Appear, CodePane, Anim
} from 'spectacle';

import './fireworks.css';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Assets
const images = {
  tenYearsChallenge: require('../assets/images/js-10yearschallenge-meme.jpg'),
  jsOldLogo: require('../assets/images/js-logo-old.png'),
  jsNewLogo: require('../assets/images/js-logo-new.png'),
  jsLogo: require('../assets/images/js-logo.jpg'),
  busted: require('../assets/images/busted.png'),
  jqueryLogo: require('../assets/images/jquery-logo.png'),
  nodejsLogo: require('../assets/images/nodejs-logo.png'),
  jreNodejs: require('../assets/images/jre-nodejs.png'),
  npmLogo: require('../assets/images/npm-logo.png'),
  programming: require('../assets/images/programming.gif'),
  expressLogo: require('../assets/images/express-logo.png'),
  nestLogo: require('../assets/images/nest-logo.png'),
  angularLogo: require('../assets/images/angular-logo.png'),
  reactLogo: require('../assets/images/react-logo.png'),
  vueLogo: require('../assets/images/vue-logo.png'),
  cypressLogo: require('../assets/images/cypress-logo.jpg'),
  jestLogo: require('../assets/images/jest-logo.png'),
  webpackLogo: require('../assets/images/webpack-logo.png'),
  gulpLogo: require('../assets/images/gulp-logo.png'),
  gruntLogo: require('../assets/images/grunt-logo.png'),
  electronLogo: require('../assets/images/electron-logo.png'),
  ionicLogo: require('../assets/images/ionic-logo.png'),
  tensorflowLogo: require('../assets/images/tensorflow-logo.png'),
  brainLogo: require('../assets/images/brain-logo.png'),
  bitcoinLogo: require('../assets/images/bitcoin-logo.png'),
  thanos: require('../assets/images/thanos.png'),
  tc: require('../assets/images/tc39.png'),
  ieTroll: require('../assets/images/ie-troll.png'),
  freecodecamp: require('../assets/images/freecodecamp.png'),
  mosh: require('../assets/images/mosh.png'),
  academind: require('../assets/images/academind.png')
};

const code = {
  oop: require("raw-loader!../assets/code/oop.example"),
  weakly: require("raw-loader!../assets/code/weakly.example"),
  fp: require("raw-loader!../assets/code/fp.example"),
  backend: require("raw-loader!../assets/code/backend.example"),
  frontend: require("raw-loader!../assets/code/frontend.example"),
  testing: require("raw-loader!../assets/code/testing.example")
};

// Require CSS
require('normalize.css');

const colors = {
  white: 'white',
  black: 'black',
  lightblue: '#03A9FC',
  pink: '#EB4F80',
  red: '#f44242'
};

const theme = createTheme(
  {
    primary: '#212127',
    secondary: 'white',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        theme={theme}
        transition={['fade']}
        transitionDuration={500}
        contentHeight={800}
      >
        <Slide align="center center">
          <Anim
            fromStyle={{ opacity: 1, transform: 'translate(0px, 250px) scale(1)' }}
            toStyle={[{ opacity: 1, transform: 'translate(0px, 0px) scale(0.8)' }]}
            easing={'bounceOut'}
          >
            <div>
              <Heading
                lineHeight={1.2}
                size={2}
                textColor={colors.pink}
                margin="0 0 2rem 0"
              >
                JavaScript #10YearsChallenge
              </Heading>
            </div>
          </Anim>
          <Appear>
            <Image src={images.tenYearsChallenge} height={550} />
          </Appear>
        </Slide>

        <Slide
          bgImage="https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          bgDarken="0.5"
        >
          <Heading
            size={1}
            textColor={colors.lightblue}
            lineHeight={1.2}
            margin="0 0 3rem 0"
          >
            Just what is JavaScript?
          </Heading>
          <Image src={images.jsLogo} width={200} />
        </Slide>

        <Slide>
          <BlockQuote>
            <Quote textColor={colors.lightblue}>"Java is to JavaScript what Car is to Carpet"</Quote>
            <Cite textColor={colors.white}>Chris Heilmann</Cite>
          </BlockQuote>
        </Slide>

        <Slide
          bgImage="http://hdqwalls.com/wallpapers/code.jpg"
          bgDarken="0.5"
        >
          <Heading textColor={colors.white} size={1}>
            JavaScript as a programming language
          </Heading>
        </Slide>

        <Slide>
          <Appear>
            <Heading textColor={colors.lightblue} size={2} margin="0 0 5rem 0">
              Weakly typed
            </Heading>
          </Appear>
          <CodePane
            lang="js"
            source={code.weakly}
            textSize="1.5rem"
          />
        </Slide>

        <Slide>
          <Heading
            textColor={colors.red}
            size={1}
            margin="0 0 5rem 0"
            style={{ textDecoration: 'line-through' }}
          >
            Asynchronous
          </Heading>
          <Heading
            textColor={colors.lightblue}
            size={1}
            margin="0 0 5rem 0"
          >
            Synchronous <br/> & <br/> Single-threaded
          </Heading>
        </Slide>

        <Slide>
          <Heading
            textColor={colors.lightblue}
            size={2}
            margin="0 0 3rem 0"
          >
            Object Oriented?
          </Heading>
          <CodePane
            lang="js"
            source={code.oop}
            textSize="1.5rem"
          />
          <Anim
            transitionDuration={500}
            fromStyle={{ opacity: 0, transform: 'translate(0px, 0px)' }}
            toStyle={[{ opacity: 1, transform: 'translate(400px, -550px) rotate(-10deg)' }]}
            easing={'back'}
          >
            <div>
              <Image src={images.busted} />
            </div>
          </Anim>
        </Slide>

        <Slide>
          <Heading
            textColor={colors.lightblue}
            size={2}
            margin="0 0 3rem 0"
          >
            Functional?
          </Heading>
          <CodePane
            lang="js"
            source={code.fp}
            textSize="1.7rem"
          />
          <Anim
            transitionDuration={500}
            fromStyle={{ opacity: 0, transform: 'translate(0px, 0px)' }}
            toStyle={[{ opacity: 1, transform: 'translate(400px, -750px) rotate(-10deg)' }]}
            easing={'back'}
          >
            <div>
              <Image src={images.busted} />
            </div>
          </Anim>
        </Slide>

        <Slide
          bgImage="https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          bgDarken="0.8"
        >
          <Heading
            textColor={colors.lightblue}
            size={1}
          >
            Multi-paradigm language
          </Heading>
          <Image
            src="https://www.onlygfx.com/wp-content/uploads/2016/09/green-approved-stamp-1-1024x772.png"
            style={{ transform: 'translate(200px, -300px) scale(0.5) rotate(15deg)', position: 'fixed' }}
          />
        </Slide>

        <Slide
          bgImage="https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          bgDarken="0.3"
        >
          <Image src={images.jsOldLogo} height={200}/>
          <Heading
            size={2}
            textColor={colors.lightblue}
            margin="0 0 4rem 0"
            lineHeight={1.2}
          >
            JavaScript (R)evolution
          </Heading>
          <Image src={images.jsNewLogo} height={200}/>
        </Slide>

        <Slide>
          <Heading margin="0 0 2rem 0">Before 2009</Heading>
          <Text fit textColor={colors.white} margin="4rem 0">
            "Controlling the behavior of HTML elements."
          </Text>
          <List textColor={colors.white}>
            <Appear>
              <ListItem padding=".5rem">Changing HTML content</ListItem>
            </Appear>
            <Appear>
              <ListItem padding=".5rem">Animations</ListItem>
            </Appear>
            <Appear>
              <ListItem padding=".5rem">AJAX</ListItem>
            </Appear>
          </List>
          <Appear>
            <Image src={images.jqueryLogo} width={250}/>
          </Appear>
        </Slide>

        <Slide>
          <Heading margin="0 0 4rem 0">Example</Heading>
          <Link href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb" target="_blank">
            <button style={{
              background: '#444444',
              borderRadius: '10px',
              boxShadow: '15px 15px 40px 0px rgba(0,0,0,0.75)',
              color: 'white',
              cursor: 'pointer',
              fontFamily: 'Montserrat',
              fontSize: '3rem',
              fontWeight: 'bold',
              padding: '1rem'
            }}
            >
              CLICK ME
            </button>
          </Link>
        </Slide>

        <Slide>
          <Heading margin="0 0 5rem 0">2009</Heading>
          <Image src={images.nodejsLogo} width={600}/>
          <div className="pyro">
            <div className="before"></div>
            <div className="after"></div>
          </div>
        </Slide>

        <Slide>
          <Image src={images.nodejsLogo} width={400}/>
          <Text textColor={colors.white} margin="4rem 0">
            "Node.js is a JS runtime environment built on Chrome's V8 JavaScript engine."
          </Text>
          <Image src={images.jreNodejs} width={500} />
        </Slide>

        <Slide>
          <Image src={images.npmLogo} width={400}/>
          <Text textColor={colors.white} margin="4rem 0">
            NodeJS Package Manager
          </Text>
          <List textColor={colors.white}>
            <Appear>
              <ListItem padding=".5rem">Registry of 800.000 packages (03/2019)</ListItem>
            </Appear>
            <Appear>
              <ListItem padding=".5rem">Available for everyone, for free</ListItem>
            </Appear>
            <Appear>
              <ListItem padding=".5rem">Everyone can contribute</ListItem>
            </Appear>
            <Appear>
              <ListItem padding=".5rem">Ready-to-use solutions</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide bgImage={images.programming}></Slide>

        <Slide
          bgImage="https://images.unsplash.com/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1216&q=80"
          bgDarken="0.6"
        >
          <Heading
            size={1}
            textColor={colors.lightblue}
            margin="0 0 3rem 0"
          >
            What is the use for JavaScript today?
          </Heading>
        </Slide>

        <Slide>
          <Heading
            textColor={colors.lightblue}
            size={2}
            margin="0 0 3rem 0"
          >
            Back-end
          </Heading>
          <Image
            src={images.expressLogo}
            display="inline"
            height={80}
            margin="0 5rem 3rem 0"
          />
          <Image
            src={images.nestLogo}
            display="inline"
            height={80}
            margin="0 5rem 3rem 0"
          />
          <Image
            src="https://raw.githubusercontent.com/marblejs/marble/master/assets/img/logo.png"
            display="inline"
            height={80}
            margin="0 0 3rem 0"
          />
          <CodePane
            lang="js"
            source={code.backend}
            textSize="1.5rem"
          />
        </Slide>

        <Slide>
          <Heading
            textColor={colors.lightblue}
            size={2}
            margin="0 0 3rem 0"
          >
            Front-end
          </Heading>
          <Image
            src={images.angularLogo}
            display="inline"
            height={100}
            margin="0 5rem 3rem 0"
          />
          <Image
            src={images.reactLogo}
            display="inline"
            height={100}
            margin="0 5rem 3rem 0"
          />
          <Image
            src={images.vueLogo}
            display="inline"
            height={100}
            margin="0 0 3rem 0"
          />
          <CodePane
            lang="js"
            source={code.frontend}
            textSize="1.5rem"
          />
        </Slide>

        <Slide>
          <Heading
            textColor={colors.lightblue}
            size={2}
            margin="0 0 3rem 0"
          >
            Testing
          </Heading>
          <Image
            src={images.cypressLogo}
            display="inline"
            height={100}
            margin="0 5rem 3rem 0"
          />
          <Image
            src={images.jestLogo}
            display="inline"
            height={100}
            margin="0 5rem 3rem 0"
          />
          <CodePane
            lang="js"
            source={code.testing}
            textSize="1.5rem"
          />
        </Slide>

        <Slide>
          <Heading
            textColor={colors.lightblue}
            size={2}
            margin="0 0 3rem 0"
          >
            Building tools
          </Heading>
          <Image
            src={images.webpackLogo}
            display="inline"
            height={300}
            margin="0 5rem 3rem 0"
          />
          <Image
            src={images.gulpLogo}
            display="inline"
            height={300}
            margin="0 5rem 3rem 0"
          />
          <Image
            src={images.gruntLogo}
            display="inline"
            height={300}
            margin="0 5rem 3rem 0"
          />
        </Slide>

        <Slide>
          <Heading
            textColor={colors.lightblue}
            size={2}
            margin="0 0 3rem 0"
          >
            Desktop and mobile
          </Heading>
          <Image
            src={images.electronLogo}
            height={200}
          />
          <Image
            src={images.ionicLogo}
            height={200}
          />
        </Slide>

        <Slide>
          <Heading
            textColor={colors.lightblue}
            size={2}
            margin="0 0 3rem 0"
          >
            Machine learning
          </Heading>
          <Image
            src={images.tensorflowLogo}
            display="inline"
            margin="0 5rem 0 0"
            height={200}
          />
          <Image
            src={images.brainLogo}
            display="inline"
            height={200}
          />
        </Slide>

        <Slide>
          <Heading
            textColor={colors.lightblue}
            size={2}
            margin="0 0 3rem 0"
          >
            Cryptocurrency
          </Heading>
          <Image
            src={images.bitcoinLogo}
            display="inline"
            height={300}
          />
        </Slide>

        <Slide>
          <Heading
            textColor={colors.lightblue}
            size={1}
            margin="0 0 3rem 0"
          >
            Having fun!
          </Heading>
          <Appear>
            <Image
              src={images.thanos}
              width={300}
            />
          </Appear>
        </Slide>

        <Slide>
          <Heading
            textColor={colors.lightblue}
            size={4}
            margin="0 0 3rem 0"
          >
            Ecma International <br/> Technical Committee 39 <br/> ECMAScript
          </Heading>
          <Image
            src={images.tc}
            width={200}
          />
          <List textColor={colors.white}>
            <Appear>
              <ListItem padding=".5rem">Everyone can submit a proposal</ListItem>
            </Appear>
            <Appear>
              <ListItem padding=".5rem">New ECMAScript standard every year</ListItem>
            </Appear>
            <Appear>
              <ListItem padding=".5rem">Fast progressing browser compatibility</ListItem>
            </Appear>
            <Appear>
              <Image
                src={images.ieTroll}
                width={200}
                style={{ position: 'fixed', transform: 'translate(650px, -120px)' }}
              />
            </Appear>
          </List>
        </Slide>

        <Slide bgImage="https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" bgDarken="0.8">
          <Heading
            textColor={colors.lightblue}
            size={4}
            margin="0 0 5rem 0"
          >
            So... Why to choose JavaScript anyway?
          </Heading>
          <List textColor={colors.white}>
            <Appear>
              <ListItem padding=".5rem">Easy to learn, common syntax</ListItem>
            </Appear>
            <Appear>
              <ListItem padding=".5rem">Many possibilities</ListItem>
            </Appear>
            <Appear>
              <ListItem padding=".5rem">Executable just everywhere</ListItem>
            </Appear>
            <Appear>
              <ListItem padding=".5rem">Growing popularity</ListItem>
            </Appear>
            <Appear>
              <ListItem padding=".5rem">Community</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Image src="http://sogrady-media.redmonk.com/sogrady/files/2019/03/lang.rank_.119.png"/>
        </Slide>

        <Slide>
          <Heading>References</Heading>
          <List>
            <ListItem>
              <Link href="http://voidcanvas.com/is-javascript-really-interpreted-or-compiled-language/" target="_blank" textColor={colors.white}>
                Is JS really interpreted or compiled?
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://medium.com/@kvosswinkel/is-javascript-synchronous-or-asynchronous-what-the-hell-is-a-promise-7aa9dd8f3bfb" target="_blank" textColor={colors.white}>
                Is JS synchronous or asynchronous?
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://stackoverflow.com/questions/107464/is-javascript-object-oriented/108773#108773" target="_blank" textColor={colors.white}>
                Is JS object-oriented?
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://medium.com/techtrument/multithreading-javascript-46156179cf9a" target="_blank" textColor={colors.white}>
                Into the Web Workers
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript" target="_blank" textColor={colors.white}>
                Understanding Prototypes and Inheritance in JS
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.tutorialsteacher.com/javascript/new-keyword-in-javascript" target="_blank" textColor={colors.white}>
                JavaScript "new" keyword
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5" target="_blank" textColor={colors.white}>
                What exactly is NodeJS?
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/tc39" target="_blank" textColor={colors.white}>
                GitHub repository of TC 39
              </Link>
            </ListItem>
            <ListItem>
              <Link href="http://kangax.github.io/compat-table/es2016plus/" target="_blank" textColor={colors.white}>
                ECMAScript browser compatibility table
              </Link>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading
            textColor={colors.lightblue}
            size={3}
            margin="0 0 2rem 0"
          >
            Begin your journey!
          </Heading>
          <Link href="https://learn.freecodecamp.org/" target="_blank">
            <Image
              src={images.freecodecamp}
              display="inline"
              height={250}
            />
          </Link>
          <Link href="https://www.youtube.com/watch?v=W6NZfCO5SIk&list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax" target="_blank">
            <Image
              src={images.mosh}
              display="inline"
              height={250}
            />
          </Link>
          <Link href="https://www.academind.com/learn/javascript/" target="_blank">
            <Image
              src={images.academind}
              display="inline"
              height={280}
            />
          </Link>
          <Text margin="2rem 0" textColor={colors.white}>(Also via communities! 😊)</Text>
        </Slide>

        <Slide>
          <Heading>Thank you! 😊</Heading>
          <section style={{ marginTop: '4rem' }}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Blogger.svg/1030px-Blogger.svg.png"
              height={100}
            />
            <Text textColor={colors.white}>dev-self-start.blogspot.com</Text>
          </section>
          <section style={{ marginTop: '4rem' }}>
            <Image
              src="https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png"
              height={100}
            />
            <Text textColor={colors.white}>@KajetanSw</Text>
          </section>
        </Slide>
      </Deck>
    );
  }
}
