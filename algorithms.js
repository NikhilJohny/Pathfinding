//await sleep function
function sleep(ms) {
    console.log('hi');
    return new Promise(resolve => setInterval(resolve, ms));
}

// const delay = ms => new Promise(res => setTimeout(res, ms));
var path = null;





async function traverseDFS(rootArray) {
    let stack = [rootArray.left];
    let cacheStack = new Set();
    while (stack.length) {
        let curr = stack.pop();
        curr.explored = true;
        if (!curr.startNode && !curr.endNode)
            curr.fillExploringNodes();
        // await await sleep(20);
        // await await sleep();
        // console.log('h');

        if (curr.endNode) {
            break;
        }

        if (curr.top) {
            if (curr.top.state != false || curr.top.endNode)
                if (!cacheStack.has(curr.top)) {
                    cacheStack.add(curr.top)
                    stack.push(curr.top);
                    curr.top.previous = curr;
                }
        }
        if (curr.bottom) {
            if (curr.bottom.state != false || curr.bottom.endNode)
                if (!cacheStack.has(curr.bottom)) {
                    cacheStack.add(curr.bottom);
                    stack.push(curr.bottom);
                    curr.bottom.previous = curr;
                }
        }
        if (curr.left) {
            if (curr.left.state != false || curr.left.endNode)
                if (!cacheStack.has(curr.left)) {
                    cacheStack.add(curr.left);
                    stack.push(curr.left);
                    curr.left.previous = curr;
                }
        }
        if (curr.right) {
            if (curr.right.state != false || curr.right.endNode)
                if (!cacheStack.has(curr.right)) {
                    cacheStack.add(curr.right);
                    stack.push(curr.right);
                    curr.right.previous = curr;
                }
        }
    }
    running = false;
}

async function traverseBFS(rootArray) {
    var temp = null;
    let Queue = [rootArray];
    let cacheQueue = new Set();
    rootArray.previous = null;
    while (Queue.length) {
        let curr = Queue.shift();
        curr.explored = true;
        if (!curr.startNode && !curr.endNode)
            curr.fillExploringNodes();
        await new Promise(resolve => setTimeout(resolve, 0.0000));
        if (curr.endNode) {
            path = curr;
            break;
        }
        if (curr.top) {
            if (curr.top.state != false || curr.top.endNode)
                if (!cacheQueue.has(curr.top)) {
                    cacheQueue.add(curr.top)
                    Queue.push(curr.top);
                    curr.top.previous = curr;
                }
        }
        if (curr.bottom) {
            if (curr.bottom.state != false || curr.bottom.endNode)
                if (!cacheQueue.has(curr.bottom)) {
                    cacheQueue.add(curr.bottom);
                    Queue.push(curr.bottom);
                    curr.bottom.previous = curr;
                }
        }
        if (curr.left) {
            if (curr.left.state != false || curr.left.endNode)
                if (!cacheQueue.has(curr.left)) {
                    cacheQueue.add(curr.left);
                    curr.left.previous = curr;
                    Queue.push(curr.left);
                }
        }
        if (curr.right) {
            if (curr.right.state != false || curr.right.endNode)
                if (!cacheQueue.has(curr.right)) {
                    cacheQueue.add(curr.right);
                    Queue.push(curr.right);
                    curr.right.previous = curr;
                }

        }
    }
    var tempArray = [];
    while (path.previous != null) {
        if (!path.previous.startNode && !path.previous.endNode) {
            tempArray.unshift(path.previous);
        }
        path = path.previous;
    }
    newSleep(2000);
    while (tempArray.length) {
        var t = tempArray.shift();
        t.fill = "yellow";
        t.resultPath();
    }
    path = null;
    running = false;
}
