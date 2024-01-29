import Link from 'next/link'

export default function Header() {
    return (
        <header className="font-sans">
            <div className="flex justify-between mt-12">
                <h1 className="text-5xl font-bold" style={{ paddingLeft: "10%" }}>Yuichiro Kinoshita</h1>
                <div className="flex text-3xl mt-4" style={{ marginRight: "20%" }}>
                    <Link href="/" className='hover:text-red-400'><h2 className='mr-10'>Home</h2></Link>
                    <Link href="/research" className='hover:text-red-400'><h2>Research</h2></Link>
                </div>
            </div>

        </header>
    )
}