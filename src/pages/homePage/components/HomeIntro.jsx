import { Link } from "react-router-dom";

export default function HomeIntroSection() {
  return (
    <>
      <section aria-labelledby="cause-heading">
        <div className="relative bg-gray-900 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504036764568-17ae585d4619?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-900 bg-opacity-90"
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2
              id="cause-heading"
              className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl"
            >
              INTRODUCTION
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Although Climate Change is a global problem, yet Pakistan is one
              of the most affected countries, and therefore warrants some
              extraordinary steps to stem the tide. However, there could be no
              short-term solutions. In fact, considering the quantum of
              challenge the country is faced with, the entire nation needs to be
              sensitized. In this regard, the starting point, as per the School
              Education Department, South Punjab, could be sensitizing the next
              generation by imparting
            </p>
            <Link
              to="about-us"
              className="mt-8 block w-full rounded-md border border-transparent bg-gray-100 px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-200 sm:w-auto"
            >
              Read More . . .
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
