var rect = document.getElementById('price-filter-rect');
var priceRange = document.getElementById('price-filter-range');
var startPrice = document.getElementById('price-filter-start-btn');
var endPrice = document.getElementById('price-filter-end-btn');
var limitedWidth = startPrice.getBoundingClientRect().width + endPrice.getBoundingClientRect().width;

endPrice.addEventListener('pointerdown', e => {
   endPrice.setPointerCapture(e.pointerId)

   let xStart = e.pageX;
   setEndPriceRangePosition(e)
   endPrice.addEventListener('pointermove', setEndPriceRangePosition)

   document.addEventListener('pointerup', () => {

      endPrice.removeEventListener('pointermove', setEndPriceRangePosition)
   })
})

function setEndPriceRangePosition(e) {
   let xEnd = e.clientX;

   let endBtnPosition = e.clientX + endPrice.getBoundingClientRect().width;
   let startBtnPosition = startPrice.getBoundingClientRect().x;
   if (xEnd > 0) {
      
      if (endBtnPosition < startBtnPosition) {
         priceRange.style.left = `${xEnd}px`;
         setEndPrice()
      }

   } else {
      priceRange.style.left = `0`;
   }
}

startPrice.addEventListener('pointerdown', e => {
   startPrice.setPointerCapture(e.pointerId)
   setStartPriceRangePosition(e)

   startPrice.addEventListener('pointermove', setStartPriceRangePosition)

   document.addEventListener('pointerup', () => {

      startPrice.removeEventListener('pointermove', setStartPriceRangePosition)
   })
})

function setStartPriceRangePosition(e) {
   let xEnd = e.clientX;
   let movement = rect.getBoundingClientRect().width - xEnd;
  
   let endBtnPosition = endPrice.getBoundingClientRect().x + endPrice.getBoundingClientRect().width;
   let startBtnPosition = xEnd - startPrice.getBoundingClientRect().width;


   if (movement > 0) {
    
      if (endBtnPosition < startBtnPosition) {
           priceRange.style.right = `${movement}px`;
           setStartPrice()
      }
    

   } else {
      priceRange.style.right = `0`;
   }


}

function setStartPrice() {
   let x = 1 - priceRange.getBoundingClientRect().right / rect.getBoundingClientRect().width
   let startPrice = $("input[name=end-price]").attr('max') * x;
   $("input[name=start-price]").val(startPrice.toFixed(0))  
}

function setEndPrice() {
   let x = 1 - priceRange.getBoundingClientRect().left / rect.getBoundingClientRect().width
   let endPrice = $("input[name=end-price]").attr('max') * x;
   $("input[name=end-price]").val(endPrice.toFixed(0))
}