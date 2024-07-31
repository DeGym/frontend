import React from 'react';
import Image from 'next/image';

function VisitorSection() {
    return (
        <section className="px-8 py-10 lg:flex lg:pb-8 lg:pt-11">
            <div className="container mx-auto flex flex-col space-y-5 xl:px-24 2xl:px-56">
                <div className="space-y-3 text-center text-light">
                    <h2 className="text-xl font-semibold md:text-3xl xl:font-bold"><b>Who will visit your space?</b></h2>
                    <p className="font-sm text-xs md:text-base">
                        DeGym users will subscribe to a plan and check in at your gym. Here are the numbers:
                    </p>
                </div>
                <div className="flex w-full flex-col items-center gap-8 lg:flex-row">
                    <div className="hidden lg:block lg:w-full">
                        <Image
                            src="/img/branding_image.jpeg"
                            alt="A man in gym attire holding a backpack and a water bottle smiling at the camera."
                            width={462}
                            height={350}
                            className="w-full"
                        />
                    </div>
                    <Image
                        src="/img/branding_image.jpeg"
                        alt="A man in gym attire holding a backpack and a water bottle smiling at the camera."
                        width={462}
                        height={350}
                        className="block w-full rounded-b-[30px] lg:hidden"
                    />
                    <div className="space-y-8 text-light">
                        <div className="space-y-4">
                            <h3 className="border-l-4 border-primary-40 pl-4 text-sm font-medium md:text-2xl md:font-bold">
                                More than 5,000 client companies throughout World
                            </h3>
                            <p className="text-xs md:text-base">
                                We promote our partner gyms to HR departments and employees in your area, giving your brand more visibility among benefit users.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="border-l-4 border-primary-40 pl-4 text-sm font-medium md:text-2xl md:font-bold">
                                More than 2.5 million potential members for your gym
                            </h3>
                            <p className="text-xs md:text-base">
                                People impacted by our daily communications can learn about and visit your gym.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto w-full lg:w-60 lg:py-5">
                    <button>
                        <a
                            className="rounded-[42px] inline-flex items-center justify-center py-4 px-8 hover:text-neutral-90 text-base transition bg-primary-40 text-neutral-90 w-full"
                            target="_blank"
                            href="/partners"
                        >
                            I Want to Be a Partner
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default VisitorSection;
