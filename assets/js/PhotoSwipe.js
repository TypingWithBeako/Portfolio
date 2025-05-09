import PhotoSwipe from 'https://cdn.jsdelivr.net/npm/photoswipe@5.3.7/dist/photoswipe.esm.js';
    
    // Set up the on-site viewer for your Re:Zero screenshot
    document.getElementById('rezero-screenshot').addEventListener('click', function() {
      
      // Open the on-site viewer with your 4K image
      const pswp = new PhotoSwipe({
        dataSource: [{
          src: 'assets/imgs/Re_Zero_Screenshot.webp',
          width: 3840,  // Width of your 4K image
          height: 2160, // Height of your 4K image
          alt: 'Re:Zero Media Player'
        }],
        appendToEl: document.getElementById('pswp-container'),
        showHideAnimationType: 'zoom',
      });
      pswp.init();
    });