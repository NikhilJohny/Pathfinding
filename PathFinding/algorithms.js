//await sleep function
function sleep(ms) {
    return new Promise(resolve => setInterval(resolve, ms));
}

// const delay = ms => new Promise(res => setTimeout(res, ms));






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
                    curr.top.prev = curr;
                }
        }
        if (curr.bottom) {
            if (curr.bottom.state != false || curr.bottom.endNode)
                if (!cacheStack.has(curr.bottom)) {
                    cacheStack.add(curr.bottom);
                    stack.push(curr.bottom);
                    curr.bottom.prev = curr;
                }
        }
        if (curr.left) {
            if (curr.left.state != false || curr.left.endNode)
                if (!cacheStack.has(curr.left)) {
                    cacheStack.add(curr.left);
                    stack.push(curr.left);
                    curr.left.prev = curr;
                }
        }
        if (curr.right) {
            if (curr.right.state != false || curr.right.endNode)
                if (!cacheStack.has(curr.right)) {
                    cacheStack.add(curr.right);
                    stack.push(curr.right);
                    curr.right.prev = curr;
                }
        }
    }
    running = false;
}

async function traverseBFS(rootArray) {
    var temp = null;
    let Queue = [rootArray];
    let cacheQueue = new Set();
    rootArray.prev = null;
    while (Queue.length) {
        let curr = Queue.shift();
        curr.explored = true;
        if (!curr.startNode && !curr.endNode)
            curr.fillExploringNodes();
        await new Promise(resolve => setTimeout(resolve, 0));
        if (curr.endNode) {
            var temp = curr;
            running = false;
            return temp;
        }
        // await sleepTime = 100;
        // await sleepRequested = true;
        if (curr.top) {
            if (curr.top.state != false || curr.top.endNode)
                if (!cacheQueue.has(curr.top)) {
                    cacheQueue.add(curr.top)
                    Queue.push(curr.top);
                    curr.top.prev = curr;
                }
        }
        if (curr.bottom) {
            if (curr.bottom.state != false || curr.bottom.endNode)
                if (!cacheQueue.has(curr.bottom)) {
                    cacheQueue.add(curr.bottom);
                    Queue.push(curr.bottom);
                    curr.bottom.prev = curr;
                }
        }
        if (curr.left) {
            if (curr.left.state != false || curr.left.endNode)
                if (!cacheQueue.has(curr.left)) {
                    cacheQueue.add(curr.left);
                    curr.left.prev = curr;
                    Queue.push(curr.left);
                }
        }
        if (curr.right) {
            if (curr.right.state != false || curr.right.endNode)
                if (!cacheQueue.has(curr.right)) {
                    cacheQueue.add(curr.right);
                    Queue.push(curr.right);
                    curr.right.prev = curr;
                }

        }
        temp = curr;
    }
    running = false;
}