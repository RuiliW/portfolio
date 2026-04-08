$(document).ready(function(){
  const projects = $('.project-item');
  const lightbox = $('#lightbox-wrap');
  const lightboxImg = $('#lightbox-img');
  let currentIndex = 0;

  projects.click(function(){
    currentIndex = parseInt($(this).data('index'));
    openLightbox(currentIndex);
  });

  function openLightbox(index){
    const imgSrc = projects.eq(index).find('img').attr('src');
    lightboxImg.attr('src', imgSrc);
    lightbox.addClass('visible');
  }

  function closeLightbox(){
    lightbox.removeClass('visible');
  }

  function showNext(){
    currentIndex = (currentIndex + 1) % projects.length;
    openLightbox(currentIndex);
  }

  function showPrev(){
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    openLightbox(currentIndex);
  }

  $('.close').click(closeLightbox);
  $('.next').click(showNext);
  $('.prev').click(showPrev);

  $('#lightbox-blocking').click(closeLightbox);
  $(document).keydown(function(e){
    if(lightbox.hasClass('visible')){
      if(e.key === 'ArrowRight') showNext();
      if(e.key === 'ArrowLeft') showPrev();
      if(e.key === 'Escape') closeLightbox();
    }
  });
});