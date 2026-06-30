# Hospital Management System

A modern, full-stack clinic and hospital management web application built with React, Vite, and Supabase. This application provides a comprehensive platform for patients to browse services, view doctors, book appointments, and manage their accounts.

## Features

- **Landing Page**: Professional homepage showcasing the hospital's services and offerings
- **Services Display**: Detailed information about medical services provided
- **Doctors Directory**: Browse and view profiles of available doctors and specialists
- **Contact Information**: Easy access to hospital contact details and location
- **User Authentication**: Secure login and registration system powered by Supabase
- **Appointment Booking**: Interactive booking system with date selection
- **Responsive Design**: Mobile-friendly interface using Material UI components
- **Session Management**: Real-time authentication state tracking

## Live Demo

https://project-ddbh6.vercel.app/

## Tech Stack

### Frontend

- **React 19.2.6** - UI library
- **Vite 8.0.12** - Build tool and development server
- **React Router DOM 7.18.0** - Client-side routing
- **Material UI 9.1.1** - UI component library
- **Emotion** - CSS-in-JS styling (included with MUI)

### Backend & Services

- **Supabase** - Authentication, database, and real-time subscriptions
  - @supabase/supabase-js 2.108.1
  - @supabase/ssr 0.12.0

  ### Authentication

- Uses Supabase Auth for secure user authentication
- Session management with real-time state updates
- Login and registration forms with validation

## Authorization

The system includes role-based authorization to control access to specific pages and actions.

Authenticated users can access booking-related features
Unauthorized users are redirected away from protected routes
Admin or staff roles can access management pages
Access to sensitive actions is restricted based on user permissions

This helps keep the application secure and ensures users only interact with the features they are allowed to use.

### Utilities

- **date-fns 4.4.0** - Date manipulation and formatting
- **react-datepicker 9.1.0** - Date picker component
- **SweetAlert2 11.26.25** - Beautiful alert notifications

### Development Tools

- **ESLint** - Code linting and quality assurance
- **@vitejs/plugin-react** - React plugin for Vite

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager
- A Supabase project account (for authentication and database)

## Project Structure

```
hospital/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Auth/        # Authentication components
│   │   ├── Booking/     # Appointment booking
│   │   ├── Contacts/    # Contact information
│   │   ├── Doctors/     # Doctor profiles
│   │   ├── Footer/      # Footer component
│   │   ├── Landing/     # Landing page
│   │   ├── LogIn/       # Login and registration
│   │   ├── Navbar/      # Navigation bar
│   │   ├── Oursevices/  # Services display
│   │   ├── Services/    # Service components
│   │   └── utils/       # Utility functions (Supabase client)
│   ├── assets/          # Images and static resources
│   ├── fontawesome-free-7.1.0-web/  # Font Awesome icons
│   ├── images/          # Additional images
│   ├── styles/          # Global styles
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global CSS
├── .env                 # Environment variables
├── .gitignore          # Git ignore rules
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML template
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Routing

- React Router handles client-side navigation
- Routes include:
  - `/` - Home page with landing, services, doctors, and contacts
  - `/login` - User login page
  - `/createAcount` - User registration page
  - `/booking` - Appointment booking page

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Improvements

Planned features include:

Appointment management
Email notifications
Appointment reminders
Search and filtering
Analytics dashboard
Multi-clinic support

## GitHub Repository

https://github.com/assadabdo/Full-Stack-Clinic-

## Author

Assad Abdo

Frontend Developer specializing in React and modern web technologies.

## License

This project is private and proprietary.

## Support

For support and questions, please contact the development team.
