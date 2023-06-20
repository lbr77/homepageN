import Link from 'next/link'
import config from '../config.yml'
const contacts = config.contacts
export default function contactPage () {
  return (
    <div className='mt-4 flex items-center justify-center'>
      {/* 文字框框~ */}
      <div>
        <p className='text-5xl tracking-wider mb-3 h-14'>联系方式</p>
        <p className='font-bold'>这里会列出他在网络上的部分踪迹。</p>
        <p className='mt-2'>
          美好的回忆总有一个简单的开始，说不定现在的交流能带来比友谊更多的东西呢...?
          当然如果熟了也可以来线下单杀我（被打）
        </p>
        {/* 联系方式大框框~ */}
        <div className='border-y sm:mx-2 -mx-2 sm:px-10 mb-3'>
          {Object.keys(contacts).map(key => (
            <Link href={contacts[key]}>
              <div
                className='text-base sm:text-lg py-2 my-1 hover:bg-gray-100 dark:hover:bg-neutral-700 px-4 rounded transition-colors'
                id={key}
              >
                <span className='inline-block sm:min-w-52 min-w-full sm:mb-0 mb-1'>
                  {key}
                </span>
                <span className='sm:text-base text-sm sm:ml-0 ml-5'>
                  {contacts[key]}
                </span>
              </div>
            </Link>
          ))}
        </div>
        {/* 返回键 */}
        <p>
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
