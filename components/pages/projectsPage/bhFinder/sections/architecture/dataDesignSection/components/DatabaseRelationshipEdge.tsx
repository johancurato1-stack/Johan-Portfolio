"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  type EdgeProps,
} from "@xyflow/react";

//============================================================================
//! DATABASE RELATIONSHIP EDGE
//============================================================================

export default function DatabaseRelationshipEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  style,
  markerEnd,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  const relationship = data?.relationship as string | undefined;

  return (
    <>
      {/*====================================================================
        //! RELATIONSHIP CONNECTOR
      ====================================================================*/}

      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke: "#858991",
          strokeWidth: 1.5,
          ...style,
        }}
        markerEnd={markerEnd}
      />

      {/*====================================================================
        //! RELATIONSHIP LABEL
      ====================================================================*/}

      {relationship && (
        <EdgeLabelRenderer>
          <div
            className="pointer-events-none absolute rounded border border-[#41444B] bg-[#202226] px-2 py-1 text-[8px] text-[#B9BEC7]"
            style={{
              transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            }}
          >
            {relationship}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}
