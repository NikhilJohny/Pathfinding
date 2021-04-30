let arr = [];
const BOARD_HEIGHT = 30;
const BOARD_WIDTH = 30;
const GRID_SIZE = 20;
var x_last_frame;
var y_last_frame;
var sleepRequested = false;
var sleepTime;
var running = false;
var start;
var prev;

function setup() {
    canvas = createCanvas(BOARD_HEIGHT * GRID_SIZE + 2, BOARD_WIDTH * GRID_SIZE + 2);

    for (let x = 0; x < BOARD_WIDTH * GRID_SIZE; x += GRID_SIZE) {
        let inArr = [];
        for (let y = 0; y < BOARD_HEIGHT * GRID_SIZE; y += GRID_SIZE) {
            var rect = new Rect(x, y);
            inArr.push(rect);
        }
        arr.push(inArr);
    }



    for (let x = 0; x < BOARD_WIDTH; x++) {
        for (let y = 0; y < BOARD_HEIGHT; y++) {
            arr[x][y].connectNodes(x, y);
            arr[x][y].show();
        }
    }
    arr[12][12].startNode = true;
    arr[12][12].state = false;
    arr[12][12].showStartNode();
    start = arr[12][12];
    arr[BOARD_WIDTH - 1][BOARD_HEIGHT - 1].endNode = true;
    arr[BOARD_WIDTH - 1][BOARD_HEIGHT - 1].state = false;
    arr[BOARD_WIDTH - 1][BOARD_HEIGHT - 1].showEndNode();
}

function run() {
    var result;
    if (!running) {
        var algo = document.getElementById('algorithm').value;
        console.log(algo);
        running = true;
        clearExplored();
        if (algo === "bfs")
            result = traverseBFS(start);
        else if (algo === "dfs")
            result = traverseDFS(start);
        console.log(result);
        console.log(result.result);
        while (result.prev != null) {
            result.fill = "yellow";
            result.fillNode();
            result = result.prev;
        }

    }
}

function clearAll() {
    if (!running) {
        for (let x = 0; x < BOARD_WIDTH; x++) {
            for (let y = 0; y < BOARD_HEIGHT; y++) {
                if (arr[x][y].explored || !arr[x][y].state) {
                    if (!arr[x][y].startNode && !arr[x][y].endNode) {
                        arr[x][y].explored = false;
                        arr[x][y].state = true;
                        arr[x][y].fill = "white";
                        if (arr[x][y].state)
                            arr[x][y].clearExplored();
                    }
                }
            }
        }
    }
}

function draw() {
    if (sleepRequested) {
        newSleep(sleepTime);
        sleepRequested = false;
        console.log("Testing to see if it went to sleep");
    }
}

function clearExplored() {
    for (let x = 0; x < BOARD_WIDTH; x++) {
        for (let y = 0; y < BOARD_HEIGHT; y++) {
            if (arr[x][y].explored) {
                arr[x][y].explored = false;
                arr[x][y].fill = "white";
                if (arr[x][y].state)
                    arr[x][y].clearExplored();

            }
        }
    }
}