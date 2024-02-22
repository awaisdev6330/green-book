export default function AboutHeaderSection() {
  return (
    <>
      {/* Header Start */}

      <div className="relative z-10 mt-10 bg-gray-900 pb-10 sm:mt-14 sm:pb-24 xl:pb-0">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
            <div
              className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <img
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                src="https://images.unsplash.com/photo-1591079090155-f615a0e05b10?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <figure className="relative isolate pt-6 sm:pt-12">
              <svg
                viewBox="0 0 162 128"
                fill="none"
                aria-hidden="true"
                className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
              >
                <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
              </svg>
              <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>
                  Gravida quam mi erat tortor neque molestie. Auctor aliquet at
                  porttitor a enim nunc suscipit tincidunt nunc. Et non lorem
                  tortor posuere. Nunc eu scelerisque interdum eget tellus non
                  nibh scelerisque bibendum.
                </p>
              </blockquote>
              <figcaption className="mt-8 text-base">
                <div className="font-semibold text-white">Judith Black</div>
                <div className="mt-1 text-gray-400">CEO of Tuple</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Header End */}
    </>
  );
}
