import React from 'react';
import StepByStep from '@/components/section/StepByStep';


function BecomePartnerSection() {
    const howItWorks = [
        { icon: '/img/hw/stake.svg', title: 'Stake DGYM', description: 'Is required to the gym to stake a minimum amount to be eligible to catalog their services in the blockchain' },
        { icon: '/img/hw/web3.svg', title: 'Register your Gym', description: "Once you've staked the minimum amount you can now register your gym to be visible for the DeGym users" },
        { icon: '/img/hw/node_connected.svg', title: 'Advertise', description: 'Partnership active? Now just advertise!' },
    ];

    return (
        <section className="container mx-auto max-w-7xl justify-center">
            <StepByStep steps={howItWorks} title="How to become a <b>partner</b> gym?" />
        </section>
    );
}

export default BecomePartnerSection;
