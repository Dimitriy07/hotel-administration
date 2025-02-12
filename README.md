# 🏨 Hotel Booking Administration System

Welcome to the study project - Hotel Booking Administration System, a modern and efficient web application built with React. This system is designed for internal use by hotel staff to manage bookings, cabins, users, and settings seamlessly. It provides a user-friendly interface for handling all aspects of hotel administration, from check-ins to user management.

## 🚀 Features

* **Dashboard:** Overview of key metrics and recent activities.
* **Booking Management:** 
    * View, filter, and manage all bookings.
* **Cabin Management:** 
    * Add, edit, and delete cabins.
* **User Management:** 
    * Create and manage user accounts.
* **Settings Management:** 
    * Update hotel settings and configurations.
* **Authentication:** Secure login and user authentication.
* **Responsive Design:** Fully responsive layout for optimal viewing on all devices.
* **Error Handling:** Graceful error handling and fallback UI.
* **Dark Mode:** Supports dark mode for better user experience.

## 🛠️ Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **React Router:** For client-side routing.
* **Supabase:** Backend-as-a-Service for database and authentication.
* **Styled Components:** For styling components.
* **React Query:** For data fetching and state management.
* **React Hot Toast:** For displaying notifications.
* **React Error Boundary:** For handling runtime errors gracefully.
* **Vercel:** For deployment and hosting.

## 🛠️ Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/your-username/hotel-booking-admin.git](https://github.com/Dimitriy07/hotel-administration.git)
  ```

2. **Navigate to the project directory:**

   ```bash
   cd hotel-booking-admin
  ```

3. **Install dependencies:**

   ```bash
   npm install
```

4. **Set up environment variables:**
    * Create a `.env` file in the project root.
    * Add the required environment variables (e.g., Supabase URL and key).

5. **Run the development server:**
   ```bash
   npm run dev
```

6. **Open the app in your browser:**

    The app should be running at `http://localhost:3000`. 

## 🎮 Usage

* **Login:** Access the system by logging in with your credentials.
* **Dashboard:** 
    * View an overview of key metrics and recent activities.
    * Includes filters for customizing the view.
* **Bookings:** 
    * View, filter, and manage all bookings.
    * View detailed information about each booking.
* **Cabins:** 
    * Add, edit, and delete cabins.
    * Manage cabin availability and details.
* **Users:** 
    * Create and manage user accounts.
    * Update user roles and permissions.
* **Settings:** 
    * Update hotel settings and configurations.
* **Account:** 
    * Update your account information and password.


## 🧠 Advanced Features

* **Authentication:**
    * Uses Supabase for secure user authentication.
    * Includes login, logout, and user session management.

* **Data Fetching:**
    * Uses React Query for efficient data fetching and caching.
        ```javascript
        const { data, error } = useQuery({
          queryKey: ['bookings'],
          queryFn: getBookings,
        });
        ```

* **Error Handling:**
    * Uses `react-error-boundary` to catch and handle errors gracefully.
        ```javascript
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <App />
        </ErrorBoundary>
        ```

* **Dark Mode:**
    * Supports dark mode using Context API.

## 🚀 Deployment

This project is deployed on Vercel. To deploy your own version:

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
```

2. **Deploy the app:**

   ```bash
   vercel
  ```

* Follow the prompts to complete the deployment.


## 🙏 Acknowledgments

* **Supabase:** For providing an excellent backend-as-a-service solution.
* **React Query:** For simplifying data fetching and state management.
* **Styled Components:** For making styling components efficient and enjoyable.

Enjoy managing your hotel bookings with ease! 🏨✨
