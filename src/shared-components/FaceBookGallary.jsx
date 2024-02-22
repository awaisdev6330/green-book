import { Link } from "react-router-dom";

export default function FacebookGallarySection() {
  return (
    <div className="bg-white">
      <main>
        <div className="mt-14">
          <section aria-labelledby="sale-heading">
            <div className="overflow-hidden pt-40 sm:pt-14">
              <div className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="relative pb-26 pt-60 sm:pb-24">
                    <Link to="https://www.facebook.com/thechildrengreenbook">
                      <div>
                        <h2
                          id="sale-heading"
                          className="text-4xl font-bold tracking-tight text-white md:text-5xl m-1"
                        >
                          Vist our
                          <br />
                          Facebook page &rarr;
                        </h2>
                      </div>
                    </Link>

                    <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                      <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                        <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                          <Link to="https://www.facebook.com/thechildrengreenbook">
                            <div className="flex-shrink-0">
                              <img
                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                                alt=""
                              />
                            </div>
                          </Link>
                          <Link to="https://www.facebook.com/thechildrengreenbook">
                            <div className="mt-6 flex-shrink-0 sm:mt-0">
                              <img
                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                                alt=""
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                          <Link to="https://www.facebook.com/thechildrengreenbook">
                            <div className="flex-shrink-0">
                              <img
                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg"
                                alt=""
                              />
                            </div>
                          </Link>
                          <Link to="https://www.facebook.com/thechildrengreenbook">
                            <div className="mt-6 flex-shrink-0 sm:mt-0">
                              <img
                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg"
                                alt=""
                              />
                            </div>
                          </Link>
                        </div>
                        <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                          <Link to="https://www.facebook.com/thechildrengreenbook">
                            <div className="flex-shrink-0">
                              <img
                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                                alt=""
                              />
                            </div>
                          </Link>
                          <Link to="https://www.facebook.com/thechildrengreenbook">
                            <div className="mt-6 flex-shrink-0 sm:mt-0">
                              <img
                                className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                                alt=""
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
