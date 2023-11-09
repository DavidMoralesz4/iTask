import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet='UTF-8'></meta>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
        <title>iTask</title>
        <link rel='icon' href='./icons8-task-96.png'></link>
      </head>

      <body>
        {children}
      </body>
    </html>
  )
}
