/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import './globals.css';

export const metadata = {
  title: 'React RSC, Server Actions & More',
  description: 'A thorough demo of advanced React features.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
