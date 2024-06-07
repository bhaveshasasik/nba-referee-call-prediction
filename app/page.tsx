import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <head>
        <meta charset="UTF-8" />
      </head>
      
      <nav className="bg-gray-200 dark:bg-zinc-800/30 p-4 text-center">
        <ul className="flex space-x-6">
          {[
            { href: '/parlays', text: 'Parlays' },
            { href: '/our-story', text: 'Our Story' },
            { href: '/regulations', text: 'Regulations' },
            { href: '/the-team', text: 'The Team' },
          ].map(({ href, text }, index) => (
            <li key={index}>
              <Link href={href}>
                <a className="nav-link">{text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={20000}
            height={60000}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Link href="/ClutchCallsASA/clutch-calls/src/app/parlays">
            <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Parlays{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Fair Play in Focus: Elevate Your Game by Betting on Our NBA Referees - Bet Responsibly!
              </p>
            </a>
          </Link>

          <Link href="/ClutchCallsASA/clutch-calls/src/app/our-story">
            <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Our Story{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Discover ClutchCall's Story: Passion for Sports, Commitment to Fair Play, Your Ultimate Betting Destination!
              </p>
            </a>
          </Link>

          <Link href="/ClutchCallsASA/clutch-calls/src/app/regulations">
            <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Regulations{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Ensuring Integrity: Explore Our Stringent Regulations for a Safe and Responsible Betting Experience!
              </p>
            </a>
          </Link>

          <Link href="/ClutchCallsASA/clutch-calls/src/app/the-team">
            <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                The Team{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                Want to learn about who brought this product to you? Click here!
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
