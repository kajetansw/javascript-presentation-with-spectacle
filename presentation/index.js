// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote, Cite, Deck, Heading, Image, List, ListItem, Notes,
  Quote, Slide, Text, Appear, CodePane, CodeSlide, Anim
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Assets
const images = {
  tenYearsChallenge: require('../assets/js-10yearschallenge-meme.jpg'),
  jsOldLogo: require('../assets/js-logo-old.png'),
  jsNewLogo: require('../assets/js-logo-new.png'),
  jsLogo: require('../assets/js-logo.jpg'),
  busted: require('../assets/busted.png')
};

const code = {
  oop: require("raw-loader!../assets/code/oop.example"),
  fp: require("raw-loader!../assets/code/fp.example")
};

// Require CSS
require('normalize.css');

const colors = {
  white: 'white',
  lightblue: '#03A9FC'
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
        transition={['slide']}
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
              <Heading lineHeight={1.2} size={3} textColor={colors.white} margin="0 0 2rem 0">
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
              <ListItem padding=".5rem">weakly typed</ListItem>
            </Appear>
            <Appear>
              <ListItem padding=".5rem">single-threaded</ListItem>
            </Appear>
            <Appear>
              <ListItem padding=".5rem">synchronous</ListItem>
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
      </Deck>
    );
  }
}
