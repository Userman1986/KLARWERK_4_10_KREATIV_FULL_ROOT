(function(){
  // Demo hours: Di–Sa 17:30–22:30, So Brunch 11–15, Mo geschlossen
  var hours = {0:null,1:null,2:[17.5,22.5],3:[17.5,22.5],4:[17.5,22.5],5:[17.5,22.5],6:[17.5,22.5]};
  // Sunday brunch
  hours[0] = [11,15];
  function fmt(h){
    var hr = Math.floor(h), m = Math.round((h-hr)*60);
    return hr + ':' + (m<10?'0':'') + m;
  }
  function tick(){
    var el = document.getElementById('open-status');
    if(!el) return;
    var now = new Date();
    var d = now.getDay();
    var t = now.getHours() + now.getMinutes()/60;
    var range = hours[d];
    if(!range){
      el.innerHTML = '<strong>Heute geschlossen</strong> · Di–Sa ab 17:30 · So Brunch';
      return;
    }
    if(t >= range[0] && t < range[1]){
      el.innerHTML = '<strong>Heute geöffnet bis ' + fmt(range[1]) + '</strong>';
    } else if(t < range[0]){
      el.innerHTML = '<strong>Öffnet heute um ' + fmt(range[0]) + '</strong>';
    } else {
      el.innerHTML = '<strong>Heute geschlossen</strong> · siehe Öffnungszeiten';
    }
  }
  document.addEventListener('DOMContentLoaded', tick);
})();
