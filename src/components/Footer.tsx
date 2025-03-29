import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="bg-background py-8 border-t border-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex space-x-2">
              <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-muted-foreground/20 hover:bg-muted-foreground/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="https://discord.gg/123d" className="w-8 h-8 flex items-center justify-center rounded-full bg-muted-foreground/20 hover:bg-muted-foreground/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="9" cy="12" r="1"></circle>
                  <circle cx="15" cy="12" r="1"></circle>
                  <path d="M7.5 7.5c3.5-1 5.5-1 9 0"></path>
                  <path d="M7.5 16.5c3.5 1 5.5 1 9 0"></path>
                  <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.167 3.5-3.5 1-3.667.167-12.833-7-17.5-7.333 4.667-8.167 13.833-7 17.5.667 2.333 2 3.5 3.5 3.5.5 0 2-2 2-3"></path>
                  <path d="M19 22v-6"></path>
                  <path d="M5 22v-6"></path>
                  <path d="M12 22v-6"></path>
                </svg>
              </Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-muted-foreground/20 hover:bg-muted-foreground/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-secondary">
              <Link href="https://discord.gg/123d" className="font-semibold hover:underline">
                https://discord.gg/123d
              </Link>
            </p>
            <p className="text-secondary font-bold mt-1">
              Be part of the community
            </p>
          </div>

          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 text-muted-foreground">
                <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                <line x1="6" x2="6" y1="2" y2="4"></line>
                <line x1="10" x2="10" y1="2" y2="4"></line>
                <line x1="14" x2="14" y1="2" y2="4"></line>
              </svg>
              <div className="text-sm text-muted-foreground">Chat</div>
            </div>

            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 text-muted-foreground">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <div className="text-sm text-muted-foreground">Trades</div>
            </div>

            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 text-muted-foreground">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <div className="text-sm text-muted-foreground">Trusted</div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mb-1">
            ©2025 123Demands. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            All trademarks and graphics of their respective owners in the US and other countries.
          </p>

          <div className="flex justify-center space-x-4 text-xs text-muted-foreground/70 mt-4">
            <Link href="#" className="hover:text-muted-foreground">Contact Us</Link>
            <Link href="#" className="hover:text-muted-foreground">Terms & Conditions</Link>
            <Link href="#" className="hover:text-muted-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-muted-foreground">Disclaimer</Link>
            <Link href="#" className="hover:text-muted-foreground">Discord Link</Link>
            <Link href="#" className="hover:text-muted-foreground">About Us</Link>
          </div>

          <div className="mt-4">
            <Link href="#" className="inline-flex items-center text-xs text-muted-foreground/70 hover:text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              Back to Top
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
