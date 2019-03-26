class Graph {
    constructor(){
        this.adjancenList = {};
    }

    addVertex(vertex) {
        if (!this.adjancenList[vertex]) this.adjancenList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjancenList[v1].push(v2);
        this.adjancenList[v2].push(v1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjancenList[vertex1] = this.adjancenList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjancenList[vertex2] = this.adjancenList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex) {
        while(this.adjancenList[vertex].length) {
            const adjancenVertex = this.adjancenList[vertex].pop();
            this.removeEdge(vertex, adjancenVertex);
        }
        delete this.adjancenList[vertex];
    }

    depthFiestIterative(start) {
        const stack = [start];
        const result = [];
        const viseted = {};
        let currentVertex;

        viseted[start] = true;
        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjancenList[currentVertex].forEach(neighbor => {
                if(!viseted[neighbor]) {
                    viseted[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');