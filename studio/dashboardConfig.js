export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61e1a9b4d8aa35313e60448b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolioadf-studio',
                  apiId: '9d059293-dd0a-401f-9311-0193913b3f15'
                },
                {
                  buildHookId: '61e1a9b46da149324f1b2f5c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolioadf',
                  apiId: 'b8a932ea-1012-486a-894c-1bd47989251b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mdmishanurkhan/sanity-gatsby-portfolioadf',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolioadf.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
