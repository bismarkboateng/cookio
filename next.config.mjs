/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "mefqhwyqvulppvkkfqxb.supabase.co",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            }
        ],
    }
};

export default nextConfig;