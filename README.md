# 🧪 Technical Assessment: Build a Reusable Hero Component (Next.js + CSS Modules)

Welcome! This technical assessment is designed to evaluate your ability to build a reusable, CMS-friendly Hero section in a modern Next.js codebase. You’ll be asked to create a scalable Hero component similar to one used in production at Rho. This challenge focuses on:

- Component-driven development  
- Clean and scalable HTML/CSS architecture  
- Dynamic layout logic  
- Developer/Designer collaboration best practices  

---

## 🧠 Objective

Create a reusable Hero component in **Next.js** (no styled-components). It should:

- Render a full-width image background  
- Accept a title and description as content  
- Allow flexible placement of text using CSS Grid  

---

## ✅ Requirements

### 🔧 Tech

- Use **Next.js** with functional components  
- Use **CSS Modules** for styling  
- No styled-components, Tailwind, or other styling libraries  

### 📦 Functionality

Your component should:

1. Accept a background image (`src` + `alt`)  
2. Accept a `title` and `description`  
3. Support flexible placement via props (e.g. `placeTitle`, `placeDescription`)  
4. Render content in a responsive layout with CSS Grid  
5. Be visually clean, semantic, and accessible  

### 🏗️ Props

| Prop              | Type     | Description                                                  |
|-------------------|----------|--------------------------------------------------------------|
| `src`             | string   | URL of background image                                      |
| `alt`             | string   | Alt text for image                                           |
| `title`           | string   | Title text to display                                        |
| `placeTitle`      | string   | Grid placement for the title (e.g. `"center"`, `"end start"`)|
| `description`     | string   | Description text to display below the title                 |
| `placeDescription`| string   | Grid placement for the description                           |

---

## 📁 Folder Structure Example

.
├── components
│   └── Hero
│       ├── Hero.jsx
│       └── Hero.module.css
├── pages
│   └── demo.js
├── public
│   └── sample-image.jpg
├── README.md
└── package.json

---

## 🎯 Task

1. Fork this repo  
2. Build the `Hero` component inside `components/Hero`  
3. Create a demo page at `/demo` that shows 2–3 different uses:
   - One with default placement  
   - One using different `placeTitle` / `placeDescription` values  
   - One with longer text to test layout flexibility  
4. Submit a Pull Request when you’re ready  

---

## 🧩 Bonus (Optional)

- Add simple hover or fade-in animation  
- Use semantic HTML elements (e.g. `<header>`, `<h1>`, `<p>`, etc.)  
- Make sure it’s keyboard accessible  

---

## ✅ Evaluation Criteria

- Code readability and structure  
- Use of props and layout logic  
- CSS organization (modularity, responsiveness, maintainability)  
- Ability to follow detailed requirements  
- Developer empathy and UX quality  

---

Thanks for your time—we’re excited to see what you build!

— Rho Marketing Engineering Team