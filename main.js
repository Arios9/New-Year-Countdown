


    let new_year=new Date(2022,0).getTime();
    let time_now=new Date().getTime();
    let remaining_time_in_seconds=Math.floor((new_year-time_now)/(1000));

    setInterval("myFunction()",1000);


    function myFunction(){

    let temp=remaining_time_in_seconds--;

    let days=Math.floor(temp/(24*60*60));
    temp=temp%(24*60*60);
    let hours=Math.floor(temp/(60*60));
    temp=temp%(60*60);
    let minutes=Math.floor(temp/(60));
    temp=temp%(60);
    let seconds=temp;


    $("#d").text(('00' + days).slice(-3)); 
    $("#h").text(('0' + hours).slice(-2)); 
    $("#m").text(('0' + minutes).slice(-2)); 
    $("#s").text(('0' + seconds).slice(-2));  	

    }


