# 🎓 PAF-IAST University Website

> A modern, fully responsive frontend landing page for the **Pak-Austria Fachhochschule Institute of Applied Sciences and Technology**. This project features dynamic UI components, scroll animations, and a fully functional contact form that routes messages directly to an email inbox without requiring a backend server.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| 📱 **Responsive UI** | Fluid layouts utilizing CSS Grid and Flexbox that adapt perfectly to desktop, tablet, and mobile displays. |
| 🗺️ **Interactive Nav** | Sticky header with active scroll-section highlighting and a mobile-friendly hamburger toggle menu. |
| 🖼️ **Dynamic Slider** | Automated hero image slideshow with pause-on-hover functionality and manual navigation controls. |
| 💫 **Scroll Reveal** | Elements smoothly animate into view as the user scrolls down utilizing the Intersection Observer API. |
| ✉️ **Live Contact Form**| Fully integrated with EmailJS to securely capture and route user inquiries (Name, Email, Message). |

---

## 🛠️ Technologies Used

> Built entirely with core web technologies for maximum performance, ensuring lightweight delivery with zero heavy dependencies.

* **HTML5:** Semantic markup and optimized structure.
* **CSS3:** Custom styling, CSS variables, animations, and responsive media queries.
* **Vanilla JavaScript (ES6+):** DOM manipulation, state management, form validation, and API handling.
* **EmailJS:** Client-side email sending service.
* **FontAwesome:** Scalable vector icons for improved visual hierarchy.

---

## 🚀 Quick Start & Installation

> No complex build tools, package managers, or local servers are required to run this project!

**1. Clone the repository:**
git clone [https://github.com/your-username/paf-iast-website.git](https://github.com/your-username/paf-iast-website.git)

**2. Verify the project architecture:

---
```
📦 paf-iast-website
 ┣ 📂 img/              # Contains all website assets and banners
 ┣ 📜 index.html        # Main HTML structure
 ┣ 📜 styles.css        # Main stylesheet
 ┗ 📜 script.js         # Interactive logic and EmailJS configuration
```
 ---

3. Launch:
Simply double-click index.html to open it in your preferred web browser.

⚙️ EmailJS Configuration Block
Note: The contact form is pre-configured for the ahmedmusfira3@gmail.com inbox. If you need to update the API keys in the future, follow these steps:

* Log into your EmailJS Dashboard.

* Ensure your email template variables exactly match the hidden and active form names: {{name}}, {{email}}, {{message}}, {{title}}, and {{time}}.

* Locate Section 8 in the script.js file and verify the integration keys:

JavaScript
// Initialization
emailjs.init("txNa-z1HaVlu7i3TR"); 

// Form Submission Execution
emailjs.sendForm('service_fq9r83n', 'template_pd9ltcp', this)

💻 Author
Musfira Ahmed

Frontend Developer & Software Engineer

Built with ❤️ to showcase modern frontend architecture and seamless client-side API integration.
