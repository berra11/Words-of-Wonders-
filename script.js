
$(function(){


    var wordcomb = ["dear", "eldar" , "lea", "read", "red"];
    var wordarr;
    var userarr = [];

    var isPress;
    var flagshuffle = true;
    var shufflearray = [true,true,true,true,true];  

    $(".gameContainer").contextmenu(function(e){
       e.preventDefault()
        $("#shuffle").on("click",enableShuffle());
    })

    $(".lightBulb > .material-symbols-outlined").click(function(){
        //alert("ok");
        $(".unselected").fadeIn(3000).css("color", "black")
        .delay(2000).fadeOut(1000, function(){
            $(".unselected").fadeIn(100).css("color", "rgb(144, 88, 4)" );
        })
    });

    function enableShuffle(){
        $("#shift > #shuffle").click(function(){
            var arrletter = ["R", "E", "D", "L", "A"];
            for(let i = 1;i<6;i++){
                var random = Math.floor(Math.random()*arrletter.length);
                $(`.letter${i}`).text(`${arrletter[random]}`)
                arrletter.splice(random,1);
            }
        });
    }


     
    function disableShuffle(){ 
      //  $("#shuffle").css("pointer-events", "none");
        $("#shuffle").off("click");
    }



    $(".gameContainer").mousedown(function(e){
        //alert("ok");

        var wordcomb = ["dear", "eldar" , "lea", "read", "red"];
        var wordarr;
        var isPress;
        var flagshuffle = true;
       
      // enableShuffle();
 
         if(e.which === 3){ 
           // alert("no");
           wordarr = userarr.join("").toLowerCase();
             // console.log(wordcomb); // yazdırmıyo 
             var index = wordcomb.indexOf(wordarr);
             if(index == -1){
                 //alert("ok");
                 $("#panel").animate({backgroundColor: "white"},200)
                 .animate({backgroundColor: "red"},100)
                 .animate({backgroundColor: "white"},200)
                 .animate({backgroundColor: "red"},100);
                             

                 // 
                 $("#panel") .fadeOut(300, function(){
                                 $("#panel").text("").fadeIn(250);
                             })           
             }
             else
            {
                // alert("ok");
             
                 if(shufflearray[index]){
                     $("#panel").animate({backgroundColor: "green"},200)
                                 .animate({backgroundColor: "white"},100);
                     $(`.ld${index} span`).removeClass("unselected");
                     $(`.ld${index}`).animate({backgroundColor: "white"});
                    shufflearray[index] = false;
                 }else{
                     $(`.ld${index} span`).animate({color: "red"},200)
                                             .animate({color: "white"}, 100)
                                             .animate({color: "red"},200)
                                             .animate({color: "white"},100)
                                             .animate({color: "red"},200)
                                             .animate({color: "rgb(144, 88, 4)"},80);


                    $(`.ld${index} span`)
                 }
                 
             }
             
            
            
             $("#panel").fadeOut(200, function(){
                 $("#panel").text("").fadeIn(100).css("backgroundColor","rgb(126, 40, 40)");
             }) 
             for(let i = 1;i<6;i++){
                $(`.letter${i}`).css("background","none");
            }

             userarr = [];
         }
     })

     

     $("#shift > #shuffle").click(function(){
        // alert("yes");
         if(disableShuffle()){
             $("#shuffle").animate({right : "-=10px"},100)
             animate({right : "-=10px"},100)// 
         }
         enableShuffle();
      
     
     });


    

    for(let i = 1;i<6;i++){
        
        $(`.letter${i}`).click(function(){
            isPress = userarr.includes($(this).text());
        
            disableShuffle();

            if(!isPress){
                userarr.push($(this).text());
                $("#panel").append($(this).text());
                $(this).animate({backgroundColor: "orange"});
            }else{
                $(this).animate({right: "-=10px" , backgroundColor: "red"}, 80)
                .animate({right: "+=10px", backgroundColor: "red"}, 100)
                .animate({right: "-=10px", backgroundColor: "red"}, 80)
                .animate({right: "+=10px", backgroundColor: "red"}, 100);
            } 
        })
    }


})








//   const mouseOver = (e) => {
//     if (isPress) {
//       if (!listId.includes(e.target.id)) {
//         list.push(e.target.innerHTML);
//         listId.push(e.target.id);
//         e.target.style.background = "red";
//       }
//     }
//   };
