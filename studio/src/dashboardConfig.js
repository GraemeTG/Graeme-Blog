export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603e43b8ff51840972c0f9ee',
                  title: 'Sanity Studio',
                  name: 'graeme-blog-studio',
                  apiId: '113bbccb-eaff-4ce4-851d-31a1aa34f8ee'
                },
                {
                  buildHookId: '603e43b84b14be0d591a386a',
                  title: 'Blog Website',
                  name: 'graeme-blog',
                  apiId: 'bb3d057b-3348-461a-8154-cb7984fbfa72'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GraemeTG/Graeme-Blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://graeme-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
