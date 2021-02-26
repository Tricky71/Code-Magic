var CLOUD_X = 110;
var CLOUD_Y = 10;
var GAP = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_HEIGHT = 20;
var TEXT_WIDTH = 50;
var TEXT_HEIGHT = 16;
var TEXT_GAP = 14;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
 
var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
 
var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var j = 1; j < arr.length; j++) {
        if (arr[j] > maxElement) {
            maxElement = arr[j];
        }
    }
    return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
    renderCloud (ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
    renderCloud (ctx, CLOUD_X, CLOUD_Y, '#fff');
    
    ctx.fillStyle = "#000";
    ctx.font = 'TEXT_HEIGHT PT Mono';
    ctx.fillText ('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + (GAP * 7));
    ctx.fillStyle = "#000";
    ctx.font = 'TEXT_HEIGHT PT Mono';
    ctx.fillText ('Список результатов', CLOUD_X + GAP, CLOUD_Y + (GAP * 7) + TEXT_GAP); 
    
    var maxTime = getMaxElement(times);
    
    for (var i = 0; i < players.length; i++) {
        ctx.fillText (players[i], CLOUD_X + GAP, CLOUD_Y + (GAP * 7) + TEXT_HEIGHT + TEXT_GAP + TEXT_HEIGHT + (GAP * 3)
        + ((TEXT_HEIGHT + TEXT_GAP) * i));
        ctx.fillRect (CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + (GAP * 7) + TEXT_HEIGHT + TEXT_HEIGHT + (GAP * 3) + ((BAR_HEIGHT + GAP) * i),
        barWidth * times[i] / maxTime, BAR_HEIGHT);
    };

    
    
    

  

    
}; 