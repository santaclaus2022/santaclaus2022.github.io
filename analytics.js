isPrintPreview = false;
function beforePrint() {
    if (isPrintPreview)
    {
      return;
    }
    isPrintPreview = true;
    div = document.getElementById('mm1');
    div.innerHTML = "<div style=\"color:#FF00FF;font-size: 1.0rem;\">15</div>";
    div = document.getElementById('mm2');
    div.innerHTML = "<div style=\"color:#FF00FF;font-size: 1.0rem;\">24</div>";
    div = document.getElementById('mm3');
    div.innerHTML = "<div style=\"color:#FF00FF;font-size: 1.0rem;\">4</div>";
    div = document.getElementById('mm4');
    div.innerHTML = "<div style=\"color:#FF00FF;font-size: 1.0rem;\">5</div>";

    div = document.getElementById('tt1');
    div.innerHTML = "<div style=\"color:#FF00FF\">9</div>"
    div = document.getElementById('tt2');
    div.innerHTML = "<div style=\"color:#FF00FF\">21</div>"
    div = document.getElementById('tt3');
    div.innerHTML = "<div style=\"color:#FF00FF\">23</div>"
    div = document.getElementById('tt4');
    div.innerHTML = "<div style=\"color:#FF00FF\">11</div>"

    div = document.getElementById('xword');
    div.innerHTML = "<img src = \"ffao xwrd 2.png\" />"

    div = document.getElementById('crypticimage');
    div.innerHTML = "<img src = \"ffao cryptic 2.png\" />"

    div = document.getElementById('petalpicture');
    div.innerHTML = "<img src = \"petals2.png\" />"

    div = document.getElementById('hh2');
    div.innerHTML = "<div style=\"color:#FF00FF\">8</div>"
    div = document.getElementById('hhear1');
    div.innerHTML = "<div style=\"color:#FF00FF\">1</div>"
    div = document.getElementById('hhr');
    div.innerHTML = "<div style=\"color:#FF00FF\">17</div>"
    div = document.getElementById('hhx');
    div.innerHTML = "<div style=\"color:#FF00FF\">10</div>"
}

function afterPrint() {
    if (!isPrintPreview)
    {
      return;
    }
    isPrintPreview = false;
/*
    div = document.getElementById('mm1');
    div.innerHTML = ""
    div = document.getElementById('mm2');
    div.innerHTML = ""
    div = document.getElementById('mm3');
    div.innerHTML = ""
    div = document.getElementById('mm4');
    div.innerHTML = ""
*/
    div = document.getElementById('tt1');
    div.innerHTML = ""
    div = document.getElementById('tt2');
    div.innerHTML = ""
    div = document.getElementById('tt3');
    div.innerHTML = ""
    div = document.getElementById('tt4');
    div.innerHTML = ""
    div = document.getElementById('xword');
    div.innerHTML = "<img src = \"ffao xwrd.png\" />"

    div = document.getElementById('crypticimage');
    div.innerHTML = "<img src = \"ffao cryptic.png\" />"

    div = document.getElementById('petalpicture');
    div.innerHTML = "<img src = \"petals.png\" />"

    div = document.getElementById('hh2');
    div.innerHTML = ""
    div = document.getElementById('hhear1');
    div.innerHTML = ""
    div = document.getElementById('hhr');
    div.innerHTML = ""
    div = document.getElementById('hhx');
    div.innerHTML = ""
}

if (window.matchMedia) {
    window.matchMedia('print').addListener(function (mql) {
        if (mql.matches) {
          // console.log("reg before");
            beforePrint();
        }
        else {
          // console.log("reg after")
            afterPrint();
        }
    });
}
window.addEventListener('beforeprint', beforePrint, false);
window.addEventListener('afterprint', afterPrint, false);
