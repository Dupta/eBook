# 📘 eBook Platform

A modern, responsive **online book reading and sharing platform** built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  
The platform allows users to explore books, view detailed descriptions, and read online — featuring realistic book designs, elegant typography, and responsive layouts.

---

## 🌟 Features

- **Dynamic Book Library** – Browse a curated collection of books from local mock data (JSON)
- **Book Detail Pages** – Individual pages with book cover, author info, and detailed descriptions
- **3D Book Card Effect** – Realistic covers with spine shadows and hover animations
- **Responsive Design** – Perfectly optimized for mobile, tablet, and desktop
- **Sticky Navbar** – Always visible at the top for smooth navigation
- **TypeScript Support** – Full type safety for maintainable code
- **Local JSON Backend (Temporary)** – Mock API data until backend integration
- **Easy Deployment** – Ready for deployment on Vercel

---

## 🛠️ Tech Stack

| Technology                                                     | Purpose                                            |
| -------------------------------------------------------------- | -------------------------------------------------- |
| [Next.js 14](https://nextjs.org/)                              | React framework for SSR, routing, and optimization |
| [TypeScript](https://www.typescriptlang.org/)                  | Type-safe JavaScript for scalable code             |
| [Tailwind CSS](https://tailwindcss.com/)                       | Modern utility-first CSS framework                 |
| [Next/Image](https://nextjs.org/docs/api-reference/next/image) | Optimized image rendering                          |
| [Geist Fonts](https://vercel.com/font)                         | Clean modern typography for readability            |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/eBook.git
cd eBook
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

The app will be available at:  
👉 **http://localhost:3000**

---

## 📁 Folder Structure

```
eBook/
├── src/
│   ├── app/
│   │   ├── (home)/
│   │   │   ├── components/
│   │   │   │   ├── Banner.tsx
│   │   │   │   ├── BookList.tsx
│   │   │   │   └── BookCard.tsx
│   │   │   └── page.tsx
│   │   ├── book/
│   │   │   └── [bookId]/
│   │   │       └── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Hexagon.tsx
│   ├── data/
│   │   └── books.json
│   └── styles/
│       └── tailwind.config.ts
└── package.json
```

---

## 💡 Future Enhancements

- 🔐 **Authentication** (NextAuth / Firebase)
- ❤️ **Favorites & Bookmarks**
- 💬 **User Reviews & Ratings**
- ⚙️ **Real Backend Integration** (Express.js / Node API)
- 🌙 **Dark Mode Support**
- 🧭 **Admin Dashboard for Book Management**

---

## 🧠 Key Learnings

- Implemented **dynamic routing** with Next.js App Router
- Created **reusable book card components**
- Learned **3D UI design** with Tailwind CSS
- Practiced **component-based architecture** and mock data integration
- Built a **frontend-first project** ready for backend integration

---

## 🤝 Contributing

Contributions are welcome! 🎉

1. **Fork** the repository
2. **Create a new branch** (`feature/your-feature`)
3. **Commit** your changes
4. **Push** to your branch
5. **Submit a Pull Request**

---

## 🧑‍💻 Author

**Divyansh (Dupta)**  
[GitHub](https://github.com/Dupta) • [LinkedIn](https://linkedin.com/in/divyansh-gupta-798072250/)

---

## 🧩 Tagline

> **Read. Learn. Grow.**  
> A digital bookshelf built for curious minds 📚

---

## 🧠 Notes

- Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.
- When you deploy, add your live link below:

```markdown
## 🌍 Live Demo

[View Live](https://ebook.dupta.vercel.app)
```
