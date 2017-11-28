module.exports =
{
  config: [
    {
      component: 'content',
      props: {
        id: '1',
        content: 'lalalala'
      }
    },

    {
      component: 'title',
      props: {
        id: '0',
        title: 'TEST TITLE2'
      }
    },

    {
      component: 'list',
      props: {
        id: '2',
        list: [
          {
            id: '21',
            text: 'list1'
          },
          {
            id: '22',
            text: 'list2'
          },
          {
            id: '23',
            text: 'list3'
          }
        ]
      }
    },

    {
      component: 'title',
      props: {
        id: '3',
        title: 'TEST TITLE3'
      }
    },

    {
      component: 'title',
      props: {
        id: '4',
        title: 'TEST TITLE4'
      }
    },
  ]
}
