## Webscribe: Your AI-Powered Web Content Assistant

This repository houses Webscribe, a powerful web application built with Next.js, Tailwind CSS, and TypeScript. Webscribe is designed to help you create, analyze, and manage web content with the aid of AI.

### Features

* **AI-powered content generation:**  Leverage powerful AI models to generate high-quality content for your website, including articles, blog posts, social media updates, and more.
* **Content analysis and optimization:** Get insights into your existing content, identify areas for improvement, and receive suggestions for SEO optimization.
* **Effortless web scraping:** Crawl websites and extract data, making it easy to gather information and build datasets for various purposes.
* **Intuitive user interface:** A clean and user-friendly interface built with Next.js and Tailwind CSS for an enjoyable and efficient experience.
* **Built with TypeScript:** Enjoy the benefits of static typing for improved code quality, maintainability, and readability.

### Project Structure

The repository is structured as follows:

```
└── app
    └── api
        └── chat
            └── route.ts
        └── crawl
            └── route.ts
                └── [jobId]
                    └── route.ts
    └── favicon.ico
    └── globals.css
    └── layout.tsx
    └── page.tsx
└── components.json
└── components
    └── mainpage.tsx
    └── theme-provider.tsx
        └── ui
            └── button.tsx
            └── input.tsx
            └── label.tsx
            └── radio-group.tsx
            └── switch.tsx
└── lib
    └── utils.ts
└── next.config.mjs
└── package-lock.json
└── package.json
└── postcss.config.mjs
└── public
    └── next.svg
    └── vercel.svg
└── tailwind.config.ts
└── tsconfig.json

```

* **app:** Contains the Next.js application code, including pages, components, and API routes.
* **components:** Houses reusable UI components for building the application interface.
* **lib:** Includes utility functions and shared logic for the application.
* **public:** Contains static assets such as images and icons.

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/webscribe.git
   ```

2. **Install dependencies:**
   ```bash
   cd webscribe
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Set Environment Variables**
   ```bash
    #Google Generative AI API Key
    # Obtain from https://aistudio.google.com/app/apikey
    GOOGLE_GENERATIVE_AI_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    create .env.local file and put it in that
   ```

4. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Contact

For any inquiries or support, please contact the project maintainer at [your-email@example.com](your-email@example.com).
