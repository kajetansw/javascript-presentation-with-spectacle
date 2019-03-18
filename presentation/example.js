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
  jsExample: require('raw-loader!../assets/code/js.example')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
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
      <Deck theme={theme} transition={['slide']} transitionDuration={500}>
        <Slide>
          <CodePane
            lang="java"
            source={code.jsExample}
            textSize="1.5rem"
          />
        </Slide>

        <Slide>
          <Heading>Animated List</Heading>
          <List>
            <Appear>
              <ListItem>Item 1</ListItem>
            </Appear>
            <Appear>
              <ListItem>Item 2</ListItem>
            </Appear>
            <Appear>
              <ListItem>Item 3</ListItem>
            </Appear>
            <Appear>
              <ListItem>Item 4</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide bgColor="secondary">
          <Heading>Spectacle Boilerplate</Heading>
          <Text>open the presentation/index.js file to get started</Text>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1}>Typography</Heading>
          <Text fit bold>
            open the presentation/index.js file to get started
          </Text>
          <Heading>Heading 1</Heading>
          <Heading>Heading 2</Heading>
          <Heading>Heading 3</Heading>
          <Heading>Heading 4</Heading>
          <Heading>Heading 5</Heading>
          <Text>Standard text</Text>
        </Slide>

        <Slide>
          <Heading>Standard List</Heading>
        </Slide>

        <Slide>
          <Heading>Example Quote</Heading>
        </Slide>

        <Slide>
          <Image src={images.jsOldLogo} width={500} />
        </Slide>
      </Deck>
    );
  }
}
