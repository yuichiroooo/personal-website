import Link from 'next/link'

export default function Header() {
    return (
        <header className="font-sans">
            <div className="flex mt-12" style={{ justifyContent: "flex-start", paddingLeft: "30%" }}>
                <h1 className="text-5xl font-bold">Yuichiro Kinoshita</h1>
            </div>
            <div className="flex text-2xl space-x-12 mt-12" style={{ justifyContent: "flex-start", paddingLeft: "30%" }}>
                <Link href="/" className='hover:text-red-400'><h2>Home</h2></Link>
                <Link href="/research" className='hover:text-red-400'><h2>Research</h2></Link>
            </div>
        </header>
    )
}