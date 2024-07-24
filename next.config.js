/** @type {import('next').NextConfig} */

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/pt/experience/:path*",
        destination: "/pt/experiencia/:path*",
        permanent: false,
      },
      {
        source: "/en/experiencia/:path*",
        destination: "/en/experience/:path*",
        permanent: false,
      },
      {
        source: "/pt/education/:path*",
        destination: "/pt/formacao-academica/:path*",
        permanent: false,
      },
      {
        source: "/en/formacao-academica/:path*",
        destination: "/en/education/:path*",
        permanent: false,
      },
      {
        source: "/pt/skills/:path*",
        destination: "/pt/competencias/:path*",
        permanent: false,
      },
      {
        source: "/en/competencias/:path*",
        destination: "/en/skills/:path*",
        permanent: false,
      },
      {
        source: "/pt/recommendations/:path*",
        destination: "/pt/recomendacoes/:path*",
        permanent: false,
      },
      {
        source: "/en/recomendacoes/:path*",
        destination: "/en/recommendations/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/pt/experiencia/:path*",
          destination: "/pt/experience/:path*",
        },
        {
          source: "/pt/formacao-academica/:path*",
          destination: "/pt/education/:path*",
        },
        {
          source: "/pt/competencias/:path*",
          destination: "/pt/skills/:path*",
        },
        {
          source: "/pt/recomendacoes/:path*",
          destination: "/pt/recommendations/:path*",
        },
        {
          source: "/pt/curriculo/:path*",
          destination: "/pt/resume/:path*",
        },
      ],
    };
  },
};
