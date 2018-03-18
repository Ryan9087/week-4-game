
$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)

    $('#randomNumber').text(Random);

    var crystal1= Math.floor(Math.random()*11+1)
    var crystal2= Math.floor(Math.random()*11+1)
    var crystal3= Math.floor(Math.random()*11+1)
    var crystal4= Math.floor(Math.random()*11+1)

    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        crystal1= Math.floor(Math.random()*11+1);
        crystal2= Math.floor(Math.random()*11+1);
        crystal3= Math.floor(Math.random()*11+1);
        crystal4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 

  function bigWinner(){
  alert("You won you genius!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }

  function loser(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }

    $('#one').on ('click', function(){
      userTotal = userTotal + crystal1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == Random){
            bigWinner();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + crystal2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            bigWinner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + crystal3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);


            if (userTotal == Random){
            bigWinner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + crystal4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            bigWinner();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 