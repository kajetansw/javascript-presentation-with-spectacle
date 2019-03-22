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
  tenYearsChallenge: require('../assets/js-10yearschallenge-meme.jpg'),
  jsOldLogo: require('../assets/js-logo-old.png'),
  jsNewLogo: require('../assets/js-logo-new.png'),
  jsLogo: require('../assets/js-logo.jpg'),
  busted: require('../assets/busted.png'),
  jqueryLogo: require('../assets/jquery-logo.png'),
  nodejsLogo: require('../assets/nodejs-logo.png'),
  jreNodejs: require('../assets/jre-nodejs.png'),
  npmLogo: require('../assets/npm-logo.png'),
  programming: require('../assets/programming.gif'),
  expressLogo: require('../assets/express-logo.png'),
  nestLogo: require('../assets/nest-logo.png'),
  angularLogo: require('../assets/angular-logo.png'),
  reactLogo: require('../assets/react-logo.png'),
  vueLogo: require('../assets/vue-logo.png'),
  cypressLogo: require('../assets/cypress-logo.jpg'),
  jestLogo: require('../assets/jest-logo.png'),
  webpackLogo: require('../assets/webpack-logo.png'),
  gulpLogo: require('../assets/gulp-logo.png'),
  gruntLogo: require('../assets/grunt-logo.png'),
  electronLogo: require('../assets/electron-logo.png'),
  ionicLogo: require('../assets/ionic-logo.png'),
  tensorflowLogo: require('../assets/tensorflow-logo.png'),
  brainLogo: require('../assets/brain-logo.png'),
  bitcoinLogo: require('../assets/bitcoin-logo.png'),
  devpun: require('../assets/devpun.gif'),
  thanos: require('../assets/thanos.png'),
  tc: require('../assets/tc39.png'),
  ieTroll: require('../assets/ie-troll.png'),
  freecodecamp: require('../assets/freecodecamp.png'),
  mosh: require('../assets/mosh.png'),
  academind: require('../assets/academind.png')
};

const code = {
  oop: require("raw-loader!../assets/code/oop.example"),
  fp: require("raw-loader!../assets/code/fp.example"),
  backend: require("raw-loader!../assets/code/backend.example"),
  frontend: require("raw-loader!../assets/code/frontend.example"),
  testing: require("raw-loader!../assets/code/testing.example")
};

// Require CSS
require('normalize.css');

const colors = {
  white: 'white',
  lightblue: '#03A9FC',
  pink: '#EB4F80'
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
        transition={['slide', 'spin']}
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

        <Slide>
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

        <Slide>
          <Heading textColor={colors.lightblue} size={4} margin="0 0 5rem 0">
            JavaScript as a programming language
          </Heading>
          <List textColor={colors.white}>
            <Appear>
              <ListItem padding=".5rem">Weakly typed</ListItem>
            </Appear>
            <Appear>
              <ListItem padding=".5rem">Single-threaded</ListItem>
            </Appear>
            <Appear>
              <ListItem padding=".5rem">Synchronous</ListItem>
            </Appear>
          </List>
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
            toStyle={[{ opacity: 1, transform: 'translate(400px, -700px) rotate(-10deg)' }]}
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
            toStyle={[{ opacity: 1, transform: 'translate(400px, -600px) rotate(-10deg)' }]}
            easing={'back'}
          >
            <div>
              <Image src={images.busted} />
            </div>
          </Anim>
        </Slide>

        <Slide>
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
            "Node.js is a JS runtime built on Chrome's V8 JavaScript engine."
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

        <Slide>
          <Heading
            size={2}
            textColor={colors.pink}
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
            height={100}
            margin="0 5rem 3rem 0"
          />
          <Image
            src={images.nestLogo}
            display="inline"
            height={100}
            margin="0 5rem 3rem 0"
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
            size={2}
            margin="0 0 3rem 0"
          >
            Having fun!
          </Heading>
          <Image
            src={images.devpun}
            width={1000}
          />
          <Appear>
            <Image
              src={images.thanos}
              style={{ position: 'fixed', transform: 'translate(700px, -200px)' }}
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
                style={{ position: 'fixed', transform: 'translate(880px, -100px)' }}
              />
            </Appear>
          </List>
        </Slide>

        <Slide>
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
          <Heading
            textColor={colors.lightblue}
            size={3}
            margin="0 0 2rem 0"
          >
            Where to learn it?
          </Heading>
          <Link href="https://learn.freecodecamp.org/" target="_blank">
            <Image
              src={images.freecodecamp}
              display="inline"
              height={300}
            />
          </Link>
          <Link href="https://www.youtube.com/watch?v=W6NZfCO5SIk&list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax" target="_blank">
            <Image
              src={images.mosh}
              display="inline"
              height={300}
            />
          </Link>
          <Link href="https://www.academind.com/learn/javascript/" target="_blank">
            <Image
              src={images.academind}
              display="inline"
              height={300}
            />
          </Link>
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
              <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects" target="_blank" textColor={colors.white}>
                Objects in JS
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Functions" target="_blank" textColor={colors.white}>
                Functions in JS
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
          <CodePane
            lang="js"
            source={'console.log("Thank you!");'}
            textSize="5rem"
          />
        </Slide>
      </Deck>
    );
  }
}
