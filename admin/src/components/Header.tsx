

const Header = ({title}:{title:string}) => {
  return (
    <>
        <header className="flex flex-row justify-between p-10">
            <h1 className='text-lg font-bold text-slate-950'>{title}</h1>
            <h1 className='text-sm font-serif text-slate-950'>view current activity</h1>
        </header>
    </>
  )
}

export default Header