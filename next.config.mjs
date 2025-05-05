/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: 'custom',
    imageSizes: [320, 1280],
    deviceSizes: [320, 1280],
  },
  transpilePackages: ['next-image-export-optimizer'],
  env: {
    nextImageExportOptimizer_imageFolderPath: '/public',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: '75',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_generateAndUseBlurImages: 'true',
  },
};

export default nextConfig;
