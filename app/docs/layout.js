// app/docs/layout.js
// custom

export const metadata = {
  title: "gopalasu - REST API Documentation",
  description: "simple REST API created by Gopalasu !",
  keywords: "Hello Word",
  openGraph: {
    title: "gopalasu - REST API Documentation",
    description:
      "docs.gopalasu.my.id is a free, simple REST API created by Gopalasu for the common good. Feel free to use it, but please avoid DDoS attacks.",
    url: "https://docs.gopalasu.my.id",
    type: "website",
    images: [
      {
        url: "https://files.catbox.moe/7zjrpc.png",
        width: 800,
        height: 800,
        alt: "gopal Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}