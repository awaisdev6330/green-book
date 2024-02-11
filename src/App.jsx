import { Link } from 'react-router-dom'

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]">
        <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
          
            <span className="sr-only">Your Company</span>
            <img
              className="h-10 w-auto sm:h-12"
              src="https://thechildrengreenbook.net/assets/images/_logo.png"alt=""
            />
         
        </header>
        <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className="max-w-lg">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-yellow-500 sm:text-4xl">Website is under consturction</h1>
            <p className="mt-4 text-base leading-7 text-slate-500	">
              We will be celebrating the launch of our new site very soon.
            </p>
          </div>
        </main>
        <footer className="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
          <div className="border-t border-gray-100 bg-gray-50 py-10">
            <nav className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-gray-600 lg:px-8">
            <a href="https://schooleducation.southpunjab.gov.pk/" className="text-sm font-bold leading-6 text-gray-900">
            A project by School Education Department, South Punjab
          </a>
            </nav>
            <nav className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-gray-600 lg:px-8">
              <span>Crafted by:</span>
              <span className="font-bold	">Muhammad Awais</span>
            </nav>
          </div>
        </footer>
        <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
          <img
            src="https://images.unsplash.com/photo-1591079090155-f615a0e05b10?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  )
}
