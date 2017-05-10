var Organization = {};

Organization.init = function () {
    // 进行处理

    treeJSON = d3.json("flare.json", function (error, treeData) {
        // Calculate total nodes, max label length

        var totalNodes = 0;
        var maxLabelLength = 0;

        // variables for drag/drop

        var selectdNode = null;
        var draggingNode = null;

        // panning variables
        var panSpeed = 200;
        var panBoundary = 20; // Within 20px from edges will pan when dragging

        // Misc. variables
        var i = 0;
        var duration = 750;
        var root;

        var viewrWidth = $(document).width();
        var viewrHight = $(document).height();

        var tree = d3.layout.tree()
        .size()








    });

}

