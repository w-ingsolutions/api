module.exports = ({ env }) => ({
  'cloudflare-pages': {
    instances: [
      {
        name: "production website",
        hook_url: 'https://admin.solutions.rs'
      },
      {
        name: "preview website",
        hook_url: 'https://admin.solutions.rs'
      },
    ]
  }
});