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

function e2pNumbers(number) {
   let pNumber = priceFormatter(number);
   let persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰']
   let englishNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
   for (let i = 0; i < englishNumbers.length; i++) {
      let req = new RegExp(englishNumbers[i], "g");
      pNumber = pNumber.replace(req, persianNumbers[i])
   }
  
   return pNumber;
}

function priceFormatter(price) {
   return parseInt(price).toLocaleString('en-US');
}



function setStartPrice() {
   let ratio = 1 - priceRange.getBoundingClientRect().right / rect.getBoundingClientRect().width
   let price = $("input[name=end-price]").attr('max') * ratio.toFixed(2);
   $("input[name=start-price]").val(e2pNumbers(price.toFixed(0)))  
}

function setEndPrice() {
   let ratio = 1 - priceRange.getBoundingClientRect().left / rect.getBoundingClientRect().width
   let price = $("input[name=end-price]").attr('max') * ratio.toFixed(2);
   $("input[name=end-price]").val(e2pNumbers(price.toFixed(0)))
}