import { labUrl } from "./_constants/urls"

export default function Home() {
  return (
    <div className='pt-20' style={{ paddingLeft: "10%" }}>
      <h1 className='font-bold text-3xl underline'>Profile</h1>
      <div className='text-xl mt-4 space-y-2'>
        <p>木下裕一朗</p>
        <p>明治大学総合数理学部先端メディアサイエンス学科4年　<a href={labUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">中村聡史研究室</a>所属</p>
      </div>
    </div>
  )
}
