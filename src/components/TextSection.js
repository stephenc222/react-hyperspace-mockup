import React from 'react'
import Section from './Section'
import DottedLink from 'components/DottedLink'
import Header from 'components/Header'

const codeText = `
  i = 0;

  while (!deck.isInOrder()) {
    print 'Iteration ' + i;
    deck.shuffle();
    i++;
  }

  print 'It took ' + i + ' iterations to sort the deck.';
          
`

const TextSection = () => {
  return (
    <Section header='Text'>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
									This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
									This is <u>underlined</u> and this is code: <code>{`for (;;) {... }`}</code>. Finally, <DottedLink text='this is a link' />.</p>
        <hr />
        <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
        <hr />
        <Header priority='2'>Heading Level 2</Header>
        <Header priority='3'>Heading Level 3</Header>
        <Header priority='4'>Heading Level 4</Header>
        <hr />
        <Header priority='3'>Blockquote</Header>
        <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
        <Header priority='3'>Preformatted</Header>
        <pre>
          {codeText}
        </pre>
      </div>
    </Section>
  )
}

TextSection.propTypes = {}

export default TextSection
