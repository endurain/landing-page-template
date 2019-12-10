/**
 * BLOCK: Coupon
 */

 const { RichText, MediaUpload, PlainText } = wp.editor;
 const { registerBlockType } = wp.blocks;
 const { Button } = wp.components;

 // Import our CSS files
 import './style.scss';
 import './editor.scss';

 registerBlockType('coupon-simple/main', {
   title: 'Simple Coupon',
   icon: 'tickets',
   category: 'common',
   attributes: {
     title: {
       source: 'text',
       selector: '.coupon__title'
     },
     body: {
       type: 'array',
       source: 'children',
       selector: '.coupon__body'
     },
     lowerBody: {
       type: 'array',
       source: 'children',
       selector: '.lower__coupon__body'
     },
     imageAlt: {
       attribute: 'alt',
       selector: '.coupon__image'
     },
     imageUrl: {
       attribute: 'src',
       selector: '.coupon__image'
     }
   },
   edit({ attributes, className, setAttributes }) {

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

     return (
       <div className="container">
        <div className="couponEditorWrapper">
          <div className="couponContentContainer">
             <PlainText
               onChange={ content => setAttributes({ title: content }) }
               value={ attributes.title }
               placeholder="Coupon title"
               className="heading"
             />
             <RichText
               onChange={ content => setAttributes({ body: content }) }
               value={ attributes.body }
               multiline="p"
               placeholder="Upper coupon text"
               formattingControls={ ['bold', 'italic', 'underline'] }
               isSelected={ attributes.isSelected }
             />
             <hr />
             <RichText
               onChange={ content => setAttributes({ lowerBody: content }) }
               value={ attributes.lowerBody }
               multiline="p"
               placeholder="Lower coupon text"
               formattingControls={ ['bold', 'italic', 'underline'] }
               isSelected={ attributes.isSelected }
             />
           </div>
           <div className="couponImageContainer">
             <MediaUpload
               onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
               type="image"
               value={ attributes.imageID }
               render={ ({ open }) => getImageButton(open) }
             />
           </div>
         </div>
       </div>
     );

   },

   save({ attributes }) {

     const couponImage = (src, alt) => {
        // null returns nothing
       if(!src) return null;

       if(alt) {
         return (
           <img
             className="coupon__image"
             src={ src }
             alt={ alt }
           />
         );
       }
       // No alt set, so let's hide it from screen readers,
       return (
         <img
           className="coupon__image"
           src={ src }
           alt=""
           aria-hidden="true"
         />
       );
     };

     return (
       <div className="coupon__wrapper">
         <div className="coupon__content">
           <h3 className="coupon__title">{ attributes.title }</h3>
           <div className="coupon__body">
             { attributes.body }
           </div>
           <hr />
           <div className="lower__body">
           { attributes.lowerBody }
           </div>
         </div>
         <div class="coupon__image__wrapper">
          { couponImage(attributes.imageUrl, attributes.imageAlt) }
         </div>
       </div>
     );
   }
 });
