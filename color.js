$(function(){
   var display = $('.display')
  
   var r = $('input').eq(0)
   var g = $('input').eq(1)
   var b = $('input').eq(2)
   var a = $('input').eq(3)

   function color(){
      let red = r.val()
      let green = g.val()
      let blue = b.val()
      let opaque = (a.val())/10
      let redHex =hexConverter(red) 
      let greenHex = hexConverter(green)
      let blueHex = hexConverter(blue) 
      let opaqueConv = ((a.val()/10)*255)
      let opaqueHex = hexConverter(opaqueConv)
      
      function hexConverter(value){
         if(value<16){
            return '0'+ value
            
         }else{
            return parseInt(value).toString(16)
         }

      }

      display.css({
         backgroundColor: `rgba(${red},${green},${blue}, ${opaque})`
      })
      $('#rgba-span').text( `rgba(${red},${green},${blue}, ${opaque})`)
      $('#hex-span').text( `#${redHex}${greenHex}${blueHex}${opaqueHex}`)

      $("#red").text(`${red}`)
      $("#green").text(`${green}`)
      $("#blue").text(`${blue}`)
      $("#opacity").text(`${opaque}`)
      
   }
   
   r.on('input',color) 
   g.on('input',color)
   b.on('input',color)
   a.on('input', color)
  
  })
  

  

 