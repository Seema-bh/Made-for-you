var customJS = function() {
//   console.log('CPB is here');
  jQuery('#react-tabs-2').text('Récapitulatif');

  var twoToneflag = false;
  var steelFlag = false;
  var ringSizeFlag = 1;
  var shankSizeFlag = 1;
//   var ringClass = ;
  //  head size counter 
  $(document).on('click','.cpb-category-IquTqoav_hLp1CRrC-zwHIlC .cpb-category-options-container span div',function(){
    setTimeout(function(){
      ringSizeFlag = $(".cpb-category-IquTqoav_hLp1CRrC-zwHIlC .cpb-category-options-container .cpb-option-type-img.cpb-active").index()+1;
//       console.log(ringSizeFlag);
    },100);  
  })
  
  $(document).on('click','.cpb-category-CfLtcTEVzUTh1HTx2oB7MFs8 .cpb-category-options-container span div',function(){
    setTimeout(function(){
      shankSizeFlag = $(".cpb-category-CfLtcTEVzUTh1HTx2oB7MFs8 .cpb-category-options-container .cpb-option-type-img.cpb-active").index()+1;
//       console.log(shankSizeFlag);
    },100);  
  })

  // Update head size   
  $(document).on('DOMSubtreeModified', '.cpb-category-IquTqoav_hLp1CRrC-zwHIlC .cpb-category-options-container .cpb-option-type-img div', function(e){
//     console.log(1234,$('.cpb-category-IquTqoav_hLp1CRrC-zwHIlC.cpb-category-img.sc-tilXH.ilkowV .cpb-category-options-container span:first div'));
    setTimeout(function(){
      $('.cpb-category-IquTqoav_hLp1CRrC-zwHIlC .cpb-category-options-container .cpb-option-type-img:nth-child('+ringSizeFlag+') div img').click();
    },100)  
  });

  // Update diamond shake type 
  $(document).on('DOMSubtreeModified', '.cpb-category-CfLtcTEVzUTh1HTx2oB7MFs8 .cpb-category-options-container .cpb-option-type-img div', function(e){
    setTimeout(function(){  
      $('.cpb-category-CfLtcTEVzUTh1HTx2oB7MFs8 .cpb-category-options-container .cpb-option-type-img:nth-child('+shankSizeFlag+') div img').click();
    },100)
  });
}

/** 
   * Function wait CPB DOM elements to show up.
   * Work in modern browsers.
   * And execute callback.
   */
var cpbLoaded = function() {
  if (jQuery('#product-builder').length > 0) {

    console.log('CPB is loaded');

    customJS();
  } else {
    window.requestAnimationFrame(cpbLoaded);
  }   
};

cpbLoaded();