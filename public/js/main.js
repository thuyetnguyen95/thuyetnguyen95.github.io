function myFunction(id){var x=document.getElementById(id); if (x.className.indexOf("w3-show")==-1){x.className +=" w3-show"; x.previousElementSibling.className +=" w3-theme-d1";}else{x.className=x.className.replace("w3-show", ""); x.previousElementSibling.className=x.previousElementSibling.className.replace(" w3-theme-d1", "");}}function openNav(){var x=document.getElementById("navDemo"); if (x.className.indexOf("w3-show")==-1){x.className +=" w3-show";}else{x.className=x.className.replace(" w3-show", "");}}function justKidding(isShow){var cmtAnimation=bodymovin.loadAnimation({container: document.getElementById("commentJoke"), renderer: "svg", loop: true, autoplay: true, path: "./public/animation/smoothymon_love_attack.json"});cmtAnimation.play();var display='block';if (!isShow){display='none';cmtAnimation.destroy();}document.getElementById('justKidding').style.display=display;}function showLikeAnimation(){var e=bodymovin.loadAnimation({container: document.getElementById("lottie"), renderer: "svg", loop: true, autoplay: true, path: "./public/animation/paw_like.json"}); document.getElementById("like-animation").style.display="block", e.play(), setTimeout(function(){document.getElementById("like-animation").style.display="none", e.stop(), e.destroy()}, 1000)}function showDinoDance(){var e=bodymovin.loadAnimation({container: document.getElementById("dinoDace"), renderer: "svg", loop: true, autoplay: true, path: "./public/animation/dino_dance.json"}); setInterval(function(){document.getElementById('dinoDaceMore').style.display='block'; var e=bodymovin.loadAnimation({container: document.getElementById("dinoDaceMore"), renderer: "svg", loop: true, autoplay: true, path: "./public/animation/dino_dance.json"});}, 8000); document.getElementById('addDinoDance').remove();}