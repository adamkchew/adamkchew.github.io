export default /**@ngInject*/($scope, $routeParams, $location) => {

  $scope.path = $location.path();

  $scope.category = $routeParams.category;

  $scope.documents = [
    // Array
    {category: 'data-structure', name: 'Array', path: '/learn/data-structure/array', template: require('./data-structure/array.html')},
    {category: 'data-structure', name: 'Queue', path: '/learn/data-structure/queue', template: require('./data-structure/queue.html')},
    {category: 'data-structure', name: 'Stack', path: '/learn/data-structure/stack', template: require('./data-structure/stack.html')},
    {category: 'data-structure', name: 'Sets', path: '/learn/data-structure/sets', template: require('./data-structure/sets.html')},

    // Linked List
    {category: 'data-structure', name: 'Single Linked List', path: '/learn/data-structure/single-linked-list', template: require('./data-structure/single-linked-list.html')},
    {category: 'data-structure', name: 'Double Linked List', path: '/learn/data-structure/double-linked-list', template: require('./data-structure/double-linked-list.html')},
    {category: 'data-structure', name: 'Skip List', path: '/learn/data-structure/skip-list', template: require('./data-structure/skip-list.html')},

    // Trees
    {category: 'data-structure', name: 'Binary Tree', path: '/learn/data-structure/binary-tree', template: require('./data-structure/binary-tree.html')},
    {category: 'data-structure', name: 'B Tree', path: '/learn/data-structure/b-tree', template: require('./data-structure/b-tree.html')},
    {category: 'data-structure', name: 'AVL Tree', path: '/learn/data-structure/avl-tree', template: require('./data-structure/avl-tree.html')},
    {category: 'data-structure', name: 'KD Tree', path: '/learn/data-structure/kd-tree', template: require('./data-structure/kd-tree.html')},
    {category: 'data-structure', name: 'Red-Black Tree', path: '/learn/data-structure/red-black-tree', template: require('./data-structure/red-black-tree.html')},
    {category: 'data-structure', name: 'Cartesian Tree', path: '/learn/data-structure/cartesian-tree', template: require('./data-structure/cartesian-tree.html')},
    {category: 'data-structure', name: 'Merkle Tree', path: '/learn/data-structure/merkle-tree', template: require('./data-structure/merkle-tree.html')},
    {category: 'data-structure', name: 'Splay Tree', path: '/learn/data-structure/splay-tree', template: require('./data-structure/splay-tree.html')},
    {category: 'data-structure', name: 'Tango Tree', path: '/learn/data-structure/tango-tree', template: require('./data-structure/tango-tree.html')},
    {category: 'data-structure', name: 'Heap', path: '/learn/data-structure/heap', template: require('./data-structure/heap.html')},
    {category: 'data-structure', name: 'Trie', path: '/learn/data-structure/trie', template: require('./data-structure/trie.html')},

    // Hashes
    {category: 'data-structure', name: 'Hash Table', path: '/learn/data-structure/hash-table', template: require('./data-structure/hash-table.html')},
    {category: 'data-structure', name: 'Hash List', path: '/learn/data-structure/hash-list', template: require('./data-structure/hash-list.html')},
    {category: 'data-structure', name: 'Hash Tree', path: '/learn/data-structure/hash-tree', template: require('./data-structure/hash-tree.html')},

    // Graphs
    {category: 'data-structure', name: 'Directed Graph', path: '/learn/data-structure/directed-graph', template: require('./data-structure/directed-graph.html')},
    {category: 'data-structure', name: 'Undirected Graph', path: '/learn/data-structure/undirected-graph', template: require('./data-structure/undirected-graph.html')},


    // Sorting algorithms
    {category: 'sorting-algorithm', name: 'Quick Sort', path: '/learn/sorting-algorithm/quick-sort', template: require('./sorting-algorithm/quick-sort.html')},
    {category: 'sorting-algorithm', name: 'Merge Sort', path: '/learn/sorting-algorithm/merge-sort', template: require('./sorting-algorithm/merge-sort.html')},
    {category: 'sorting-algorithm', name: 'Bubble Sort', path: '/learn/sorting-algorithm/bubble-sort', template: require('./sorting-algorithm/bubble-sort.html')},
    {category: 'sorting-algorithm', name: 'Radix Sort', path: '/learn/sorting-algorithm/radix-sort', template: require('./sorting-algorithm/radix-sort.html')},
    {category: 'sorting-algorithm', name: 'Heap Sort', path: '/learn/sorting-algorithm/heap-sort', template: require('./sorting-algorithm/heap-sort.html')},
    {category: 'sorting-algorithm', name: 'Counting Sort', path: '/learn/sorting-algorithm/counting-sort', template: require('./sorting-algorithm/counting-sort.html')},
    {category: 'sorting-algorithm', name: 'Tree Sort', path: '/learn/sorting-algorithm/tree-sort', template: require('./sorting-algorithm/tree-sort.html')},
    {category: 'sorting-algorithm', name: 'Bucket Sort', path: '/learn/sorting-algorithm/bucket-sort', template: require('./sorting-algorithm/bucket-sort.html')},
    {category: 'sorting-algorithm', name: 'Selection Sort', path: '/learn/sorting-algorithm/selection-sort', template: require('./sorting-algorithm/selection-sort.html')},

    // Search algorithms
    {category: 'search-algorithm', name: 'Linear Search', path: '/learn/search-algorithm/linear-search', template: require('./search-algorithm/linear-search.html')},
    {category: 'search-algorithm', name: 'Binary Search', path: '/learn/search-algorithm/binary-search', template: require('./search-algorithm/binary-search.html')},
    {category: 'search-algorithm', name: 'Jump Search', path: '/learn/search-algorithm/jump-search', template: require('./search-algorithm/jump-search.html')},
    {category: 'search-algorithm', name: 'Interpolation Search', path: '/learn/search-algorithm/interpolation-search', template: require('./search-algorithm/interpolation-search.html')},
    {category: 'search-algorithm', name: 'Exponential Search', path: '/learn/search-algorithm/exponential-search', template: require('./search-algorithm/exponential-search.html')},
    {category: 'search-algorithm', name: 'Fibonacci Search', path: '/learn/search-algorithm/fibonacci-search', template: require('./search-algorithm/fibonacci-search.html')},
    {category: 'search-algorithm', name: 'Breadth First Search', path: '/learn/search-algorithm/breadth-first-search', template: require('./search-algorithm/breadth-first-search.html')},
    {category: 'search-algorithm', name: 'Depth First Search', path: '/learn/depth-algorithm/depth-first-search', template: require('./search-algorithm/depth-first-search.html')},
    {category: 'search-algorithm', name: 'Greedy Search', path: '/learn/search-algorithm/greedy-first-search', template: require('./search-algorithm/greedy-search.html')},
    {category: 'search-algorithm', name: 'A* Search', path: '/learn/search-algorithm/a-star-search', template: require('./search-algorithm/a-star-search.html')},
  ];

  $scope.selectedDocument;

  $scope.load = () => {

    $scope.documents.forEach(document => {
      if($scope.path === document.path) $scope.selectedDocument = document
    })

  };

  $scope.load()

}