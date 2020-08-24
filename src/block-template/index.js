/**
 * Template
 */

 
const { RichText, MediaUpload, InspectorControls } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button, ColorPalette } = wp.components;


 // Import our CSS files
 import './style.scss';
 import './editor.scss';

 registerBlockType('template/main', {
   title: 'PPC Template',
   icon: 'smiley',
   category: 'common',
   attributes: {
     heroImage: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src',
     },
     heroAlt: {
      attribute: 'alt',
      selector: '.coupon__image'
    },
   },

   edit({ attributes, setAttributes }) {

     const getImageButton = (openEvent) => {
       if(attributes.heroImage) {
         return (
           <img
             src={ attributes.heroImage }
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
         <div className="couponImageContainer">
             <MediaUpload
               onSelect={ media => { setAttributes({ heroImage: media.url }); } }
               type="image"
               value={ attributes.heroImage }
               render={ ({ open }) => getImageButton(open) }
             />
          </div>
      </div>
       
     );

   },

  

   save({ attributes }) {

     return (
       
      <div>
        <div className="hero-image">
          <img src={ attributes.heroImage } />
        </div>
      </div>

     );
   }
 });
