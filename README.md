# 🌱 Voltarax – Bio-Solar Panel Company Website

A modern, full-stack web application for **Voltarax Pvt Ltd**, showcasing their bio-solar panel innovation. Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Prisma (MongoDB)**.

---

## 🚀 Features

- **Green Theme with Yellow Rays** – dynamic background animations
- **Fully Responsive** – works on all screen sizes
- **Smooth Animations** – powered by Framer Motion
- **Contact Form** – saves messages to MongoDB and sends email notifications
- **Job Application Form** – allows candidates to apply with file upload
- **Newsletter Subscription** – store subscriber emails
- **Admin Dashboard** – secure login to view all submissions (contacts, applications, subscribers)
- **Prisma Studio** – visual database management
- **SEO Ready** – meta tags, open graph, favicon

---

## 🛠️ Tech Stack

| Area               | Technology |
|--------------------|------------|
| Frontend Framework | Next.js 14 (App Router) + React 18 |
| Language           | TypeScript |
| Styling            | Tailwind CSS |
| Animations         | Framer Motion |
| Database ORM       | Prisma 6 (MongoDB) |
| Database           | MongoDB Atlas (or local) |
| Authentication     | NextAuth.js (JWT) |
| Email              | Nodemailer (SMTP) |
| Icons              | React Icons |
| Forms              | React Hook Form (optional) |

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/voltarax.git
cd voltarax
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root with the following:

```env
# Database
DATABASE_URL="mongodb+srv://voltaraxpvtltd_db_user:22tIfh7eCtZJoFVK@cluster0.qyumhoz.mongodb.net/voltarax?retryWrites=true&w=majority"

# NextAuth
NEXTAUTH_SECRET="nxqKG43cTtDlxZcD/I2M2YKPohSgTKuQ5FB/eYnvUHw="
NEXTAUTH_URL="http://localhost:3000"

# Email
EMAIL_SERVER="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_USER="voltaraxpvtltd@gmail.com"
EMAIL_PASSWORD="qdokkvfhvvwlfcfv"

# Admin
ADMIN_EMAIL="admin@voltarax.com"
ADMIN_PASSWORD="admin123"
```

### 4. Generate Prisma client and push schema

```bash
npx prisma generate
npx prisma db push
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

---

## 🔐 Admin Dashboard

Access the admin panel at:

[http://localhost:3000/admin/login](http://localhost:3000/admin/login)

**Login credentials** (as set in `.env`):
- Email: `admin@voltarax.com`
- Password: `admin123`

From the dashboard, you can view all submitted contacts, applications, and newsletter subscribers.

---

## 🗄️ View Database (Prisma Studio)

To view and manage your data directly, run:

```bash
npx prisma studio
```

This opens `http://localhost:5555` with a visual interface.

---

## 📁 Project Structure

```
voltarax/
├── app/
│   ├── admin/                 # Admin dashboard & login
│   ├── api/                    # API routes (contact, applications, newsletter, auth)
│   ├── about/                  # About page
│   ├── application/            # Job application form
│   ├── contact/                # Contact form
│   ├── gallery/                # Gallery page
│   ├── sdg/                    # Sustainable Development Goals page
│   ├── team/                   # Team page
│   ├── why-choose-us/          # Why Choose Us page
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Homepage
├── components/
│   ├── layout/                 # Header, Footer, MobileMenu
│   ├── home/                   # Homepage sections
│   ├── ui/                     # Reusable UI components (buttons, cards, animations)
│   └── forms/                  # Contact and application forms
├── lib/
│   ├── db/                     # MongoDB connection
│   ├── models/                 # Prisma model wrappers (optional)
│   └── utils/                  # Email helpers, validators
├── prisma/
│   └── schema.prisma           # Database schema
├── public/
│   ├── images/                 # Team photos, gallery, SDG images
│   └── favicon.ico
├── .env                        # Environment variables
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## 📧 Email Configuration

To send email notifications for contact messages:
1. Use a Gmail account.
2. Enable **2‑Factor Authentication**.
3. Generate an **App Password** (for "Mail" and "Other").
4. Place the App Password in `EMAIL_PASSWORD` in `.env`.

For other SMTP providers, adjust `EMAIL_SERVER` and `EMAIL_PORT`.

---

## 🌐 Deployment

### Vercel (recommended)

1. Push your code to GitHub.
2. Import the repository on [Vercel](https://vercel.com).
3. Add the environment variables in the Vercel dashboard.
4. Deploy.

### Build for production

```bash
npm run build
npm start
```

---

## 📋 API Endpoints

| Method | Endpoint               | Description                     |
|--------|------------------------|---------------------------------|
| POST   | `/api/contact`         | Submit a contact message        |
| POST   | `/api/applications`    | Submit a job application        |
| POST   | `/api/newsletter`      | Subscribe to newsletter         |
| POST   | `/api/auth/...`        | NextAuth authentication routes  |

---

## 🧪 Testing with curl

**Contact:**

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Hello","message":"Test message"}'
```

**Newsletter:**

```bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"test@subscriber.com"}'
```

---

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

---

## 📄 License

This project is proprietary – © 2024 Voltarax Pvt Ltd. All rights reserved.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Prisma](https://www.prisma.io)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [NextAuth.js](https://next-auth.js.org)

---

## 📞 Contact

**Voltarax Pvt Ltd**  
A Block, 171, Shastri Nagar, Delhi - 110052  
Email: voltaraxpvtltd@gmail.com  
Phone: +91 83839451859

---

**Made with ❤️ by the Voltarax Team**