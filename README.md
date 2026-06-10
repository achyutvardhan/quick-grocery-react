# 🛒 Quick Grocery - Online Grocery Store

A modern, feature-rich e-commerce platform built with React for purchasing groceries online. The application provides a seamless shopping experience with user authentication, product browsing, shopping cart management, and order tracking.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [How Things Work](#how-things-work)
- [Context API & State Management](#context-api--state-management)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Component Guide](#component-guide)
- [Authentication Flow](#authentication-flow)
- [Data Flow](#data-flow)
- [Styling](#styling)

---

## 📱 Project Overview

**Quick Grocery** is a full-featured e-commerce application designed to simplify online grocery shopping. Users can browse products by category, add items to their cart, manage their profile, track orders, and complete purchases. The app includes a blog section, promotional offers, and customer testimonials to enhance user engagement.

**Target Users:** Customers looking to purchase groceries online conveniently  
**Primary Goal:** Provide an intuitive, responsive platform for grocery e-commerce

---

## ✨ Key Features

### 🔐 **User Authentication**
- **Login System:** Secure user login with email and password validation
- **Sign Up:** User registration with profile creation
- **Private Routes:** Protected pages accessible only to authenticated users
- **Session Management:** User profile persistence across navigation

### 🛍️ **Shopping Experience**
- **Product Catalog:** Browse all products or filter by category (Fruits, Vegetables, Dairy, Bakery, etc.)
- **Product Search:** Debounced search functionality for quick product discovery
- **Product Details:** View detailed information including price, description, and availability
- **Quick View:** "You May Also Like" section suggesting related products

### 🛒 **Shopping Cart**
- **Add to Cart:** Add items with custom quantities
- **Cart Management:** Update quantities, remove items, or clear cart
- **Cart Summary:** Real-time calculation of total items and total price
- **Cart Persistence:** Cart data synced with backend

### 💳 **Order Management**
- **Checkout:** Secure payment page for order processing
- **Order History:** View all past orders with details
- **Order Tracking:** Monitor order status (shipped, pending, etc.)
- **Order Cancellation:** Cancel orders if needed
- **Order Details:** View products, quantities, and totals per order

### 👤 **User Profile**
- **Profile Management:** View and edit user information
- **Account Details:** Store user name, email, and password
- **Profile Dropdown:** Quick access to profile, orders, and logout

### 📰 **Blog Section**
- **Blog Posts:** Read articles and tips about grocery shopping
- **Blog Cards:** Engaging card layout with images and descriptions
- **Blog Modal:** Detailed view of blog posts

### 🎯 **Special Offers & Promotions**
- **Weekly Deals:** Featured weekly discounts and promotions
- **Special Offer Page:** Dedicated section for exclusive deals
- **Partner Brands:** Display of partner brands and collaborations

### 💬 **Additional Features**
- **Contact Page:** Customer inquiry form
- **Happy Customers Section:** Testimonials and reviews
- **Partner Brands Showcase:** Affiliated brands and suppliers
- **Smooth Animations:** Framer Motion transitions for enhanced UX
- **Responsive Design:** Mobile-friendly interface for all devices
- **Loading States:** Smooth loading indicators during data fetching

---

## 🛠️ Technology Stack

### **Frontend Framework**
- **React 19.1.0** - UI library
- **React Router 7.6.2** - Client-side routing

### **State Management**
- **React Context API** - Global state management (Authentication, Cart, Orders, Profile, Data)
- **useState Hook** - Local component state

### **HTTP Client**
- **Axios 1.10.0** - HTTP requests to backend API
- **JSON Server 1.0.0-beta.3** - Mock REST API for development/testing

### **UI & Animations**
- **Framer Motion 12.18.1** - Smooth animations and transitions
- **FontAwesome 6.7.2** - Icon library
- **CSS Modules** - Component-scoped styling
- **react-loading-indicators 1.0.1** - Loading spinners

### **Development**
- **React Scripts 5.0.1** - Build and dev server tools
- **Create React App** - Project bootstrapping

---

## 📁 Project Structure

```
src/
├── App.js                          # Main app component with routing
├── App.css                         # Global styles
├── index.js                        # React entry point
├── index.css                       # Global CSS
│
├── Auth/                           # Authentication components
│   ├── Login.jsx                   # Login form page
│   ├── Signup.jsx                  # Registration form page
│   └── PrivateRoute.jsx            # Route guard for protected pages
│
├── pages/                          # Page components
│   ├── Home.jsx                    # Landing page with hero and features
│   ├── Product.jsx                 # Product catalog page
│   ├── Cart.jsx                    # Shopping cart page
│   ├── Orders.jsx                  # Order history page
│   ├── Profile.jsx                 # User profile page
│   ├── Blog.jsx                    # Blog listings page
│   ├── Contact.jsx                 # Contact form page
│   ├── SpecialOffer.jsx            # Promotions page
│   ├── Layout.jsx                  # Layout wrapper (Header + Footer)
│   ├── Header.jsx                  # Navigation header
│   ├── Footer.jsx                  # Footer component
│   └── NoPage.jsx                  # 404 error page
│
├── components/                     # Reusable UI components
│   ├── ProductCard.jsx             # Product card for catalog
│   ├── CartItemCard.jsx            # Cart item display
│   ├── OrdersCard.jsx              # Order card for order history
│   ├── FoodCard.jsx                # Featured food item
│   ├── CategoryCard.jsx            # Category selection card
│   ├── WeeklyDealsCard.jsx         # Weekly deals display
│   ├── ViewItem.jsx                # Detailed product view modal
│   ├── PaymentPage.jsx             # Checkout/payment form
│   ├── PaymentSuccess.jsx          # Order confirmation page
│   ├── BlogCard.jsx                # Blog post card
│   ├── BlogModal.jsx               # Blog post detail modal
│   ├── OutletProduct.jsx           # Product outlet/display
│   ├── Loader.jsx                  # Loading spinner
│   ├── ProfileDropdown.jsx         # User dropdown menu
│   ├── RegisterNow.jsx             # CTA for registration
│   ├── ScrollToTop.jsx             # Scroll to top button
│   ├── EmptyCart.jsx               # Empty cart message
│   └── EmptyOrders.jsx             # No orders message
│
├── Home/                           # Home page sections
│   ├── HeroBanner.jsx              # Main hero section
│   ├── TopCategory.jsx             # Top categories section
│   ├── OurProductSection.jsx       # Featured products
│   ├── YouMayAlsoLike.jsx          # Recommendations
│   ├── AppPromotionSection.jsx     # App download promo
│   ├── FoodBlogSection.jsx         # Blog preview
│   ├── HappyCustomers.jsx          # Customer testimonials
│   └── PartnerBrands.jsx           # Partner brands section
│
├── context/                        # React Context for state management
│   ├── AuthContext.jsx             # Authentication state (login/logout)
│   ├── CartContext.jsx             # Shopping cart state
│   ├── DataContext.jsx             # Product data store
│   ├── OrdersContext.jsx           # Orders state
│   └── ProfileContext.jsx          # User profile state
│
├── js/                             # API fetching functions
│   ├── productFetch.js             # Fetch all products
│   ├── cartFetch.js                # Cart CRUD operations
│   ├── orderFetch.js               # Order CRUD operations
│   └── ProfileFetch.js             # User login/signup
│
├── hooks/                          # Custom React hooks
│   ├── useDebouncing.js            # Debounce hook for search
│   └── useScrollToTop.js           # Auto scroll to top on navigation
│
├── css/                            # CSS Module files (scoped styling)
│   ├── login.module.css            # Login page styles
│   ├── signup.module.css           # Signup page styles
│   ├── product.module.css          # Product page styles
│   ├── orders.module.css           # Orders page styles
│   ├── profile.module.css          # Profile page styles
│   ├── PaymentPage.css             # Payment/checkout styles
│   ├── BlogModal.css               # Blog modal styles
│   ├── footer.module.css           # Footer styles
│   ├── contact.module.css          # Contact page styles
│   ├── offer.module.css            # Special offers styles
│   ├── HappyCustomers.module.css   # Testimonials styles
│   └── PartnerBrands.module.css    # Partner brands styles
│
├── json/
│   └── db.json                     # Mock database (JSON Server)
│
└── assets/
    └── [images and media files]    # Product images, backgrounds, etc.
```

---

## 🔄 How Things Work

### **Application Flow**

1. **App Initialization**
   - App.js loads and fetches products from the backend using `productFetch()`
   - Data is stored in `DataContext` via `responseHandler()`
   - A loading spinner displays until data is ready (800ms timeout)

2. **Routing**
   - All routes are wrapped in a Layout component (Header + Outlet + Footer)
   - Public routes: Home, Products, Blog, Contact, SpecialOffer, Login, Signup
   - Protected routes: Cart, Profile, Orders (require authentication via PrivateRoute)

3. **Authentication**
   - Users login/signup through dedicated pages
   - Credentials validated against the backend
   - `AuthContext` tracks login state
   - `ProfileContext` stores user information
   - PrivateRoute component checks authentication before rendering

4. **Shopping Flow**
   - User browses products in the Product page
   - Clicks on a product to view details in ViewItem modal
   - Selects quantity and adds to cart
   - Cart data is managed through `CartContext` and synced with backend
   - User navigates to Cart page to review items
   - Proceeds to PaymentPage for checkout
   - Order is created and stored in backend

---

## 🧠 Context API & State Management

The app uses **React Context API** for global state management with five main contexts:

### **1. AuthContext** (`context/AuthContext.jsx`)
```javascript
Manages: { loggedIn (boolean), login(), logout() }
Purpose: Track user authentication status
Usage: Check if user is logged in, enable/disable private routes
```

### **2. ProfileContext** (`context/ProfileContext.jsx`)
```javascript
Manages: { profile (object), setProfile(profile) }
Purpose: Store current user's profile information
Usage: Access user ID, name, email across the app
```

### **3. CartContext** (`context/CartContext.jsx`)
```javascript
Manages: {
  cartItem (object with items array),
  refreshFetch() - sync cart with backend,
  noOfItems() - total item count,
  totalSum() - calculate cart total price
}
Purpose: Handle shopping cart state and calculations
Usage: Display cart items, update quantities, calculate totals
```

### **4. OrdersContext** (`context/OrdersContext.jsx`)
```javascript
Manages: {
  orders (array),
  refreshOrders() - fetch user's orders,
  noOfOrders() - count of orders
}
Purpose: Manage user's order history
Usage: Display past orders, track order status
```

### **5. DataContext** (`context/DataContext.jsx`)
```javascript
Manages: {
  data (array of all products),
  responseHandler(data) - set product data
}
Purpose: Store all product data globally
Usage: Access product catalog from any component
```

---

## 🌐 API Endpoints

The app communicates with a **JSON Server** (mock backend) at `http://localhost:3000`. Here are all endpoints:

### **Products**
```
GET /product
  → Fetch all products
  → Response: Array of product objects
  → Used in: productFetch.js
```

### **User Profile**
```
GET /profile?email={email}
  → Fetch user profile by email
  → Response: User object array

POST /profile
  → Create new user account
  → Body: { name, email, password }
  → Response: Created user object

Used in: ProfileFetch.js for login/signup
```

### **Shopping Cart**
```
GET /cartItems?userId={userId}
  → Fetch cart for specific user
  → Response: Cart object with items array

POST /cartItems
  → Create new cart
  → Body: { userId, items: [] }

PATCH /cartItems/{cartId}
  → Update cart items
  → Body: { items: [] }

Used in: cartFetch.js for cart operations
```

### **Orders**
```
GET /orders?userId={userId}
  → Fetch all orders for user
  → Response: Orders object with order array

POST /orders
  → Create new order record
  → Body: { userId, order: [] }

PATCH /orders/{orderId}
  → Update order (add new orders or cancel)
  → Body: { order: [] }

Used in: orderFetch.js for order operations
```

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v14 or higher)
- npm or yarn
- Git

### **Installation**

1. **Clone the repository**
```bash
git clone <repository-url>
cd quick-grocery-react/quick-grocery
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the JSON Server (mock backend)** - in a new terminal
```bash
# Navigate to project root if needed
npx json-server --watch src/json/db.json --port 3000
```

4. **Start the React development server** - in another terminal
```bash
npm start
```

5. **Open in browser**
- Application runs on `http://localhost:3000`
- JSON Server runs on `http://localhost:3000` (same port)

---

## 📜 Available Scripts

In the project directory, you can run:

### **`npm start`**
- Runs the app in development mode
- Opens [http://localhost:3000](http://localhost:3000) automatically
- Page reloads on file changes
- Console displays lint errors

### **`npm run build`**
- Builds the app for production
- Output folder: `build/`
- Minified and optimized for best performance
- Ready for deployment

### **`npm test`**
- Launches test runner in interactive watch mode
- Runs unit and integration tests
- See [testing documentation](https://facebook.github.io/create-react-app/docs/running-tests)

### **`npm run eject`**
- ⚠️ **One-way operation** - cannot be undone
- Ejects from Create React App
- Gives full control over configuration
- Not recommended unless necessary

---

## 🧩 Component Guide

### **Page Components**

| Component | Path | Purpose |
|-----------|------|---------|
| **Home** | pages/Home.jsx | Landing page with hero banner, categories, products, deals |
| **Product** | pages/Product.jsx | Product catalog with category filtering |
| **Cart** | pages/Cart.jsx | Shopping cart management and review |
| **Orders** | pages/Orders.jsx | Order history and tracking |
| **Profile** | pages/Profile.jsx | User account information |
| **Blog** | pages/Blog.jsx | Blog post listings |
| **Contact** | pages/Contact.jsx | Customer contact form |
| **SpecialOffer** | pages/SpecialOffer.jsx | Promotional offers |

### **Reusable Components**

| Component | Purpose |
|-----------|---------|
| **ProductCard** | Displays individual product with price and add-to-cart |
| **CartItemCard** | Shows cart item with quantity controls |
| **OrdersCard** | Displays order summary with status |
| **ViewItem** | Modal for detailed product view |
| **PaymentPage** | Checkout form and payment processing |
| **BlogCard** | Blog post preview card |
| **CategoryCard** | Product category selector |
| **Loader** | Loading spinner animation |
| **ProfileDropdown** | User menu dropdown |
| **EmptyCart/EmptyOrders** | Placeholder for empty states |

### **Home Page Sections**

| Component | Purpose |
|-----------|---------|
| **HeroBanner** | Main hero section with large image |
| **TopCategory** | Featured product categories |
| **OurProductSection** | Highlighted products |
| **YouMayAlsoLike** | Product recommendations |
| **FoodBlogSection** | Blog post previews |
| **HappyCustomers** | Customer testimonials carousel |
| **PartnerBrands** | Partner logos and brands |
| **AppPromotionSection** | Mobile app download CTA |

---

## 🔐 Authentication Flow

```
┌─────────────┐
│   User      │
└──────┬──────┘
       │
       ├─→ [Login/Signup Page]
       │
       ├─→ Submit email & password
       │
       ├─→ ProfileFetch.js validates credentials
       │   └─→ GET /profile?email={email}
       │
       ├─→ If valid:
       │   ├─→ AuthContext.login()
       │   ├─→ ProfileContext.setProfile(userData)
       │   └─→ Navigate to Home
       │
       ├─→ If invalid:
       │   └─→ Show error message
       │
       ├─→ PrivateRoute checks AuthContext
       │   └─→ If loggedIn: render protected page
       │   └─→ If not: redirect to Login
```

---

## 📊 Data Flow

### **Product Browsing Flow**
```
App Component
    ↓
App.js: useEffect calls productFetch()
    ↓
productFetch.js: GET /product
    ↓
DataContext.responseHandler(data)
    ↓
All Components can access products via useContext(DataContext)
```

### **Shopping Cart Flow**
```
ProductCard [Add to Cart]
    ↓
ViewItem/ProductCard calls postFromViewItem()
    ↓
Check if cart exists for user
    ├─→ No: POST /cartItems (create new)
    └─→ Yes: PATCH /cartItems (update items)
    ↓
CartContext.refreshFetch() syncs state
    ↓
CartItemCard displays updated items
```

### **Order Creation Flow**
```
PaymentPage [Confirm Purchase]
    ↓
orderFetch.js: postFromCart()
    ↓
Generate unique order ID and group items
    ↓
Check if orders exist for user
    ├─→ No: POST /orders (create new)
    └─→ Yes: PATCH /orders (add to array)
    ↓
PaymentSuccess page shows confirmation
```

---

## 🎨 Styling

The project uses **CSS Modules** for component-scoped styling to avoid naming conflicts:

### **Module-Based CSS Files**
- **login.module.css** - Authentication pages
- **product.module.css** - Product catalog
- **orders.module.css** - Order pages
- **profile.module.css** - User profile
- **contact.module.css** - Contact form
- **footer.module.css** - Footer component

### **Inline Styles**
```javascript
// Example: Loader component
style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "60vh",
  width: "100%",
}}
```

### **Animations**
Uses **Framer Motion** for smooth transitions:
```javascript
import { motion, AnimatePresence } from "framer-motion";

// Example variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20 }
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {/* content */}
</motion.div>
```

---

## 🔍 Debugging Tips

### **Check Authentication State**
```javascript
const { loggedIn } = useContext(AuthContext);
console.log("Logged in?", loggedIn);
```

### **Inspect Cart State**
```javascript
const { cartItem, totalSum, noOfItems } = useContext(CartContext);
console.log("Cart:", cartItem, "Total:", totalSum(), "Items:", noOfItems());
```

### **Check Product Data**
```javascript
const { data } = useContext(DataContext);
console.log("All products:", data);
```

### **Monitor Network Requests**
- Open Browser DevTools (F12)
- Go to Network tab
- Watch API calls to `http://localhost:3000`
- Check response status and data

---

## 🚢 Deployment

### **Build for Production**
```bash
npm run build
```

### **Deployment Platforms**
- **Vercel** - Recommended for React apps (zero-config deployment)
- **Netlify** - Easy drag-and-drop or Git integration
- **GitHub Pages** - Free hosting for static sites
- **AWS**, **Azure**, **Heroku** - Full-fledged hosting solutions

### **Environment Configuration**
Update API endpoints in `/src/js/*Fetch.js` files for production:
```javascript
// Development
const API_URL = "http://localhost:3000";

// Production
const API_URL = process.env.REACT_APP_API_URL;
```

---

## 📝 Notes & Best Practices

- ✅ Always run JSON Server before starting the React app
- ✅ Use Context for global state; useState for local component state
- ✅ Debounce search inputs to reduce unnecessary API calls
- ✅ Clear cart/orders after successful purchase
- ✅ Validate user input on login/signup
- ✅ Use CSS Modules to prevent style conflicts
- ✅ Lazy load images for better performance
- ✅ Add error boundaries for better error handling

---

## 🤝 Contributing

1. Create a new branch for features: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "Add feature description"`
3. Push to branch: `git push origin feature/your-feature`
4. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Coding! 🎉** If you have questions, refer to the component source code or open an issue.
