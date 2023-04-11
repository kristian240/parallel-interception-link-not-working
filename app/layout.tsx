export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My App</title>
        <style>
          {`.container {
            border: 2px solid #000;
            padding: 10px;
            margin: 10px 0;
          }`}
        </style>
      </head>

      <body>{children}</body>
    </html>
  );
}
