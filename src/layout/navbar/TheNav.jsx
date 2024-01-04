import { Navbar, Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function TheNav() {
    return (
        <Navbar fluid className=' bg-[#000000aa]  text-white w-full z-50'>
            <Navbar.Brand as={Link} href="https://flowbite-react.com" className=' flex items-center justify-center'>
          
                <span className="self-center whitespace-nowrap text-xl font-semibold"> <span className='text-xl text-red-500'>{`<`}</span>Bhanu Sharma<span className='text-xl text-red-500'>{`/>`}</span></span>
            </Navbar.Brand>

            <div className='hidden md:block'>
                <Navbar.Collapse >
                    <Navbar.Link className='text-white' as={Link} to={'/'} >
                    <span className=' text-red-500'>{`<`}</span>Home<span className=' text-red-500'>{`/>`}</span>
                    </Navbar.Link>
                    <Navbar.Link className='text-white' as={Link} to={'/about'}>
                    <span className=' text-red-500'>{`<`}</span>About Me<span className=' text-red-500'>{`/>`}</span>
                    </Navbar.Link>
                    <Navbar.Link className='text-white' as={Link} to={'/contact'}><span className=' text-red-500'>{`<`}</span>Contact<span className=' text-red-500'>{`/>`}</span></Navbar.Link>
                    <Navbar.Link className='text-white' as={Link} to={'/projects'}><span className=' text-red-500'>{`<`}</span>Projects<span className=' text-red-500'>{`/>`}</span></Navbar.Link>
                    <Navbar.Link className='text-white' as={Link} to={'/skills'}><span className=' text-red-500'>{`<`}</span>Skills<span className=' text-red-500'>{`/>`}</span></Navbar.Link>
                </Navbar.Collapse>
            </div>
            <div className='block md:hidden z-50'>
                <Dropdown label={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
                }
                color=''
                arrowIcon={false}
                
                    dismissOnClick={true}>
                    <Dropdown.Item as={Link} to={'/'}>Home</Dropdown.Item>
                    <Dropdown.Item as={Link} to={'/about'}>About</Dropdown.Item>
                    <Dropdown.Item as={Link} to={'/contact'}>Contact</Dropdown.Item>
                    <Dropdown.Item as={Link} to={'projects'}>Projects</Dropdown.Item>
                    <Dropdown.Item as={Link} to={'/skills'}>skills</Dropdown.Item>
                    
                </Dropdown>
            </div>

        </Navbar>
    )
}
