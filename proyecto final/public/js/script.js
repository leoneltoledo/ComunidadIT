window.onload = function() { 
    
    
    let unoL = document.getElementById('1L');
    let unoE = document.getElementById('1E');
    let unoV = document.getElementById('1V');
    
    unoL.onclick = function() {
        unoE.setAttribute('disabled');
        unoV.setAttribute('disabled');
    }
}