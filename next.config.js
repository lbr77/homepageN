/** @type {import('next').NextConfig} */
const nextConfig = {}
const withYaml = require('next-plugin-yaml')

module.exports = withYaml({
  output: 'export',
  images: { unoptimized: true }
})
