class Graph {
    constructor() {
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
        while (this.adjancenList[vertex].length) {
            const adjancenVertex = this.adjancenList[vertex].pop();
            this.removeEdge(vertex, adjancenVertex);
        }
        delete this.adjancenList[vertex];
    }
}

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addVertex('Los Angeles');
g.addVertex('Hong Kong');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Hong Kong', 'Tokyo');
g.addEdge('Hong Kong', 'Dallas');
g.addEdge('Los Angeles', 'Hong Kong');
g.addEdge('Los Angeles', 'Aspen');