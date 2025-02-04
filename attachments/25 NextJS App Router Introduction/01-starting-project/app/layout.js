/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import './globals.css'

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h2>this is layout from root</h2>
        {children}
        </body>
    </html>
  );
}
