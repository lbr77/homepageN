import Link from 'next/link'
export default function ntfpage () {
  return (
    <div>
      <p className='text-5xl tracking-wider mb-3 h-14'>404 NOT FOUND</p>
      <p className='font-bold'>你似乎来到了不存在的地方。(〃＞目＜)</p>
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

      {/* 返回键 */}
    </div>
  )
}
