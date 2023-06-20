import Link from 'next/link'
import config from '../config.yml'
const friends = config.friends
export default function friendsPage () {
  return (
    <div>
      <p className='text-5xl tracking-wider mb-3 h-14'>友人</p>
      <p className='font-bold'>有趣的灵魂万里挑一。</p>
      <div className='border-y sm:mx-2 -mx-2 sm:px-10 mb-3'>
        {/* 友人大框框~ */}
        {friends.map((friend, index) => (
          <a target='_blank' rel='noopener noreferrer' href={friend.url}>
            <div
              className='text-base sm:text-lg py-2 my-1 hover:bg-gray-100 dark:hover:bg-neutral-700 px-4 rounded transition-colors'
              id={index}
            >
              <span className='inline-block sm:min-w-52 min-w-full sm:mb-0 mb-1'>
                {friend.name}
              </span>
              <span className='sm:text-base text-sm sm:ml-0 ml-5'>
                {friend.desc}
              </span>
            </div>
          </a>
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
  )
}
