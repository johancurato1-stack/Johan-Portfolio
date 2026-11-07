"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Edge,
  type Node,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { databaseRelationships, databaseTables } from "../DatabaseSchemaData";

import DatabaseTableNode, {
  type DatabaseTableNodeData,
} from "./DatabaseTableNode";

import DatabaseRelationshipEdge from "./DatabaseRelationshipEdge";

//============================================================================
//! DATABASE NODE TYPES
//============================================================================

const nodeTypes = {
  databaseTable: DatabaseTableNode,
};

//============================================================================
//! DATABASE EDGE TYPES
//============================================================================

const edgeTypes = {
  relationship: DatabaseRelationshipEdge,
};

//============================================================================
//! DATABASE TABLE POSITIONS
//============================================================================

const tablePositions: Record<string, { x: number; y: number }> = {
  //==========================================================================
  //! USER MANAGEMENT
  //==========================================================================

  profiles: { x: 0, y: 0 },
  admins: { x: 350, y: 0 },
  verification_requests: { x: 350, y: 450 },
  feedback: { x: 350, y: 750 },
  notifications: { x: 350, y: 1050 },

  //==========================================================================
  //! PROPERTY MANAGEMENT
  //==========================================================================

  properties: { x: 850, y: 0 },
  property_images: { x: 1200, y: 0 },
  rooms: { x: 850, y: 650 },
  room_images: { x: 1200, y: 650 },
  favorites: { x: 850, y: 1150 },
  property_views: { x: 1200, y: 1150 },
  reports: { x: 1550, y: 1150 },

  //==========================================================================
  //! COMMUNICATION
  //==========================================================================

  chats: { x: 2000, y: 0 },
  inquiries: { x: 2350, y: 0 },
  messages: { x: 2350, y: 650 },
  inquiry_cooldowns: { x: 2000, y: 1000 },
};

//============================================================================
//! INITIAL DATABASE NODES
//============================================================================

const initialNodes: Node<DatabaseTableNodeData, "databaseTable">[] =
  databaseTables.map((table) => ({
    id: table.id,
    type: "databaseTable",
    position: tablePositions[table.id],
    data: {
      label: table.label,
      schema: table.schema,
      columns: table.columns.map((column) => ({
        name: column.name,
        type: column.type,
        keys: column.keys,
      })),
    },
  }));

//============================================================================
//! INITIAL DATABASE RELATIONSHIPS
//============================================================================

const initialEdges: Edge[] = databaseRelationships.map((relationship) => ({
  id: relationship.id,
  source: relationship.source,
  target: relationship.target,
  sourceHandle: "source-right",
  targetHandle: "target-left",
  type: "relationship",
  data: {
    relationship: `${relationship.sourceColumn} → ${relationship.targetColumn}`,
  },
}));

//============================================================================
//! DATABASE SCHEMA VIEWER
//============================================================================

export default function DatabaseSchemaViewer() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        minZoom={0.2}
        maxZoom={2}
        panOnDrag
        zoomOnScroll
        nodesDraggable
        nodesConnectable={false}
        elementsSelectable
      >
        <Background color="#41444B" gap={24} size={1} />

        <Controls
          position="bottom-right"
          showInteractive={false}
          className="!overflow-hidden !rounded-lg !border !border-[#41444B] !bg-[#202226] !shadow-none"
        />

        <MiniMap
          position="bottom-right"
          pannable
          zoomable
          nodeColor="#858991"
          maskColor="rgba(17, 18, 20, 0.75)"
          className="!overflow-hidden !rounded-lg !border !border-[#41444B] !bg-[#202226]"
        />
      </ReactFlow>
    </div>
  );
}
