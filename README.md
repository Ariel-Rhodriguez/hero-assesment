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