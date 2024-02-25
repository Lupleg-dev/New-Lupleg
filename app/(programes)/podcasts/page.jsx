import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";

export default function Component() {
  return (
    <div className="bg-white">
      <section className="py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              The Podcast
            </h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The best podcast in the world. Tune in for insightful
              conversations, amazing stories, and thought-provoking interviews
              with the most interesting people.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 grid gap-6 md:gap-8 lg:gap-10">
          <div className="space-y-3">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Latest Episodes
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Listen to the latest episodes from our amazing hosts.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm font-medium">Filter by Category:</div>
              <Button size="sm" variant="outline">
                All
              </Button>
              <Button size="sm" variant="outline">
                Tech
              </Button>
              <Button size="sm" variant="outline">
                Skills
              </Button>
              <Button size="sm" variant="outline">
                Coding
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:gap-8 lg:gap-10">
            <Card>
              <CardContent className="grid gap-2 md:grid-cols-3">
                {/* <div className="flex items-center justify-center p-4 md:col-span-1">
                  <img
                    alt="Episode cover"
                    className="aspect-[1/1] rounded-lg object-cover"
                    height="120"
                    src="/Lupleg podcast.png"
                    width="120"
                  />
                </div> */}
                <div className="grid gap-1 md:gap-2 md:col-span-2">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">
                      Tech Career - With Mark & Hillary
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Episode 01 | 15th February 2024
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 md:text-base/relaxed dark:text-gray-400">
                    Today's Episode, we delve into the dynamic world of tech
                    careers, exploring the personal journey of our guest Hillary
                    as he shares how he navigated through the ever-evolving
                    landscape of technology. From humble beginnings to
                    significant milestones, our guest share insights,
                    challenges, and lessons learned along the way.
                  </p>

                  <iframe
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    frameborder="0"
                    height="175"
                    style={{
                      width: "100%",
                      maxWidth: "660px",
                      overflow: "hidden",
                      borderRadius: "10px",
                    }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.podcasts.apple.com/us/podcast/tech-career-with-mark-hillary/id1731008771?i=1000645362050&theme=light"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="grid gap-2 md:grid-cols-3">
                {/* <div className="flex items-center justify-center p-4 md:col-span-1">
                  <img
                    alt="Episode cover"
                    className="aspect-[1/1] rounded-lg object-cover"
                    height="120"
                    src="/Lupleg podcast.png"
                    width="120"
                  />
                </div> */}
                <div className="grid gap-1 md:gap-2 md:col-span-2">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">
                      The Benefits of Collaboration
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Episode 02 | 19th February 2024
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 md:text-base/relaxed dark:text-gray-400">
                    In today's episode, Mark will discuss the The Benefits of
                    Collaboration and how it can help you improve your skills.
                    We also talk about the importance of networking and how it
                    can help you learn new things from others. With a single
                    technique.
                  </p>

                  <iframe
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    frameborder="0"
                    height="175"
                    style={{
                      width: "100%",
                      maxWidth: "660px",
                      overflow: "hidden",
                      borderRadius: "10px",
                    }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.podcasts.apple.com/us/podcast/the-benefits-of-collaboration/id1731008771?i=1000645794643&theme=light"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="grid gap-2 md:grid-cols-3">
                {/* <div className="flex items-center justify-center p-4 md:col-span-1">
                  <img
                    alt="Episode cover"
                    className="aspect-[1/1] rounded-lg object-cover"
                    height="120"
                    src="/Lupleg podcast.png"
                    width="120"
                  />
                </div> */}
                <div className="grid gap-1 md:gap-2 md:col-span-2">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">
                      Tech Journey - Mark and Nitin
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Episode 03 | 55th February 2024
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 md:text-base/relaxed dark:text-gray-400">
                    Back again to the episode with our guest Nitin from India
                    who is currently in his final semester to complete his BTech
                    in Computer Science and Engineering. Today he shares how he
                    started his journey as a Software Engineer and many more.
                    Hope you find it helpful.
                  </p>
                  <iframe
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    frameborder="0"
                    height="175"
                    style={{
                      width: "100%",
                      maxWidth: "660px",
                      overflow: "hidden",
                      borderRadius: "10px",
                    }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                    src="https://embed.podcasts.apple.com/us/podcast/tech-journey-mark-and-nitin/id1731008771?i=1000646751631&amp;itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=light"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
