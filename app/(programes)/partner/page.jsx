import Link from "next/link";

export default function Component() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="lg:top-0 lg:text-left">
          <p className="text-sm font-semibold uppercase leading-6 tracking-wide text-green-950">
            Partner With Us
          </p>
          <h2 className="mt-2 text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            How would you like to partner with us?
          </h2>
        </div>
        <div className="mt-10">
          <ul className="md:grid md:grid-cols-3 md:gap-8">
            <li>
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex h-48 w-full flex-shrink-0 items-center justify-center bg-[#fde68a]">
                  <BarChartIcon className="h-20 w-20 text-[#f59e0b]" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-xl font-semibold text-gray-900">
                      Sponsor a training or student
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Collaborate with us to organize and manage your training
                      projects seamlessly. Our team of experts will handle the
                      intricacies while you focus on your core business
                      objectives. With our comprehensive approach and
                      cutting-edge technology, we work closely with you to
                      develop impactful and engaging training programs that
                      drive tangible results.
                    </p>
                  </div>
                  <Link
                    className="text-md w-48 rounded-md border-2 border-green-950 bg-green-950  p-4 text-white  md:block"
                    href="#"
                  >
                    Organize a Training
                  </Link>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex h-48 w-full flex-shrink-0 items-center justify-center bg-[#f87171]">
                  <BarChartIcon className="h-20 w-20 text-[#ef4444]" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-xl font-semibold text-gray-900">
                      Hire our graduates
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      As a leading global talent acquisition company, we
                      specialize in helping organizations worldwide discover and
                      hire exceptional talent without straining their budget.
                      Rely on our expertise and extensive network to find and
                      onboard the best professionals for your team, ensuring
                      that you have the right skills and expertise to drive
                      success.
                    </p>
                  </div>
                  <Link
                    className="text-md w-48 rounded-md border-2 border-green-950 bg-green-950  p-4 text-white  md:block"
                    href="#"
                  >
                    Hire Lupleg Talents
                  </Link>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex h-48 w-full flex-shrink-0 items-center justify-center bg-[#c084fc]">
                  <BarChartIcon className="h-20 w-20 text-[#a855f7]" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-xl font-semibold text-gray-900">
                      Donate to the cause
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Join us in creating a thriving ecosystem where African
                      youth have access to essential resources, opportunities,
                      and support to excel in the tech industry. You can
                      contribute by sponsoring training programs or donating to
                      our scholarship funds. Together, let's empower the next
                      generation and fuel the transformation in the tech
                      industry.
                    </p>
                  </div>

                  <Link
                    className="text-md w-48 rounded-md border-2 border-green-950 bg-green-950  p-4 text-white  md:block"
                    href="#"
                  >
                    Donate to Lupleg
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="">
        <p className="m-10 mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          From software development to mentorship, we offer a wide range of
          services to help you succeed.
        </p>
      </div>
    </div>
  );
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}
