function mouseDragged() {
    if (!running)
        mouseDraggedFunction();
}

function mousePressed() {
    if (!running)
        mousePressedFunction();
}

function startNodeDrag(x, y) {
    arr[x][y].startNode = true;
    arr[x][y].state = false;
    arr[x][y].showStartNode();
    start = arr[x][y];
    if (prev != null) {
        prev.fill = "white";
        prev.startNode = false;
        prev.fillNode();
        prev.state = true;
        prev = arr[x][y];
    } else {
        prev = arr[x][y];
    }
}

function endNodeDrag(x, y) {
    arr[x][y].endNode = true;
    arr[x][y].state = false;
    arr[x][y].showEndNode();
    if (prev != null) {
        prev.fill = "white";
        prev.endNode = false;
        prev.fillNode();
        prev.state = true;
        prev = arr[x][y];
    } else {
        prev = arr[x][y];
    }
}

function mouseReleased() {
    prev = null;
}


function mouseDraggedFunction() {
    var x_this_frame = Math.floor(mouseX / BOARD_WIDTH * (BOARD_WIDTH / GRID_SIZE));
    var y_this_frame = Math.floor(mouseY / BOARD_HEIGHT * (BOARD_HEIGHT / GRID_SIZE));

    //DRAWING WALL AND CLEARING WALL 
    if (x_this_frame >= 0 && x_this_frame < BOARD_WIDTH && y_this_frame >= 0 && y_this_frame < BOARD_HEIGHT && mouseButton == LEFT) //checking if within boundary
    {
        if (x_this_frame != x_last_frame || y_this_frame != y_last_frame) //if (x,y) not at same grid as last frame do things
        {
            if (prev != null && prev.startNode || arr[x_this_frame][y_this_frame].startNode === true) {
                startNodeDrag(x_this_frame, y_this_frame);
            } else if (prev != null && prev.endNode || arr[x_this_frame][y_this_frame].endNode === true) {
                endNodeDrag(x_this_frame, y_this_frame);
            } else if (arr[x_this_frame][y_this_frame].state) {
                arr[x_this_frame][y_this_frame].state = !arr[x_this_frame][y_this_frame].state;
                arr[x_this_frame][y_this_frame].fill = "#34495e";
                arr[x_this_frame][y_this_frame].fillNode();
            } else {
                arr[x_this_frame][y_this_frame].state = !arr[x_this_frame][y_this_frame].state;
                arr[x_this_frame][y_this_frame].fill = "white";
                arr[x_this_frame][y_this_frame].clearWall();
            }
            // s
        }
    }
    x_last_frame = x_this_frame;
    y_last_frame = y_this_frame;
}

function mousePressedFunction() {
    var x_this_frame = Math.floor(mouseX / BOARD_WIDTH * (BOARD_WIDTH / GRID_SIZE));
    var y_this_frame = Math.floor(mouseY / BOARD_HEIGHT * (BOARD_HEIGHT / GRID_SIZE));

    //DRAWING WALL AND CLEARING WALL 
    if (x_this_frame >= 0 && x_this_frame < BOARD_WIDTH && y_this_frame >= 0 && y_this_frame < BOARD_HEIGHT && mouseButton == LEFT) //checking if within boundary
    {
        if (!arr[x_this_frame][y_this_frame].startNode && !arr[x_this_frame][y_this_frame].endNode) {
            if (arr[x_this_frame][y_this_frame].state) {
                arr[x_this_frame][y_this_frame].state = !arr[x_this_frame][y_this_frame].state;
                arr[x_this_frame][y_this_frame].fill = "#34495e";
                arr[x_this_frame][y_this_frame].fillNode();
            } else {
                arr[x_this_frame][y_this_frame].state = !arr[x_this_frame][y_this_frame].state;
                arr[x_this_frame][y_this_frame].fill = "white";
                arr[x_this_frame][y_this_frame].clearWall();
            }
        }
    }
}