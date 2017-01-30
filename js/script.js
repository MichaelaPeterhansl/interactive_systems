function change_counter(val) {
    
    var encounter = document.getElementById('encounter').value;
    var new_counter = parseInt(encounter, 10) + val;
    
    if (new_counter < 0) {
        new_counter = 0;
    }
    
    document.getElementById('encounter').value = new_counter;
    return new_counter;
}

function reset_counter(){
    var r = window.confirm("Are you sure you want to reset the counter?");
    if (r == true){
       var encounter = document.getElementById('encounter').value = 0;
        var new_counter = 0;
        document.getElementById('encounter').value = new_counter;
        return new_counter; 
        
    }
    else {
        return;
    }
    
}

function showGens(evt, gen) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(gen).style.display = "block";
    evt.currentTarget.className += " active";
}



function showMethods(evet, method) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(method).style.display = "block";
    evet.currentTarget.className += " active";
}