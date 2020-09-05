/**
 *  BLOCK: PPC Template
 *  ---
 */

//  Import CSS.
// import './editor.css'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { RichText, MediaUpload, MediaUploadCheck } = wp.blockEditor
const { Button } = wp.components

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
    heroImage: {
      attribute: 'src',
      selector: 'js-hero-image'
    },
    heroHeading: {
      type: 'string',
      selector: 'js-hero-text'
      },
    heroSubText: {
      type: 'string',
      selector: 'js-hero-subtext',
      multiline: 'p'
    },
    imageAlt: {
      attribute: 'alt',
      selector: ''
    },
    imageUrl: {
      attribute: 'src',
      selector: ''
    },
    phoneNumber: {
      type: 'string',
      selector: 'js-phone-number'
    },
    formID: {
      type: 'string',
      selector: 'js-phone-id'
    },
    sectionOne: {
      type: 'string',
      selector: 'js-section-one',
      multiline: 'li'
    },
    sectionTwo: {
      type: 'string',
      selector: 'js-section-two',
      multiline: 'li'
    },
    ctaImage: {
      attribute: 'src',
      selector: 'js-cta-image'
    },
  },

  // The UI for the WordPress editor
  edit: props => {
     // Pull out the props we'll use
  const { attributes, className, setAttributes } = props

  const getImageButton = (openEvent) => {
    if(attributes.imageUrl) {
      return (
        <img
          src={ attributes.imageUrl }
          onClick={ openEvent }
          className="image"
        />
      );
    }
    else {
      return (
        <div className="button-container">
          <Button
            onClick={ openEvent }
            className="button button-large"
          >
            Pick an image
          </Button>
        </div>
      );
    }
  };

  const getImageButton2 = (openEvent) => {
    if(attributes.ctaImage) {
      return (
        <img
          src={ attributes.ctaImage }
          onClick={ openEvent }
          className="image"
        />
      );
    }
    else {
      return (
        <div className="button-container">
          <Button
            onClick={ openEvent }
            className="button button-large"
          >
            Pick an image
          </Button>
        </div>
      );
    }
  };

  return (
        <div>
          <div className="ppc-settings">
            <RichText
              className="js-phone-number"
              value={attributes.phoneNumber}
              onChange={value => setAttributes({ phoneNumber: value })}
              tagName="p"
              placeholder="Enter phone# ex:(800) 555-5555"
            />
            <RichText
              className="js-form-id"
              value={attributes.formID}
              onChange={value => setAttributes({ formID: value })}
              tagName="p"
              placeholder="Enter form ID"
            />
          </div>
          <div className="ppc-hero">
            <MediaUpload
              className="js-hero-image"
              onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
              type="image"
              value={ attributes.imageID }
              render={ ({ open }) => getImageButton(open) }
            />
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
          <div className="ppc-section-one">
            <RichText
              className="js-section-one"
              value={attributes.sectionOne}
              onChange={value => setAttributes({ sectionOne: value })}
              tagName="ul"
              multiline="li"
              placeholder="Enter List Items"
            />
          </div>
          <div className="ppc-section-two">
            <RichText
              className="js-section-two"
              value={attributes.sectionTwo}
              onChange={value => setAttributes({ sectionTwo: value })}
              tagName="ul"
              multiline="li"
              placeholder="Enter List Items"
            />
          </div>
          <div className="js-section-two">
            <MediaUpload
              className="js-cta-image"
              onSelect={ media => { setAttributes({ imageAlt: media.alt, ctaImage: media.url }); } }
              type="image"
              value={ attributes.imageID }
              render={ ({ open }) => getImageButton2(open) }
            />
          </div>
        </div>
    )
  },

  // The output on the live site
  save: props => {
    return null
  }
})