/**
 *  BLOCK: PPC Template
 *  ---
 */

//  Import CSS.
// import './editor.css'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { RichText } = wp.blockEditor

registerBlockType('cgb/block-google-reviews', {
  title: __( 'PCC Template' ),
  icon: 'shield',
  category: 'layout',
  keywords: [
    __( 'ppc' ),
    __( 'template' ),
  ],

  // Enable or disable support for low-level features
  supports: {
    // Turn off ability to edit HTML of block content
    html: false,
    // Turn off reusable block feature
    reusable: false,
    // Add alignwide and alignfull options
    align: false
  },

  // Set up data model 
  attributes: {
    heroHeading: {
        type: 'string',
        selector: 'js-hero-text'
      },
    heroSubText: {
        type: 'string',
        selector: 'js-hero-subtext',
        multiline: 'p'
    },
  },

  // The UI for the WordPress editor
  edit: props => {
     // Pull out the props we'll use
  const { attributes, className, setAttributes } = props

    return (
        <div>
            <RichText
                className="js-hero-text"
                value={attributes.heroHeading}
                onChange={value => setAttributes({ heroHeading: value })}
                tagName="h2"
                placeholder="Hero Heading"
            />
            <RichText
                className="js-hero-subtext"
                value={attributes.heroSubText}
                onChange={value => setAttributes({ heroSubText: value })}
                tagName="h3"
                placeholder="Hero Sub Text"
            />
        </div>
    )
  },

  // The output on the live site
  save: props => {
    return null
  }
})