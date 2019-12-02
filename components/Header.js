import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

export default function Header() {
    return (
        <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
            <Link href="/blog">
                <a style={linkStyle}>Blog</a>
            </Link>
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
        </div>
    )
}
