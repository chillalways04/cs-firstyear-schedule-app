
# Class Schedule Mobile App
**คลาส สเกดูล โมบายแอป - แอปพลิเคชันตารางเรียนสำหรับมือถือ**

## Project Description
This is a responsive mobile-first web application designed to help university students easily view and manage their class schedules. The app provides an intuitive interface optimized for iOS devices, allowing students to quickly access their daily class information including subject details, time slots, building locations, and room numbers.

**คำอธิบายโปรเจค:** แอปพลิเคชันเว็บที่ออกแบบมาสำหรับมือถือ เพื่อช่วยให้นักศึกษามหาวิทยาลัยสามารถดูและจัดการตารางเรียนได้อย่างง่ายดาย

## Key Features
- **📱 Mobile-First Design**: Optimized for iOS devices with native-like user experience
- **📅 Daily Schedule View**: Browse classes by day of the week
- **🏢 Detailed Class Information**: View subject name, time, building, floor, and room details
- **🎨 Modern UI/UX**: Clean, intuitive interface with smooth animations
- **📍 Location Information**: Complete building and room details for easy navigation
- **🔄 Responsive Design**: Works seamlessly across different screen sizes
- **⚡ Fast Navigation**: Quick access to different days and class details

## Installation and Usage

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Setup Instructions
1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - For mobile testing, access via your local network IP

### Build for Production
```bash
npm run build
npm run preview
```

## Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **Icons**: Lucide React
- **Development**: ESLint, TypeScript

## Screenshots or Demo URL
**Live Demo**: [https://lovable.dev/projects/b3d85cf5-276c-4f8a-b654-06cad77eb633](https://lovable.dev/projects/b3d85cf5-276c-4f8a-b654-06cad77eb633)

### App Preview
- **Home Screen**: Student information selection interface
- **Day Selection**: Interactive day picker with iOS-style design
- **Schedule View**: Detailed class cards with time, location, and subject information
- **Mobile Optimized**: Responsive design that works perfectly on mobile devices

*Note: Screenshots can be added to a `/screenshots` folder in the repository*

## Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── Header.tsx      # App header component
├── pages/              # Route components
│   ├── Index.tsx       # Home page
│   ├── DaySelectionPage.tsx
│   └── SchedulePage.tsx
├── data/               # Static data and types
│   └── scheduleData.ts # Schedule data and interfaces
└── App.tsx            # Main application component
```

## Project Status
**Status**: ✅ **MVP (Minimum Viable Product)**

**Current Version**: 1.0.0

**Development Phase**: Complete and ready for demonstration

### Future Enhancements
- [ ] User authentication and personalized schedules
- [ ] Class reminder notifications
- [ ] Integration with university systems
- [ ] Offline functionality
- [ ] Multiple language support (Thai/English)

## Authors
- **Nattawut Sap** - *Developer* - Initial work and full implementation
  - Faculty of Science - Computer Science
  - Contact: [Your Email/Student ID]

### Acknowledgments
- Built with modern web technologies for optimal performance
- Designed with mobile-first approach for better user experience
- Inspired by native iOS design principles

## License
**All Rights Reserved**

Copyright © 2024 Nattawut Sap

This software and associated documentation files (the "Software") are proprietary and confidential. No part of this Software may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the copyright holder, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law.

For permission requests, please contact the author.

---

**Made with ❤️ for Computer Science students**  
**สร้างด้วย ❤️ สำหรับนักศึกษาวิทยาการคอมพิวเตอร์**
