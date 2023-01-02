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
import { AddPersonMenu } from "../ControlMenu";
import { Profile } from "./Profile";

const defaultEdges = { type: 'smoothstep' };

const OverviewFlow = () => {
  const [selectedNode, setSelectedNode] = useState(10);
  const [maxId, setMaxId] = useState(10);
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
  const onClick = useCallback(
    (e, n) => {
      console.log("Clicked on ", n);
    },
    []
  )

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
          <h1>Currently Selected</h1>
          <h2>Test</h2>
          <h1>Create a new entry</h1>
          <AddPersonMenu addNode={addNode}></AddPersonMenu>
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
