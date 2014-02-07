function mouseCanvasPosition(e) {
        var rect = canvas.getBoundingClientRect();
        return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
        };
}

function pixelIndexAtPoint(point) {
                var pixelIndex = -1;
        var x = Math.floor(point.x/PIXEL_SIZE);
        var y = Math.floor(point.y/PIXEL_SIZE);
        if(x < GRID_WIDTH && y < GRID_HEIGHT) {
                pixelIndex = y * GRID_WIDTH + x;
        }
        return pixelIndex;
}

function togglePixelAtPoint(point) {
        var x = Math.floor(point.x/PIXEL_SIZE);
        var y = Math.floor(point.y/PIXEL_SIZE);
        if(x < GRID_WIDTH && y < GRID_HEIGHT) {
                pixels[x][y] = !pixels[x][y];      				
        }
}

function setPixelValueAtPoint(point, value) {
        var x = Math.floor(point.x/PIXEL_SIZE);
        var y = Math.floor(point.y/PIXEL_SIZE);
        if(x < GRID_WIDTH && y < GRID_HEIGHT) {
                pixels[x][y] = value;      				
        }
}

function resetCanvas() {
        resetPixels();
        drawPixels();
}

function resetPixels() {      				
        for(var x = 0; x < GRID_WIDTH; x++) {
                pixels[x] = [];
        for(var y = 0; y < GRID_HEIGHT; y++) {						
                                pixels[x][y] = false;
                        }
                }
}

function drawPixels() {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");

        for(var y = 0; y < GRID_HEIGHT; y++) {
                for(var x = 0; x < GRID_WIDTH; x++) {
                        context.beginPath();
                        context.rect(x*PIXEL_SIZE, y*PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
                        context.fillStyle = pixels[x][y] ? '#2D2' : '#555';
                        context.fill();
                        context.lineWidth = 1;
                        context.strokeStyle = '#000';
                        context.stroke();						
                }
        }
}