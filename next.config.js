/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@mui/x-charts'] = '@mui/x-charts/dist';
        return config;
      }
}

module.exports = nextConfig
