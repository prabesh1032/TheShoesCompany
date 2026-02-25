import logo from '../assets/logo.png'

export default function Navbar() {
    return (
        <header className="bg-black">
            <div className='flex items-center justify-between p-4'>
                <a href="#" className=''>
                    <div>
                        <img src={logo} className="w-28 h-24" alt="Logo" />
                        <p className='text-white -mt-8'>The Shoes Company</p>
                    </div>
                </a>
                <nav className='flex gap-10 text-white text-lg font-medium'>
                    <a href="">Home</a>
                    <a href="">How It Works?</a>
                    <a href="">About</a>
                    <a href="">Testimonials</a>
                    <a href="">Contact Us</a>
                    
                </nav>
            </div>
        </header>
    )
}