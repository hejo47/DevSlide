import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/app/styles')],
    prependData: `
      @import "_variable";
      @import "_mixin";
    `, 
  },
};

export default nextConfig;