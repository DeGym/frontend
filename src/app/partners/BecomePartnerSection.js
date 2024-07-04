import React from 'react';

function BecomePartnerSection() {
    const steps = [
        {
            number: "01",
            description: "Fill in the registration details."
        },
        {
            number: "02",
            description: "Our team will get in touch with you."
        },
        {
            number: "03",
            description: "Partnership active? Now just advertise!",
            link: "/partners",
            linkText: "Become a Partner"
        }
    ];

    return (
        <section className="container mx-auto">
            <div className="px-4 py-5 lg:px-0">
                <h2 className="mx-auto text-center text-2xl font-semibold text-light md:w-full md:text-3xl md:font-bold">
                    <b>How to become a partner gym?</b>
                </h2>
                <div className="mx-4 mt-6 grid grid-cols-1 gap-2.5 md:grid-cols-3 md:gap-10 lg:mx-24 xl:mx-40">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center rounded-2xl bg-[#1C1C1C] p-6 lg:p-10">
                            <div className="flex w-60 flex-none flex-col gap-4 md:w-44 xl:w-64">
                                <b className="text-5xl font-bold text-primary-40">{step.number}</b>
                                <p className="text-base text-light lg:text-xl">{step.description}</p>
                                {step.link && (
                                    <a className="rounded-[42px] bg-primary inline-flex items-center justify-center py-4 px-8 hover:text-neutral-90 text-base transition bg-primary-40 text-neutral-90 hover:bg-secondary" target="_blank" href={step.link}>
                                        {step.linkText}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BecomePartnerSection;
