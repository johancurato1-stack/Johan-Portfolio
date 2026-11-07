"use client";

/*============================================================================
 //! IMPORTS
============================================================================*/

import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

//============================================================================
//! DATABASE TABLE NODE TYPES
//============================================================================

export type DatabaseColumn = {
  name: string;
  type: string;
  keys?: ("PK" | "FK")[];
  key?: "PK" | "FK";
};

export type DatabaseTableNodeData = {
  label: string;
  schema?: string;
  columns: DatabaseColumn[];
};

export type DatabaseTableNodeType = Node<
  DatabaseTableNodeData,
  "databaseTable"
>;

//============================================================================
//! DATABASE TABLE NODE
//============================================================================

export default function DatabaseTableNode({
  data,
  selected,
}: NodeProps<DatabaseTableNodeType>) {
  return (
    <div
      className={`min-w-[220px] overflow-hidden rounded-lg border bg-[#202226] shadow-lg transition-colors duration-200 ${
        selected
          ? "border-[#B9BEC7]"
          : "border-[#41444B] hover:border-[#858991]"
      }`}
    >
      {/*====================================================================
        //! CONNECTION HANDLES
      ====================================================================*/}

      <Handle
        id="target-left"
        type="target"
        position={Position.Left}
        className="!h-2 !w-2 !border !border-[#858991] !bg-[#202226]"
      />

      <Handle
        id="source-right"
        type="source"
        position={Position.Right}
        className="!h-2 !w-2 !border !border-[#858991] !bg-[#202226]"
      />

      <Handle
        id="target-top"
        type="target"
        position={Position.Top}
        className="!h-2 !w-2 !border !border-[#858991] !bg-[#202226]"
      />

      <Handle
        id="source-bottom"
        type="source"
        position={Position.Bottom}
        className="!h-2 !w-2 !border !border-[#858991] !bg-[#202226]"
      />

      {/*====================================================================
        //! TABLE HEADER
      ====================================================================*/}

      <div className="flex items-center justify-between border-b border-[#41444B] px-3 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          {/*==============================================================
            //! TABLE ICON
          ==============================================================*/}

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 shrink-0 text-[#B9BEC7]"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M3 9h18M9 9v11" />
          </svg>

          <h3 className="truncate text-[11px] font-medium text-[#F5F5F6]">
            {data.label}
          </h3>
        </div>

        <span className="rounded border border-[#41444B] px-1.5 py-0.5 text-[8px] text-[#858991]">
          {data.schema ?? "public"}
        </span>
      </div>

      {/*====================================================================
        //! TABLE COLUMNS
      ====================================================================*/}

      <div className="divide-y divide-[#41444B]/60">
        {data.columns.map((column) => {
          const keys = column.keys ?? (column.key ? [column.key] : []);

          return (
            <div
              key={column.name}
              className="flex min-h-[31px] items-center justify-between gap-3 px-3 py-1.5"
            >
              {/*============================================================
                //! COLUMN INFORMATION
              ============================================================*/}

              <div className="flex min-w-0 items-center gap-2">
                {/*========================================================
                  //! KEY ICONS
                ========================================================*/}

                <div className="flex w-3 shrink-0 items-center justify-center">
                  {keys.includes("PK") && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#B9BEC7"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                      aria-label="Primary key"
                    >
                      <circle cx="8" cy="15" r="5" />
                      <path d="m11.5 11.5 9-9M16 7l2 2M18 5l2 2" />
                    </svg>
                  )}

                  {!keys.includes("PK") && keys.includes("FK") && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#858991"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                      aria-label="Foreign key"
                    >
                      <path d="M7 7h10a4 4 0 0 1 0 8h-3" />
                      <path d="m10 12-3 3 3 3" />
                      <path d="M17 17H7a4 4 0 0 1 0-8h3" />
                      <path d="m14 4 3 3-3 3" />
                    </svg>
                  )}
                </div>

                <span className="truncate text-[9px] font-medium text-[#E0E2E6]">
                  {column.name}
                </span>

                {/*========================================================
                  //! KEY BADGES
                ========================================================*/}

                {keys.length > 0 && (
                  <div className="flex shrink-0 items-center gap-1">
                    {keys.map((key) => (
                      <span
                        key={key}
                        className="rounded border border-[#41444B] px-1 py-px text-[7px] font-medium text-[#B9BEC7]"
                      >
                        {key}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/*============================================================
                //! COLUMN DATA TYPE
              ============================================================*/}

              <span className="shrink-0 text-[8px] text-[#858991]">
                {column.type}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
