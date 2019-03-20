// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote, Cite, Deck, Heading, Image, List, ListItem, Notes,
  Quote, Slide, Text, Appear, CodePane, CodeSlide, Anim
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
  vueLogo: require('../assets/vue-logo.png')
};

const code = {
  oop: require("raw-loader!../assets/code/oop.example"),
  fp: require("raw-loader!../assets/code/fp.example"),
  backend: require("raw-loader!../assets/code/backend.example"),
  frontend: require("raw-loader!../assets/code/frontend.example")
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
            fromStyle={{ opacity: 1, transform: 'translate(0px, 250px)' }}
            toStyle={[{ opacity: 1, transform: 'translate(0px, 0px)' }]}
            easing={'bounceOut'}
          >
            <div>
              <Heading lineHeight={1.2} size={3} textColor={colors.pink} margin="0 0 2rem 0">
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
      </Deck>
    );
  }
}
