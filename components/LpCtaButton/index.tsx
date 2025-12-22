'use client';

import { useCroct } from '@croct/plug-next';

interface LpCtaButtonProps {
    href: string;
    label: string;
}

export default function LpCtaButton({ href, label }: LpCtaButtonProps) {
    const croct = useCroct();

    const handleClick = () => {
        croct.track('goalCompleted', {
            goalId: 'lp-cta-clicked'
        });
    };

    


    return (
        <a
            href={href}
            onClick={handleClick}
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition"
        >
            {label}
        </a>
    );
}
