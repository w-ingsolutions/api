module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('marcetin'),
        api_key: env('598282915278376'),
        api_secret: env('598282915278376'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
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