export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '63095fcb068f4d094b8f2748',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-8fjvfc56',
                  apiId: 'cd6834f5-9139-435c-a9ff-bec07e13efe9'
                },
                {
                  buildHookId: '63095fcc94f02809690aa306',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-fu4jt3o1',
                  apiId: 'e780f75a-7407-4307-93c3-e22d2928ccd1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomkenkel/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-fu4jt3o1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
