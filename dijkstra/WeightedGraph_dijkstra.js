// class PriorityQueue {
//     constructor() {
//         this.values = [];
//     }

//     enqueue(val, priority) {
//         this.values.push({val, priority});
//         this.sort();
//     }

//     dequeue() {
//         return this.values.shift();
//     }

//     sort() {
//         this.values.sort((a,b) => a.priority - b.priority)
//     };
// }

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode);
        this.bubbleup();
    }

    bubbleup() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0) {
            let parentidx = Math.floor((idx - 1)/2);
            let parent = this.values[parentidx];
            if(element.priority >= parent.priority) break;
            this.values[parentidx] = element;
            this.values[idx] = parent;
            idx = parentidx;
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        //sink down
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let rightChild, leftChild;
            let swap = null;
            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                  ) {
                      swap = rightChildIdx;  
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap; 
        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}


class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] =[];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = []; // to return at end
        //build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
//                 console.log(distances);
//                 console.log(previous);
                //WE are done
                //Build up path to return at END
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distances to neighboring nodes
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node
                    if (candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

var graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

graph.Dijkstra('A', 'F');