function changePixelSize(){
    PIXEL_SIZE = $('#pixelSize').val();
    GRID_WIDTH = Math.floor(canvas.width/PIXEL_SIZE);	
    GRID_HEIGHT = Math.floor(canvas.height/PIXEL_SIZE);
    initGrille();
    resetCanvas();
}

function changeSeuil(){
    NEURONE_SEUIL = $('#seuil').val();
}

function changeHaloStatus(){
    if($('#halo').is(':checked'))
        HALO = true;
    else
        HALO = false;
}