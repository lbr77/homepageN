import './globals.css'
import localFont from 'next/font/local'
import Script from 'next/script'
import CopyRight from '@/components/copyright'
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
          <div className='block absolute left-1/8 w-3/4 py-12 sm:left-1/4 sm:w-1/2 sm:py-40s'>
            {children}
            <CopyRight></CopyRight>
          </div>
        </div>
      </body>
    </html>
  )
}
