/*============================================================================
 //! DATABASE SCHEMA DATA
============================================================================*/

//============================================================================
//! DATABASE COLUMN TYPE
//============================================================================

export type DatabaseSchemaColumn = {
  name: string;
  type: string;
  nullable: boolean;
  defaultValue?: string | null;
  keys: ("PK" | "FK")[];
};

//============================================================================
//! DATABASE TABLE TYPE
//============================================================================

export type DatabaseSchemaTable = {
  id: string;
  label: string;
  schema: string;
  columns: DatabaseSchemaColumn[];
};

//============================================================================
//! DATABASE RELATIONSHIP TYPE
//============================================================================

export type DatabaseSchemaRelationship = {
  id: string;
  source: string;
  sourceColumn: string;
  target: string;
  targetColumn: string;
};

//============================================================================
//! DATABASE TABLES
//============================================================================

export const databaseTables: DatabaseSchemaTable[] = [
  //==========================================================================
  //! ADMINS
  //==========================================================================

  {
    id: "admins",
    label: "admins",
    schema: "public",
    columns: [
      { name: "user_id", type: "uuid", nullable: false, keys: ["PK", "FK"] },
      {
        name: "created_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
    ],
  },

  //==========================================================================
  //! CHATS
  //==========================================================================

  {
    id: "chats",
    label: "chats",
    schema: "public",
    columns: [
      {
        name: "id",
        type: "uuid",
        nullable: false,
        defaultValue: "gen_random_uuid()",
        keys: ["PK"],
      },
      {
        name: "status",
        type: "text",
        nullable: false,
        defaultValue: "'pending'",
        keys: [],
      },
      {
        name: "created_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
      {
        name: "updated_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
      {
        name: "access_status",
        type: "text",
        nullable: false,
        defaultValue: "'locked'",
        keys: [],
      },
      { name: "pending_user_id", type: "uuid", nullable: true, keys: ["FK"] },
      { name: "pending_since", type: "timestamptz", nullable: true, keys: [] },
      { name: "property_id", type: "uuid", nullable: false, keys: ["FK"] },
      {
        name: "last_inquiry_sender_id",
        type: "uuid",
        nullable: true,
        keys: [],
      },
      {
        name: "user_1_deleted_at",
        type: "timestamptz",
        nullable: true,
        keys: [],
      },
      {
        name: "user_2_deleted_at",
        type: "timestamptz",
        nullable: true,
        keys: [],
      },
      {
        name: "last_inquiry_at",
        type: "timestamptz",
        nullable: true,
        keys: [],
      },
      { name: "user_1_id", type: "uuid", nullable: false, keys: ["FK"] },
      { name: "user_2_id", type: "uuid", nullable: false, keys: ["FK"] },
    ],
  },

  //==========================================================================
  //! FAVORITES
  //==========================================================================

  {
    id: "favorites",
    label: "favorites",
    schema: "public",
    columns: [
      { name: "user_id", type: "uuid", nullable: false, keys: ["PK", "FK"] },
      {
        name: "property_id",
        type: "uuid",
        nullable: false,
        keys: ["PK", "FK"],
      },
      {
        name: "created_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
    ],
  },

  //==========================================================================
  //! FEEDBACK
  //==========================================================================

  {
    id: "feedback",
    label: "feedback",
    schema: "public",
    columns: [
      {
        name: "id",
        type: "uuid",
        nullable: false,
        defaultValue: "gen_random_uuid()",
        keys: ["PK"],
      },
      { name: "user_id", type: "uuid", nullable: false, keys: ["FK"] },
      { name: "message", type: "text", nullable: false, keys: [] },
      {
        name: "created_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
    ],
  },

  //==========================================================================
  //! INQUIRIES
  //==========================================================================

  {
    id: "inquiries",
    label: "inquiries",
    schema: "public",
    columns: [
      {
        name: "id",
        type: "uuid",
        nullable: false,
        defaultValue: "gen_random_uuid()",
        keys: ["PK"],
      },
      { name: "chat_id", type: "uuid", nullable: true, keys: ["FK"] },
      { name: "room_id", type: "uuid", nullable: true, keys: ["FK"] },
      { name: "room_title", type: "text", nullable: false, keys: [] },
      { name: "room_price", type: "numeric", nullable: false, keys: [] },
      { name: "room_capacity", type: "integer", nullable: false, keys: [] },
      {
        name: "room_gender_preference",
        type: "text",
        nullable: false,
        keys: [],
      },
      {
        name: "message",
        type: "text",
        nullable: false,
        defaultValue: "''",
        keys: [],
      },
      {
        name: "created_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
      {
        name: "property_name",
        type: "text",
        nullable: false,
        defaultValue: "''",
        keys: [],
      },
      {
        name: "room_image_url",
        type: "text",
        nullable: false,
        defaultValue: "''",
        keys: [],
      },
      {
        name: "status",
        type: "text",
        nullable: false,
        defaultValue: "'pending'",
        keys: [],
      },
    ],
  },

  //==========================================================================
  //! INQUIRY COOLDOWNS
  //==========================================================================

  {
    id: "inquiry_cooldowns",
    label: "inquiry_cooldowns",
    schema: "public",
    columns: [
      { name: "tenant_id", type: "uuid", nullable: false, keys: ["PK", "FK"] },
      {
        name: "property_id",
        type: "uuid",
        nullable: false,
        keys: ["PK", "FK"],
      },
      {
        name: "last_inquiry_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
    ],
  },

  //==========================================================================
  //! MESSAGES
  //==========================================================================

  {
    id: "messages",
    label: "messages",
    schema: "public",
    columns: [
      {
        name: "id",
        type: "uuid",
        nullable: false,
        defaultValue: "gen_random_uuid()",
        keys: ["PK"],
      },
      { name: "chat_id", type: "uuid", nullable: false, keys: ["FK"] },
      { name: "sender_id", type: "uuid", nullable: false, keys: ["FK"] },
      { name: "message_type", type: "text", nullable: false, keys: [] },
      { name: "content", type: "text", nullable: true, keys: [] },
      {
        name: "is_read",
        type: "boolean",
        nullable: false,
        defaultValue: "false",
        keys: [],
      },
      {
        name: "created_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
      { name: "inquiry_id", type: "uuid", nullable: true, keys: [] },
    ],
  },

  //==========================================================================
  //! NOTIFICATIONS
  //==========================================================================

  {
    id: "notifications",
    label: "notifications",
    schema: "public",
    columns: [
      {
        name: "id",
        type: "uuid",
        nullable: false,
        defaultValue: "gen_random_uuid()",
        keys: ["PK"],
      },
      { name: "user_id", type: "uuid", nullable: false, keys: ["FK"] },
      { name: "title", type: "text", nullable: false, keys: [] },
      { name: "body", type: "text", nullable: false, keys: [] },
      { name: "type", type: "text", nullable: false, keys: [] },
      {
        name: "is_read",
        type: "boolean",
        nullable: false,
        defaultValue: "false",
        keys: [],
      },
      {
        name: "created_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
    ],
  },

  //==========================================================================
  //! PROFILES
  //==========================================================================

  {
    id: "profiles",
    label: "profiles",
    schema: "public",
    columns: [
      { name: "id", type: "uuid", nullable: false, keys: ["PK"] },
      { name: "first_name", type: "text", nullable: false, keys: [] },
      { name: "last_name", type: "text", nullable: false, keys: [] },
      { name: "gender", type: "text", nullable: false, keys: [] },
      { name: "phone", type: "text", nullable: true, keys: [] },
      { name: "avatar_path", type: "text", nullable: true, keys: [] },
      {
        name: "status",
        type: "text",
        nullable: false,
        defaultValue: "'active'",
        keys: [],
      },
      {
        name: "verification_status",
        type: "text",
        nullable: false,
        defaultValue: "'not_submitted'",
        keys: [],
      },
      {
        name: "last_active_role",
        type: "text",
        nullable: false,
        defaultValue: "'tenant'",
        keys: [],
      },
      {
        name: "created_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
      {
        name: "updated_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
      { name: "email", type: "text", nullable: false, keys: [] },
      {
        name: "last_seen_at",
        type: "timestamptz",
        nullable: true,
        defaultValue: "now()",
        keys: [],
      },
    ],
  },

  //==========================================================================
  //! PROPERTIES
  //==========================================================================

  {
    id: "properties",
    label: "properties",
    schema: "public",
    columns: [
      {
        name: "id",
        type: "uuid",
        nullable: false,
        defaultValue: "gen_random_uuid()",
        keys: ["PK"],
      },
      { name: "owner_id", type: "uuid", nullable: false, keys: ["FK"] },
      { name: "title", type: "text", nullable: false, keys: [] },
      { name: "description", type: "text", nullable: true, keys: [] },
      {
        name: "availability_status",
        type: "text",
        nullable: false,
        defaultValue: "'available'",
        keys: [],
      },
      {
        name: "amenities",
        type: "text[]",
        nullable: false,
        defaultValue: "'{}'",
        keys: [],
      },
      { name: "latitude", type: "double precision", nullable: false, keys: [] },
      {
        name: "longitude",
        type: "double precision",
        nullable: false,
        keys: [],
      },
      {
        name: "views",
        type: "integer",
        nullable: false,
        defaultValue: "0",
        keys: [],
      },
      {
        name: "created_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
      {
        name: "updated_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
      {
        name: "address",
        type: "text",
        nullable: false,
        defaultValue: "''",
        keys: [],
      },
      {
        name: "minimum_price",
        type: "numeric",
        nullable: false,
        defaultValue: "0",
        keys: [],
      },
      {
        name: "gender_preference",
        type: "text",
        nullable: false,
        defaultValue: "'mixed'",
        keys: [],
      },
    ],
  },

  //==========================================================================
  //! PROPERTY IMAGES
  //==========================================================================

  {
    id: "property_images",
    label: "property_images",
    schema: "public",
    columns: [
      {
        name: "id",
        type: "uuid",
        nullable: false,
        defaultValue: "gen_random_uuid()",
        keys: ["PK"],
      },
      { name: "property_id", type: "uuid", nullable: false, keys: ["FK"] },
      { name: "storage_path", type: "text", nullable: false, keys: [] },
      { name: "display_order", type: "integer", nullable: false, keys: [] },
      {
        name: "created_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
    ],
  },

  //==========================================================================
  //! PROPERTY VIEWS
  //==========================================================================

  {
    id: "property_views",
    label: "property_views",
    schema: "public",
    columns: [
      { name: "user_id", type: "uuid", nullable: false, keys: ["PK", "FK"] },
      {
        name: "property_id",
        type: "uuid",
        nullable: false,
        keys: ["PK", "FK"],
      },
      {
        name: "viewed_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
    ],
  },

  //==========================================================================
  //! REPORTS
  //==========================================================================

  {
    id: "reports",
    label: "reports",
    schema: "public",
    columns: [
      {
        name: "id",
        type: "uuid",
        nullable: false,
        defaultValue: "gen_random_uuid()",
        keys: ["PK"],
      },
      { name: "reporter_id", type: "uuid", nullable: false, keys: ["FK"] },
      { name: "property_id", type: "uuid", nullable: false, keys: ["FK"] },
      { name: "reason", type: "text", nullable: false, keys: [] },
      {
        name: "status",
        type: "text",
        nullable: false,
        defaultValue: "'pending'",
        keys: [],
      },
      {
        name: "created_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
      { name: "resolved_at", type: "timestamptz", nullable: true, keys: [] },
    ],
  },

  //==========================================================================
  //! ROOM IMAGES
  //==========================================================================

  {
    id: "room_images",
    label: "room_images",
    schema: "public",
    columns: [
      {
        name: "id",
        type: "uuid",
        nullable: false,
        defaultValue: "gen_random_uuid()",
        keys: ["PK"],
      },
      { name: "room_id", type: "uuid", nullable: false, keys: ["FK"] },
      { name: "storage_path", type: "text", nullable: false, keys: [] },
      { name: "display_order", type: "integer", nullable: false, keys: [] },
      {
        name: "created_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
    ],
  },

  //==========================================================================
  //! ROOMS
  //==========================================================================

  {
    id: "rooms",
    label: "rooms",
    schema: "public",
    columns: [
      {
        name: "id",
        type: "uuid",
        nullable: false,
        defaultValue: "gen_random_uuid()",
        keys: ["PK"],
      },
      { name: "property_id", type: "uuid", nullable: false, keys: ["FK"] },
      { name: "title", type: "text", nullable: false, keys: [] },
      { name: "description", type: "text", nullable: true, keys: [] },
      { name: "price", type: "numeric", nullable: false, keys: [] },
      { name: "gender_preference", type: "text", nullable: false, keys: [] },
      { name: "capacity", type: "integer", nullable: false, keys: [] },
      {
        name: "created_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
      {
        name: "updated_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
    ],
  },

  //==========================================================================
  //! VERIFICATION REQUESTS
  //==========================================================================

  {
    id: "verification_requests",
    label: "verification_requests",
    schema: "public",
    columns: [
      {
        name: "id",
        type: "uuid",
        nullable: false,
        defaultValue: "gen_random_uuid()",
        keys: ["PK"],
      },
      { name: "user_id", type: "uuid", nullable: false, keys: ["FK"] },
      {
        name: "status",
        type: "text",
        nullable: false,
        defaultValue: "'pending'",
        keys: [],
      },
      {
        name: "submitted_at",
        type: "timestamptz",
        nullable: false,
        defaultValue: "now()",
        keys: [],
      },
      { name: "reviewed_at", type: "timestamptz", nullable: true, keys: [] },
    ],
  },
];

//============================================================================
//! DATABASE RELATIONSHIPS
//============================================================================

export const databaseRelationships: DatabaseSchemaRelationship[] = [
  {
    id: "admins-profiles",
    source: "admins",
    sourceColumn: "user_id",
    target: "profiles",
    targetColumn: "id",
  },

  {
    id: "chats-pending-user",
    source: "chats",
    sourceColumn: "pending_user_id",
    target: "profiles",
    targetColumn: "id",
  },
  {
    id: "chats-property",
    source: "chats",
    sourceColumn: "property_id",
    target: "properties",
    targetColumn: "id",
  },
  {
    id: "chats-user-1",
    source: "chats",
    sourceColumn: "user_1_id",
    target: "profiles",
    targetColumn: "id",
  },
  {
    id: "chats-user-2",
    source: "chats",
    sourceColumn: "user_2_id",
    target: "profiles",
    targetColumn: "id",
  },

  {
    id: "favorites-property",
    source: "favorites",
    sourceColumn: "property_id",
    target: "properties",
    targetColumn: "id",
  },
  {
    id: "favorites-user",
    source: "favorites",
    sourceColumn: "user_id",
    target: "profiles",
    targetColumn: "id",
  },

  {
    id: "feedback-user",
    source: "feedback",
    sourceColumn: "user_id",
    target: "profiles",
    targetColumn: "id",
  },

  {
    id: "inquiries-chat",
    source: "inquiries",
    sourceColumn: "chat_id",
    target: "chats",
    targetColumn: "id",
  },
  {
    id: "inquiries-room",
    source: "inquiries",
    sourceColumn: "room_id",
    target: "rooms",
    targetColumn: "id",
  },

  {
    id: "inquiry-cooldowns-property",
    source: "inquiry_cooldowns",
    sourceColumn: "property_id",
    target: "properties",
    targetColumn: "id",
  },
  {
    id: "inquiry-cooldowns-tenant",
    source: "inquiry_cooldowns",
    sourceColumn: "tenant_id",
    target: "profiles",
    targetColumn: "id",
  },

  {
    id: "messages-chat",
    source: "messages",
    sourceColumn: "chat_id",
    target: "chats",
    targetColumn: "id",
  },
  {
    id: "messages-sender",
    source: "messages",
    sourceColumn: "sender_id",
    target: "profiles",
    targetColumn: "id",
  },

  {
    id: "notifications-user",
    source: "notifications",
    sourceColumn: "user_id",
    target: "profiles",
    targetColumn: "id",
  },

  {
    id: "properties-owner",
    source: "properties",
    sourceColumn: "owner_id",
    target: "profiles",
    targetColumn: "id",
  },

  {
    id: "property-images-property",
    source: "property_images",
    sourceColumn: "property_id",
    target: "properties",
    targetColumn: "id",
  },

  {
    id: "property-views-property",
    source: "property_views",
    sourceColumn: "property_id",
    target: "properties",
    targetColumn: "id",
  },
  {
    id: "property-views-user",
    source: "property_views",
    sourceColumn: "user_id",
    target: "profiles",
    targetColumn: "id",
  },

  {
    id: "reports-property",
    source: "reports",
    sourceColumn: "property_id",
    target: "properties",
    targetColumn: "id",
  },
  {
    id: "reports-reporter",
    source: "reports",
    sourceColumn: "reporter_id",
    target: "profiles",
    targetColumn: "id",
  },

  {
    id: "room-images-room",
    source: "room_images",
    sourceColumn: "room_id",
    target: "rooms",
    targetColumn: "id",
  },

  {
    id: "rooms-property",
    source: "rooms",
    sourceColumn: "property_id",
    target: "properties",
    targetColumn: "id",
  },

  {
    id: "verification-requests-user",
    source: "verification_requests",
    sourceColumn: "user_id",
    target: "profiles",
    targetColumn: "id",
  },
];
