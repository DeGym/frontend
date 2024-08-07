/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/discord',
                destination: 'https://discord.gg/PyJK25KW',
                permanent: true,
            },
            {
                source: '/telegram',
                destination: 'https://t.me/degym_dao',
                permanent: true,
            },
            {
                source: '/x',
                destination: 'https://x.com/degym_network',
                permanent: true,
            },
            {
                source: '/github',
                destination: 'https://github.com/DeGym',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
