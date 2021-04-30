function Rect(i, j) {
    this.fill = 'white'
    this.i = i;
    this.j = j;
    this.explored;
    this.top;
    this.bottom;
    this.left;
    this.right;
    this.previous;
    this.state = true;
    this.startNode;
    this.endNode;

    this.fillNode = async function() {
        fill(this.fill);
        stroke("#34495e");

        rectMode(CENTER);
        circle((i + this.i + GRID_SIZE) / 2, (j + this.j + GRID_SIZE) / 2, 10);
        // await new Promise(resolve => setTimeout(resolve, 1));
        rectMode(CORNERS)
        rect(this.i, this.j, this.i + GRID_SIZE, this.j + GRID_SIZE);
    }

    this.clearWall = function() {
        fill(this.fill);
        stroke("#34495e");
        rectMode(CORNERS)
        rect(this.i, this.j, this.i + GRID_SIZE, this.j + GRID_SIZE);
    }

    this.clearExplored = function() {
        fill(this.fill);
        stroke("#34495e");
        rectMode(CORNERS)
        rect(this.i, this.j, this.i + GRID_SIZE, this.j + GRID_SIZE);
    }

    this.connectNodes = function(i, j) {
        if (i === 0) {
            this.bottom = arr[i + 1][j];
            this.top = null;
        } else if (i === BOARD_HEIGHT - 1) {
            this.top = arr[i - 1][j];
            this.bottom = null;
        } else {
            this.top = arr[i - 1][j];
            this.bottom = arr[i + 1][j];
        }

        if (j === 0) {
            this.left = null;
            this.right = arr[i][j + 1];
        } else if (j === BOARD_WIDTH - 1) {
            this.left = arr[i][j - 1];
            this.right = null;
        } else {
            this.left = arr[i][j - 1];
            this.right = arr[i][j + 1];
        }
    }

    this.show = function() {
        fill(this.fill);
        stroke("black");
        strokeWeight(0.4);
        rect(this.i, this.j, this.i + GRID_SIZE, this.j + GRID_SIZE);
    }

    this.showStartNode = async function() {
        fill("#34495e")
        stroke("#34495e")
        rectMode(CORNERS);
        rect(this.i, this.j, this.i + GRID_SIZE, this.j + GRID_SIZE);
        rectMode(CENTER);
        fill("BLUE");
        circle((i + this.i + GRID_SIZE) / 2, (j + this.j + GRID_SIZE) / 2, 10);
        await new Promise(resolve => setTimeout(resolve, 50));
    }

    this.showEndNode = function() {
        fill("red");
        stroke("#34495e");
        rectMode(CORNERS);
        rect(this.i, this.j, this.i + GRID_SIZE, this.j + GRID_SIZE);
    }

    this.fillExploringNodes = async function() {
        fill("#33FF99")
        stroke("#34495e")
        rectMode(CENTER);
        circle((i + this.i + GRID_SIZE) / 2, (j + this.j + GRID_SIZE) / 2, 10);
        await new Promise(resolve => setTimeout(resolve, 50));
        fill("#00BEDA");
        stroke("#34495e");
        rectMode(CORNERS);
        rect(this.i, this.j, this.i + GRID_SIZE, this.j + GRID_SIZE);
        await new Promise(resolve => setTimeout(resolve, 0.001));
        fill("#00D99F")
        stroke("#34495e")
        rectMode(CORNERS);
        rect(this.i, this.j, this.i + GRID_SIZE, this.j + GRID_SIZE);
        await new Promise(resolve => setTimeout(resolve, 50));
        fill("#00BEDA");
        stroke("#34495e");
        rectMode(CORNERS);
        rect(this.i, this.j, this.i + GRID_SIZE, this.j + GRID_SIZE);
    }


}