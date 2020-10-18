function getOrientation(){
    return !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape'
  }

  function hideRotateSuggestion(){
    document.getElementById("portrait").classList.add("hidden")
    document.getElementById("portrait").classList.remove("visible")
  }

  function showRotateSuggestion(){
    document.getElementById("portrait").classList.add("visible")
    document.getElementById("portrait").classList.remove("hidden")
  }

  function hideContent(){
    document.getElementById("wrapper").classList.add("hidden")
    document.getElementById("wrapper").classList.remove("visible")
  }

  function showContent(){
    document.getElementById("wrapper").classList.add("visible")
    document.getElementById("wrapper").classList.remove("hidden")
  }

  function hideOverlay(){
    document.getElementById("overlay").classList.remove("visible")
    document.getElementById("overlay").classList.add("hidden")
  }

  function showOverlay(){
    document.getElementById("overlay").classList.remove("hidden")
    document.getElementById("overlay").classList.add("visible")
  }

  function orientationBehaviour(){
    if(getOrientation() === "portrait"){
        stopVideo(player)
        hideContent()
        showRotateSuggestion()
    }else{
        hideRotateSuggestion()
        showContent()
        playVideo(player)
    }
  }

  function playVideoSource(player, video, type = 'video/mp4'){
    hideOverlay()

    player.src({
      type: type,
      src: video
    })
    player.play()
  }

  function stopVideo(player){
      if(player !== undefined)
        player.pause()
  }

  function playVideo(player){
    if(player !== undefined && !player.ended())
      player.play()
}   