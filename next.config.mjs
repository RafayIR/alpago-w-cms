/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '192.168.0.85',
                // pathname: '/al-pago/public/**',
            },
            {
                protocol: 'https',
                hostname: 'digitalgraphiks.co.uk',
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;
