import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/3519986169/3736915175.png"
              alt="Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-white font-bold text-xl">Counter Blox Values</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="/Counter-Blox-Values/Calculator" icon="https://ext.same-assets.com/3519986169/3807294668.svg">
            Calculator
          </NavLink>
          <NavLink href="/Counter-Blox-Values/TradeAds" icon="https://ext.same-assets.com/3519986169/2975580992.svg">
            Trade Ads
          </NavLink>
          <NavLink href="/Counter-Blox-Values" icon="https://ext.same-assets.com/3519986169/713243944.svg">
            Value List
          </NavLink>
          <NavLink href="/Counter-Blox-Values/Value-Changes" icon="https://ext.same-assets.com/3519986169/3050700026.svg">
            Value Changes
          </NavLink>
        </nav>

        <div className="flex md:hidden">
          <button className="text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, icon, children }: { href: string; icon: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center text-gray-300 hover:text-white transition-colors"
    >
      <Image src={icon} alt="" width={20} height={20} className="mr-1" />
      <span>{children}</span>
    </Link>
  );
}
