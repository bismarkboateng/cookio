/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "mefqhwyqvulppvkkfqxb.supabase.co",
            },
        ],
    }
};

export default nextConfig;