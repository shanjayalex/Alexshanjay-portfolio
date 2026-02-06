# Alex Portfolio Admin System

A modern, secure admin dashboard for managing your creative portfolio works.

## Features

### 🔐 Authentication System
- Secure login with credentials
- Session management
- Auto-logout protection
- Remember me functionality

### 📊 Dashboard Overview
- Real-time statistics (videos, photos, views, likes)
- Recent uploads display
- Performance metrics
- Quick access to all features

### 📤 Upload Management
- Drag & drop file upload
- Support for videos (MP4, MOV, AVI) and images (JPG, PNG, GIF)
- File size validation (500MB limit)
- Progress tracking
- Metadata management (title, description, category, tags)

### 🎨 Portfolio Management
- Grid/List view options
- Edit existing works
- Delete unwanted content
- Category organization
- Search and filter capabilities

### 📈 Analytics
- Views over time tracking
- Popular categories analysis
- Engagement metrics
- Performance insights

### ⚙️ Settings
- Profile management
- Security settings
- Site configuration
- Maintenance mode

## Login Credentials

**Username:** `admin`  
**Password:** `alex2024`

> 🔒 **Security Note:** In production, these should be replaced with secure server-side authentication.

## File Structure

```
assets/
├── admin-login.html          # Login page
├── admin-dashboard.html      # Main admin dashboard
├── portfolio-new.html        # Public portfolio site
└── README-ADMIN.md          # This documentation
```

## Getting Started

1. **Access the Admin Panel:**
   - Open `admin-login.html` in your browser
   - Enter credentials: `admin` / `alex2024`
   - Click "Sign In"

2. **Upload New Work:**
   - Navigate to "Upload Works" section
   - Fill in title, description, category
   - Drag & drop or click to select file
   - Add tags for better organization
   - Click "Upload Work"

3. **Manage Portfolio:**
   - View all uploaded works in "Portfolio" section
   - Edit or delete existing content
   - Switch between grid and list views

4. **Monitor Performance:**
   - Check "Analytics" section for insights
   - Track views and engagement
   - Identify popular content

## Design Features

### Modern UI/UX
- Glass morphism effects
- Gradient animations
- Smooth transitions
- Responsive design
- Dark theme optimized

### Interactive Elements
- Hover effects and micro-interactions
- Loading animations
- Progress indicators
- Success/error notifications
- Mobile-friendly navigation

### Security Features
- Client-side authentication (demo)
- Session management
- Input validation
- File type restrictions
- Size limitations

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Mobile Responsiveness

The admin dashboard is fully responsive and works seamlessly on:
- Desktop (1920x1080 and above)
- Tablet (768px-1024px)
- Mobile (320px-768px)

## Customization

### Colors & Theme
The design uses a modern gradient color scheme:
- Primary: Blue to Purple gradients
- Background: Dark theme with glass effects
- Accent: Animated gradient text

### Fonts
- Primary: Space Grotesk (Google Fonts)
- Icons: Font Awesome 6.5.1

### Animations
- Floating background orbs
- Shimmer effects on hover
- Smooth page transitions
- Loading spinners

## Future Enhancements

### Backend Integration
- Connect to database (MySQL/MongoDB)
- Implement server-side authentication
- API endpoints for CRUD operations
- Cloud storage integration (AWS S3)

### Advanced Features
- Bulk upload functionality
- Advanced search and filtering
- Scheduled publishing
- Social media integration
- Client collaboration tools

### Security Improvements
- Two-factor authentication
- Role-based access control
- Activity logging
- IP whitelisting

## Support

For any issues or questions about the admin system, please refer to the code comments or contact the development team.

---

**Note:** This is a frontend demonstration. In production, ensure proper backend implementation for security and data persistence.
