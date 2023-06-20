import Image from 'next/image'
import Link from 'next/link'
// import wxImage from '@/app/img/wx.png'
// import zfbImage from '@/app/img/zfb.jpg'

import config from '@/app/config.yml'
const sponsorship = config.sponsorship

const wxImage = 'https://img.nvme0n1p.dev/wx.png'
const zfbImage = 'https://img.nvme0n1p.dev/zfb.jpg'
export default function sponsorPage () {
  return (
    <div className='mt-4 flex items-center justify-center'>
      {/* 文字框框~ */}
      <div>
        <p className='text-5xl tracking-wider mb-3 h-14'>赞助</p>
        <p className='font-bold'>
          网站的运营和维护需要一定的费用，如果觉得我的文章给你启发的话不妨给些赞助（伸手。
        </p>
        <div className='flex flex-wrap justify-center'>
          {/* 两张图片框框 */}
          <div className='w-64 h-64 p-4'>
            <Image
              src={wxImage}
              alt='WeChat'
              // placeholder="blur"
              className='object-cover rounded'
              width={500}
              height={500}
            />
          </div>
          <div className='w-64 h-64 p-4'>
            <Image
              src={zfbImage}
              alt='Alipay'
              // placeholder="blur"
              className='object-cover rounded'
              width={500}
              height={500}
            />
          </div>
        </div>
        <p>下面列出了捐赠者名字（手动更新，可能较慢）</p>
        <div className='border-y sm:mx-2 -mx-2 sm:px-10 mb-3'>
          {/* 友人大框框~ */}
          {sponsorship.map((sponsor, index) => (
            //   <a target='_blank' rel='noopener noreferrer' href={friend.url}>
            <div
              className='cursor text-base sm:text-lg py-2 my-1 hover:bg-gray-100 dark:hover:bg-neutral-700 px-4 rounded transition-colors'
              id={index}
            >
              <span className='inline-block sm:min-w-52 min-w-full sm:mb-0 mb-1'>
                {sponsor.name}
                {' ('}
                {sponsor.amount}
                {') '}
              </span>
              <span className='sm:text-base text-sm sm:ml-0 ml-5'>
                {sponsor.msg}
              </span>
            </div>
            //   </a>
          ))}
        </div>
        {/* 返回键 */}
        <p className='mt-4'>
          点击
          <Link href='/' className='hover:text-sky-700'>
            <ruby>
              <rb>这里</rb>
              <rt>/index</rt>
            </ruby>
          </Link>
          返回主页
        </p>
      </div>
    </div>
  )
}
