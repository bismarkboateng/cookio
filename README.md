# Recipe App

This is a Recipe App built using **Next.js 14**. The app allows users to perform CRUD operations, generate shareable 
links, and share them on popuplar platforms like whatsapp and twitter. It integrates with **Firebase Firestore** for data storage and management, and **Supabase Storage** for storing recipe images.
This README will guide you through setting up and running the app locally.

## Features

- **User Authentication**: Users can sign in and manage their recipes.
- **Create and Edit Recipes**: Users can add and update recipes with titles, categories, tags, and instructions.
- **Shareable links**: Generate a public link to share with your audience
- **Responsive Design**: The app is fully responsive and works well on both mobile and desktop devices.



## Table of Contents

- [Installation](#installation)
- [Setup Firebase](#setup-firebase)
- [Running Locally](#running-locally)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

---

## Installation

To get started with the Recipe App, follow these steps:

### Prerequisites

- **Node.js** (v14.x or higher) installed. You can download it from [here](https://nodejs.org/).
- **Yarn** or **npm** for package management.

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/recipe-app.git
cd recipe-app

### 2. Install Dependencies

After cloning the repository, install the required dependencies using **npm** or **yarn**:

```bash
npm install


## Setup Firebase

This app uses **Firebase Firestore** to store recipes. To use it locally, you'll need to set up a Firebase project and configure Firestore.

### 1. Create a Firebase Project

- Go to [Firebase Console](https://console.firebase.google.com/).
- Create a new project (or use an existing one).
- Enable **Firestore** in your project.

### 2. Create Firebase Configuration

- Go to your Firebase Console and click on the "Project settings" (gear icon) in the top left.
- Under **Firebase SDK snippet**, choose **Config** and copy the configuration object.
  
### 3. Add Firebase Config to the Project

Create a `.env.local` file in the root directory of the project and add your Firebase config values:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

## Running Locally

Now that everything is set up, you can run the app locally.

### 1. Start the Development Server

Run the following command to start the Next.js development server:

```bash
npm run dev


By default, the app will be available at http://localhost:3000.

## Open the App

Open your browser and navigate to http://localhost:3000. You should see the Recipe App running locally!

## Technologies Used

- **Next.js 14**: The React framework for building the app.
- **Firebase**: Firestore for data storage and authentication.
- **Tailwind CSS**: Utility-first CSS framework for styling the app.
- **TypeScript**: For type safety (if you're using TypeScript).
- **Vercel**: For deploying the app to production.

---

## Contributing

Contributions are welcome! If you'd like to contribute to the Recipe App, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to your branch (`git push origin feature-branch`).
6. Open a pull request.