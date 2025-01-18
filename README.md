# Profile Explorer Web Application

This repository contains the source code for a MERN-based web application designed to explore user profiles and their geographic locations interactively. Built using React, Node.js, Express, MongoDB, Apollo Server, and GraphQL, the application provides an engaging, user-friendly experience for managing and viewing profiles on an interactive map.

---

## Features

### Core Features:
1. **Profile Display:**
   - A responsive grid of profile cards showing user details such as name, photo, and a brief bio.
   
2. **Interactive Mapping:**
   - Integration with Mapbox or Google Maps API to display addresses interactively.
   - Dynamically updated map markers for selected profiles.

3. **Profile Summary Button:**
   - A "Summary" button to display profile-specific geographic information on the map.

4. **Search & Filter:**
   - Advanced filtering and searching by name, location, or other attributes.

5. **Admin Dashboard:**
   - Add, edit, and delete profiles with an intuitive admin panel.

### Additional Features:
- Responsive and mobile-friendly design for seamless usability across devices.
- Error handling for invalid addresses and failed API requests.
- Progress indicators during data fetching and map rendering.
- Dedicated profile details page with comprehensive user information.

---

## Technologies Used

### Frontend:
- **React.js:** Component-based architecture for dynamic UI development.
- **Apollo Client:** Integrated GraphQL queries and mutations for efficient data fetching.
- **TailwindCSS:** Modern, utility-first styling.

### Backend:
- **Node.js & Express.js:** REST API endpoints and middleware management.
- **Apollo Server with GraphQL:** Schema and resolver setup for flexible, typed API.
- **MongoDB:** Database for storing and querying user profiles.

### Mapping Services:
- **Mapbox/Google Maps API:** Interactive map rendering and geolocation services.

---

## Getting Started

### Prerequisites:
Ensure you have the following installed on your machine:
- Node.js (v16 or higher)
- MongoDB (local/Atlas)
- A Mapbox/Google Maps API key

### Installation:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url.git
   cd your-repo-url
