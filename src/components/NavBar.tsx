import Link from 'next/link'

interface MenuItem {
  title: string
  link: string
}

const menu: MenuItem[] = [
  {
    title: 'Nuestra historia',
    link: '#nuestra-historia',
  },
  {
    title: 'Save the date',
    link: '#save-date',
  },
  {
    title: 'Itinerario',
    link: '#itinerario',
  },
]

export function NavBar() {
  return (
    <nav className='flex justify-center'>
      <ul className='hidden gap-4 sm:flex'>
        {menu.map((item) => (
          <li key={item.link}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
