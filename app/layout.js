import './globals.css'
import localFont from 'next/font/local'
import Script from 'next/script'
const Font = localFont({
  src: './fonts/LXGW.ttf',
  display: 'swap'
})
export const metadata = {
  title: 'nvme0n1p1',
  description: 'the homepage of nvme0n1p1'
}

export default function RootLayout ({ children }) {
  //大概是管所有的最基础页面吧

  return (
    <html lang='zh-CN'>
      <Script src='/cursor.js'></Script>
      <body className={Font.className}>
        <div className='flex items-start justify-center h-screen'>
          {children}
        </div>
      </body>
    </html>
  )
}
