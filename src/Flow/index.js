import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Panel
} from "reactflow";
import "reactflow/dist/style.css";

import {
  nodes as initialNodes,
  edges as initialEdges
} from "./initial-elements";

import { addChild } from "./FamilyMember";
import { AddPersonMenu } from "../ControlMenu/AddPerson";
import { EditPersonMenu } from "../ControlMenu/EditPerson";

const defaultEdges = { type: 'smoothstep' };

/**
 * Create the hierarchy viewer based on reactflow
 * Also creates a menu item using components from ControlMenu and a div element of class "sidebar"
 * @returns a ReactFlow component
 */
const OverviewFlow = () => {
  // Currently selected node
  const [selectedNode, setSelectedNode] = useState("");
  // Node Id counter
  const [maxId, setMaxId] = useState(10);

  // Default reactflow handlers
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const addNode = useCallback(
    (profile) => {
      addChild(nodes, maxId.toString(), setNodes, setEdges, profile)
      setMaxId(maxId + 1);
    },
    [nodes, maxId, setNodes, setEdges]
  );

  // Get selected node
  // FIXME: impossible to unselect
  const onClick = useCallback(
    (e, n) => {
      console.log("Clicked on ", n.data.name);
      setSelectedNode(n.data.name);
    },
    [setSelectedNode]
  )

  // The person creation menu can be used to create a new person (root ancestor),
  // add a child or update a person's data
  // For now, we can only create a child
  const add_child_or_new = (selectedNode === "" ?
    "Add new person (WIP: select parent first)" :
    "Add Child");

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeClick={onClick}
      fitView
      attributionPosition="top-right"
      defaultEdgeOptions={defaultEdges}
    >
      <Panel position="left">
        <div className="sidebar">
          <EditPersonMenu selected={selectedNode}></EditPersonMenu>
          <AddPersonMenu addNode={addNode} title={add_child_or_new}></AddPersonMenu>
        </div>
      </Panel>
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === "input") return "#0041d0";
          if (n.type === "output") return "#ff0072";
          if (n.type === "default") return "#1a192b";

          return "#eee";
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;

          return "#fff";
        }}
        nodeBorderRadius={2}
      />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};

export default OverviewFlow;
