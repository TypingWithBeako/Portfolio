import PhotoSwipe from 'https://cdn.jsdelivr.net/npm/photoswipe@5.3.7/dist/photoswipe.esm.js';
    
    // Set up the on-site viewer for your Re:Zero screenshot
    document.getElementById('rezero-screenshot').addEventListener('click', function() {
      
      // Open the on-site viewer with your 4K image
      const pswp = new PhotoSwipe({
        dataSource: [
        {
          src: 'assets/imgs/Re_Zero_Screenshot.webp',
          width: 3840,  
          height: 2160,
          alt: 'Re:Zero Media Player'
        },
        {
          src: 'assets/imgs/Main-page 2.webp',
          width: 1920,  
          height: 1080, 
          alt: 'Version 2'
          },
        {
          src: 'assets/imgs/Theater mode.webp',
          width: 1920,  
          height: 1080, 
          alt: 'Theater Mode'
          },
        
      ],
        appendToEl: document.getElementById('pswp-container'),
        showHideAnimationType: 'zoom',
      });
      pswp.init();
    });