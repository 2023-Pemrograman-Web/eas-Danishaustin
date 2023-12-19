import { CollectionConfig } from 'payload/types'

const Messages: CollectionConfig = {
  slug: 'messages',
  fields: [
    {
        name: "message",
        label: 'message',
        type: "textarea",
    },
    {
        name: "user",
        label: 'user',
        type: "relationship",
        relationTo: "users",
        required: true,
    },
  ],
}

export default Messages
