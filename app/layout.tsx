
// app/layout.js

import './globals.css';

export const metadata = {
  title: 'Next.js 13 Course Platform',
  description: 'A simple platform to learn and explore courses',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Course Platform</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 Course Platform. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
