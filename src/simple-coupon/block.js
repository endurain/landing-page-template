/**
 * BLOCK: Coupon
 */

 const { RichText, PlainText } = wp.editor;
 const { registerBlockType } = wp.blocks;

 // Import our CSS files
 import './style.scss';
 import './editor.scss';

 registerBlockType('coupon-simple/main', {
   title: 'Simple Coupon',
   icon: 'tickets',
   category: 'common',
   attributes: {
     discount: {
       source: 'text',
       selector: 'simple__coupon__discount'
     },
     upperBody: {
       source: 'text',
       selector: 'simple__coupon__upper__body'
     },
     lowerBody: {
       source: 'text',
       selector: 'simple__lower__coupon__body'
     },
      disclaimer: {
       source: 'text',
       selector: 'simple__coupon__disclaimer'
     },
   },
   edit({ attributes, className, setAttributes }) {

     return (
       <div className="container">
        <div className="simpleCouponEditorWrapper">
          <div className="simpleCouponContentContainer">
             <PlainText
               onChange={ content => setAttributes({ discount: content }) }
               value={ attributes.discount }
               placeholder="Coupon Discount"
               className="simple__coupon__discount"
             />
              <hr />
             <PlainText
               onChange={ content => setAttributes({ upperBody: content }) }
               value={ attributes.upperBody }
               placeholder="Upper coupon text"
               className="simple__coupon__upper__body"
             />
             <PlainText
               onChange={ content => setAttributes({ lowerBody: content }) }
               value={ attributes.lowerBody }
               placeholder="Lower coupon text"
               className="simple__coupon__lower__body"
             />
             <PlainText
               onChange={ content => setAttributes({ disclaimer: content }) }
               value={ attributes.disclaimer }
               placeholder="Disclaimer text"
               className="simple__coupon__disclaimer"
             />
           </div>
         </div>
       </div>
     );

   },

   save({ attributes }) {

     return (
       <div className="simple__coupon__wrapper">
        <div className="simple__coupon__dashed">
           <div className="simple__coupon__content">
             <h3 className="simple__coupon__discount">
              { attributes.discount }
             </h3>
             <hr />
             <div className="simple__coupon__upper__body">
               { attributes.upperBody }
             </div>
             <div className="simple__coupon__lower__body">
             { attributes.lowerBody }
             </div>
           </div>
           <div class="simple__coupon__bottom">
            <img
              src="/wp-content/uploads/2019/12/neerings_logo_header-01-1.png"
              alt="Neerings Logo"
            />
            <div className="simple__coupon__disclaimer">
              { attributes.disclaimer }
            </div>
           </div>
         </div>
       </div>
     );
   }
 });
