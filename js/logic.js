var video = videojs('videoPlayer')
    var player = undefined
    
    video.ready(function(){
      player = this;

      player.src({
        type: 'video/mp4',
        src: decisionTree.video
      })

      player.on('ended', function() {
        if(decisionTree.choices !== undefined){
          document.querySelector("#wrapper #overlay .content .selection").innerHTML = ''
          document.querySelector("#wrapper #overlay .content .title").innerHTML = decisionTree.question
            decisionTree.choices.forEach(choice => {
              var btn = document.createElement("button");
              btn.innerHTML = choice.name;
              btn.onclick = function(){
                decisionTree = choice
                playVideoSource(player, choice.video);
              }
              document.querySelector("#wrapper #overlay .content .selection").appendChild(btn);
            });
          showOverlay()
        }
      });
    });