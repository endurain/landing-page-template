/**
 * BLOCK: google-reviews
 */

const { RichText, MediaUpload, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;
// we just want button from wp.components for now
const { Button } = wp.components;

// inmport styles
import './style.scss';
import './editor.scss';

registerBlockType('card-block/main', {
  title: 'Card',
  icon: 'heart',
  category: 'common',
  attributes: {
    title: {
      source: 'text',
      selector: '.card__title'
    },
    body: {
      type: 'array',
      source: 'children',
      selector: '.card__body'
    },
    imageAlt: {
      attribute: 'alt',
      selector: '.card__image'
    },
    imageUrl: {
      attribute: 'src',
      selector: '.card__image'
    }
  }
});
