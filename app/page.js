import Image from 'next/image'
import Link from 'next/link'
export default function Home () {
  return (
    <div className='container'>
      <div className='block absolute left-1/8 w-3/4 py-12 sm:left-1/4 sm:w-1/2 sm:py-40'>
        <div className='mt-4 flex items-center justify-center'>
          {/* 文字框 */}
          <div>
            <p className='text-5xl tracking-wider mb-3 h-14 '>Hi.</p>
            <p className='font-bold text-xl'>
              这里是
              <ruby>
                <rb>溴化锂</rb>
                <rt>LiBr</rt>
              </ruby>
              ，一个普通的失业高三学生。
            </p>
            <br></br>
            <p className=''>
              他来自四川成都，曾经就读于
              <Link
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.cdshishi.net/'
                className='hover:text-sky-700'
              >
                成都石室中学
              </Link>
              ，学过OI，也学过数学竞赛，然无疾而终。
            </p>
            <p className=''>
              他会在
              <Link
                target='_blank'
                rel='noopener noreferrer'
                href='blog.nvme0n1p.dev'
                className='hover:text-sky-700'
              >
                <ruby>
                  <rb>博客</rb>
                  <rt>/blog</rt>
                </ruby>
              </Link>
              记录自己感兴趣的东西，在
              <Link href='/contacts' className='hover:text-sky-700'>
                <ruby>
                  <rb>社交媒体</rb>
                  <rt>/contacts</rt>
                </ruby>
              </Link>
              中分享自己的生活。
            </p>
            <p className=''>
              从某种意义上来说，他是个社牛（？，他在互联网上有很多
              <Link href='/friends' className='hover:text-sky-700'>
                <ruby>
                  <rb>朋友</rb>
                  <rt>/friends</rt>
                </ruby>
              </Link>
              ，他通过别人的生活了解世界。
            </p>
            <p className='mt-2'>
              一段美好的回忆总有开始，说不定现在的交流能带来比友谊更多的东西呢...?
              当然如果熟了也可以来线下单杀我（被打）
            </p>
            {/* <p className=''>
              你可以在
              <Link href='/timeline' className='hover:text-sky-700'>
                <ruby>
                  <rb>时间线</rb>
                  <rt>/timeline</rt>
                </ruby>
              </Link>
              看到他的成长。
            </p> */}
            <p className='mt-2'>
              哦对了，最后<br></br><br></br>
              <Link href='/sponsor' className='hover:text-sky-700'>
                <ruby>
                  <rb>打钱</rb>
                  <rt>/sponsor</rt>
                </ruby>
              </Link>
              ！
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
