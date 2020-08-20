[
    {
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
        },
        background_color: { 
            type: 'string', 
            default: 'red', // Default value for newly added block
        },           
        // To storage the complete style of the div that will be 'merged' with the selected colours
        block_style: { 
            selector: 'div', // From tag a
            source: 'attribute', // binds an attribute of the tag
            attribute: 'style', // binds style of a: the dynamic colours
        }
      },
]