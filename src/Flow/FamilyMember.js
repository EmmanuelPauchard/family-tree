
/**
 * Add a child to the selected parent
 * @param {*} nodes: nodes in the current flow
 * @param {*} id: id to use for the new child
 * @param {*} setNodes: callback to update nodes
 * @param {*} setEdges: callback to update edges
 * @param {Profile} profile: profile to create
 * @returns
 */
export function addChild(nodes, id, setNodes, setEdges, profile) {
    // Get the currently selected parent
    const parents = nodes.filter((n) => n.selected);
    if (parents.length > 1 || parents.length === 0) {
        console.log("FamilyMember: Refusing to create a Child node: select exactly one parent");
        return;
    }
    const parent = parents[0];

    // Get the number of siblings to compute the position of the new node
    const siblings_nb = nodes.filter((n) => n.parent === parent.id).length;

    // Position the new node below, either on the left or on the right to existing siblings
    // FIXME This simple placement algorithm will be quickly limited as 'cousins' will overlap
    const target_x_direction = siblings_nb % 2 === 0 ? 1 : -1;

    // Define the new node
    const newNode = {
        id: id,
        data: {label: profile},
        parent: parent.id,
        position: {
            // FIXME a fixed offset of 50 pixels is used here
            x: parent.position.x + target_x_direction * (parent.width + 50) * Math.round(siblings_nb / 2),
            y: parent.position.y + parent.height + 50
        },
    };

    setNodes((nds) => nds.concat(newNode));
    setEdges((eds) => eds.concat({ id, source: parent.id, target: id }));
};

