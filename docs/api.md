# Green IT Research Hub API Documentation

## Overview

This document provides detailed information about the APIs used in the Green IT Research Hub platform. Our API is built on Firebase and provides real-time data synchronization capabilities.

## Base URL

```
https://green-tech-blog-2024.web.app/api
```

## Authentication

All API requests require Firebase Authentication. Include the Firebase ID token in the Authorization header:

```http
Authorization: Bearer <your-firebase-id-token>
```

## API Endpoints

### Tips

#### Get All Tips

```http
GET /tips
```

Query Parameters:
- `category` (optional): Filter by category (cloud, mobile, security, performance, sync)
- `limit` (optional): Number of tips to return (default: 10)
- `orderBy` (optional): Sort field (default: "timestamp")

Response:
```json
{
  "tips": [
    {
      "id": "string",
      "title": "string",
      "content": "string",
      "category": "string",
      "imageURL": "string",
      "timestamp": "ISO8601 string",
      "stats": {
        "energySaved": "number",
        "costReduction": "number"
      },
      "references": [
        {
          "title": "string",
          "url": "string"
        }
      ]
    }
  ]
}
```

#### Get Tip by ID

```http
GET /tips/{tipId}
```

Response:
```json
{
  "id": "string",
  "title": "string",
  "content": "string",
  "category": "string",
  "imageURL": "string",
  "timestamp": "ISO8601 string",
  "stats": {
    "energySaved": "number",
    "costReduction": "number"
  },
  "references": [
    {
      "title": "string",
      "url": "string"
    }
  ]
}
```

#### Create New Tip

```http
POST /tips
```

Request Body:
```json
{
  "title": "string",
  "content": "string",
  "category": "string",
  "imageURL": "string",
  "stats": {
    "energySaved": "number",
    "costReduction": "number"
  },
  "references": [
    {
      "title": "string",
      "url": "string"
    }
  ]
}
```

### Categories

#### Get All Categories

```http
GET /categories
```

Response:
```json
{
  "categories": [
    {
      "id": "string",
      "name": "string",
      "icon": "string",
      "description": "string"
    }
  ]
}
```

## Data Models

### Tip

```typescript
interface Tip {
  id: string;
  title: string;
  content: string;
  category: string;
  imageURL: string;
  timestamp: Date;
  stats?: {
    energySaved: number;
    costReduction: number;
  };
  references?: Array<{
    title: string;
    url: string;
  }>;
}
```

### Category

```typescript
interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}
```

## Error Handling

The API uses standard HTTP status codes and returns error messages in the following format:

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "details": {}
  }
}
```

Common Error Codes:
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Rate Limiting

- Rate limit: 100 requests per minute per IP
- Burst limit: 200 requests

Headers returned:
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1623456789
```

## Webhooks

### Available Events

- `tip.created`
- `tip.updated`
- `tip.deleted`

### Webhook Payload

```json
{
  "event": "string",
  "timestamp": "ISO8601 string",
  "data": {
    "tip": Tip
  }
}
```

## SDK Usage

### JavaScript/TypeScript

```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase config
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fetch tips
async function getTips() {
  const tipsCollection = collection(db, 'tips');
  const snapshot = await getDocs(tipsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}
```

## Best Practices

1. **Caching**
   - Implement client-side caching
   - Use Firebase offline persistence
   - Cache frequently accessed data

2. **Security**
   - Always validate user input
   - Use Firebase Security Rules
   - Implement proper authentication

3. **Performance**
   - Use pagination for large datasets
   - Implement proper indexing
   - Optimize queries

## Support

For API support, please contact:
- Email: api-support@greenithub.com
- Documentation Issues: [GitHub Issues](https://github.com/yourusername/green-it-blog/issues)

## Changelog

### v1.0.0 (2024-03-15)
- Initial API release
- Basic CRUD operations
- Firebase integration

### v1.1.0 (2024-03-20)
- Added category filtering
- Improved error handling
- Added rate limiting 