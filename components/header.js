import Link from 'next/link'
import React from 'react'


export default function Header() {
  return (
    <header>
       <Link className="link" href="/articlesUI">Home</Link>
       <Link className="link" href="/articlesUI/add">Add</Link>
    </header>
  )
}
