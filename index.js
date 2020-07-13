$(function(){ 
  
var $mainMenuItems = $("#main-menu ul").children("li"),
    numberMainItems = $mainMenuItems.length,
    openedIndex = 1,
    init = function () 
    {
      
       bindEvent();
      
      if(validIndex(openedIndex))         
        animeItem ($mainMenuItems.eq(openedIndex), true, 300);
       
  
    },
  
  
  bindEvent = function()
  
{
    $mainMenuItems.children(".img").click(function()
        {
            var newIndex = $(this).parent().index(),
            $item = $mainMenuItems.eq(newIndex);
           
          foranimatef(newIndex);
        
        });
  
    $(".btn").hover(
    
    function(){
      $(this).addClass("hover");
    },
    
    function(){
      $(this).removeClass("hover");
    }
    );
  
  $(".btn").click(function(){
    
    var newIndex = $(this).index();
    foranimatef(newIndex);
  
  });
  
},
  
  validIndex = function(indextocheck)
  {
    return(indextocheck >= 0) && (indextocheck < numberMainItems);
  },
  
  animeItem = function($items, toOpen, speed)
  {
   var  $colorImage = $items.find(".color"),
    itemparam = toOpen ? {width: "856px"}:{width: "428px"} ,
   
      colorImageP = toOpen ? {left: "0px"}:{left: "428px"};
    
     $colorImage.animate(colorImageP,speed);
          $items.animate(itemparam,speed);
         
    
  },
    
    foranimatef = function(foranime)
 {
      if(openedIndex === foranime)
             {
             animeItem($mainMenuItems.eq(foranime), false, 250);
              openedIndex = -1;
             }
          else
            {
              if(validIndex(foranime))
                {
                  animeItem($mainMenuItems.eq(openedIndex), false, 250);
                  animeItem($mainMenuItems.eq(foranime), true, 250);
                  openedIndex = foranime;
                }
     }
 };
  
    init();
}); 
  
