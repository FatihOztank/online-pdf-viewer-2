/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
          // Map the ESM worker module to the CommonJS worker module
          config.resolve.alias.canvas = false;
            
        }
        
        return config;
      },
      experimental: {
        esmExternals: 'loose'
      }
      
};

export default nextConfig;
