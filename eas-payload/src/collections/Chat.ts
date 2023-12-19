import { CollectionConfig } from 'payload/types'

const Chat: CollectionConfig = {
  slug: 'chats',
  fields: [
    {
        name: "chatName",
        label: 'name',
        type: "text",
        required: true,
    },
    {
        name: "members",
        label: 'members',
        type: "relationship",
        relationTo: "users",
        hasMany: true,
    },
    {
        name: "messages",
        label: 'messages',
        type: "relationship",
        relationTo: "messages",
        hasMany: true,
    }
  ],
}

export default Chat
