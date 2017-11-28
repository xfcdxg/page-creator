module.exports =
{
  config: [
    {
      component: 'title',
      props: {
        id: '01',
        title: 'INDEX PAGE TITLE'
      }
    },

    {
      component: 'content',
      props: {
        id: '02',
        content: 'index page content'
      }
    },

    {
      component: 'list',
      props: {
        id: '03',
        list: [
          {
            id: '04',
            text: 'list1'
          },
          {
            id: '05',
            text: 'list2'
          },
          {
            id: '06',
            text: 'list3'
          }
        ]
      }
    },
  ]
}
