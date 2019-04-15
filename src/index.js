import startTimer from './js/cd'
import './js/files.js'

import './style/style.sass';
import lottie from 'lottie-web';
import loc from './data/local.js';
import $ from './js/jquery.min';

startTimer("30 Apr 2019 12:00", "timer-container");


  document.addEventListener('DOMContentLoaded', function(){ 
    var animationContainer = document.getElementsByClassName('shtora')[0];
    // var userLang = navigator.language || navigator.userLanguage;
    //     userLang = userLang.split("-")[0];
    setLang();

    if (window.innerWidth >= 960){
      lottie.loadAnimation({
        container: animationContainer, // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: './dist/data/data.json', // the path to the animation json
        rendererSettings: { // the canvas context
            scaleMode: 'noScale',
            clearCanvas: false,
            progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
            hideOnTransparent: true //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
          }
      });
    }

    setInterval(function() {
      animationContainer.remove()
    }, 2200);

    function setLang(){
      $("#css-local").attr("href", "./dist/local-ar.css");
     
        document.getElementById('title_start').innerHTML = `${loc['title_start']}
          <span class='brown'>${loc['name']}</span> 
            ${loc['title_end']}`;
        
        document.getElementById('show').innerText = loc['show'];
        document.getElementById('will_1').innerText = loc['will_1'];
        document.getElementById('will_2').innerText = loc['will_2'];

        $('#min .text-val').text(loc['minutes']);
        $('#days .text-val').text(loc['days']);
        $('#hours .text-val').text(loc['hours']);

        $('#hello').text(loc['griteen']);
        $('#text').html(`${loc['text']['begin']} 
          <b class="brown">${loc['name']}</b>
            ${loc['text']['main']} <b>Condor international agency</b><br />
            <a href="https://www.condorig.com/" class="brown"> https://www.condorig.com </a>
              ${loc['text']['end']} <b>royal family of Kuwait.</b>`)
    }

  });