// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote, Cite, Deck, Heading, Image, List, ListItem, Notes,
  Quote, Slide, Text, Appear, CodePane, CodeSlide
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Assets
const images = {
  tenYearsChallenge: require('../assets/js-10yearschallenge-meme.jpg'),
  jsOldLogo: require('../assets/js-logo-old.png'),
  jsNewLogo: require('../assets/js-logo-new.png')
};

const code = {
  jsExample: require("raw-loader!../assets/code/js.example")
};

// Require CSS
require('normalize.css');

const colors = {
  white: 'white'
};

const theme = createTheme(
  {
    primary: '#212127',
    secondary: '#1F2022',
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
        contentHeight={1000}
      >
        <Slide>
          <Text textColor={colors.white} margin="0 0 2rem 0">
            JavaScript #10YearsChallenge
          </Text>
          <Image src={images.tenYearsChallenge} height={600} />
        </Slide>

        <Slide>
          <Text>ha2</Text>
        </Slide>
      </Deck>
    );
  }
}
