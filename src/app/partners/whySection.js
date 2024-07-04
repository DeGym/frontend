import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faMoneyBillWave, faEye, faHandshake, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function PartnerBenefits() {
    const benefits = [
        {
            title: "New Members",
            description: "Increase the flow of new members at your facility.",
            icon: faUserPlus
        },
        {
            title: "Extra Income",
            description: "You earn a fixed amount from the first visit.",
            icon: faMoneyBillWave
        },
        {
            title: "More Visibility",
            description: "Make your business more well-known in the area.",
            icon: faEye
        },
        {
            title: "No Exclusivity",
            description: "You can stay with us as long as you want.",
            icon: faHandshake
        },
        {
            title: "No Extra Cost",
            description: "You don't pay anything to become a partner.",
            icon: faTimesCircle  // Updated icon
        }
    ];

    return (
        <section className="container mx-auto flex flex-col items-center px-5 pb-5 pt-[40px] md:px-8 md:pt-[80px]">
            <h2 className="mx-10 mb-8 text-center text-2xl font-semibold text-primary md:mx-0 md:mb-10 md:text-3xl xl:font-bold">
                Why Partner with DeGym DAO?
            </h2>
            <div className="grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-6 md:gap-4 lg:grid lg:items-baseline xl:grid-cols-5">
                {benefits.map((benefit, index) => (
                    <div key={index} className="col-span-1 flex items-center justify-center md:col-span-2 md:flex-col md:justify-start xl:col-span-1">
                        <div className="flex items-center md:flex-col">
                            <div className="pr-5 md:pr-0 text-light text-3xl md:text-5xl">
                                <FontAwesomeIcon icon={benefit.icon} />
                            </div>
                            <h3 className="hidden text-lg md:flex md:pb-4 md:pt-3 md:text-lg lg:pb-1 lg:pt-3">
                                <b>{benefit.title}</b>
                            </h3>
                        </div>
                        <div className="w-2/3 md:text-center">
                            <p className="text-sm text-light md:pb-4 xl:text-sm">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h4 className="mx-10 mt-8 text-center text-sm font-semibold text-light md:mx-0 md:mb-10 md:text-sm lg:text-lg">
                Our partnership offers a <b>fair transfer value</b>, according to the monthly fee of your gym.
            </h4>
        </section>
    );
}

export default PartnerBenefits;
