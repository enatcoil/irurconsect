function NodeHoverDrawingFunction(node) {
    // Code to handle node hover behavior
    // This could involve changing the appearance of the node or showing additional information

    // Example: Change the color of the node on hover
    node.style('fill', 'red');
}

// Assuming 'nodes' is a selection of graphical elements representing data points
nodes.on('mouseover', function() {
    NodeHoverDrawingFunction(d3.select(this));
});

nodes.on('mouseout', function() {
    // Code to handle mouseout behavior, if needed
    // For example, reverting the node appearance to its original state
});
