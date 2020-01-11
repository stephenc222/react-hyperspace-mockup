// data structure used to provide static content to site
const siteData = {
  headerLinks: [
    { label: 'Home', path: '/' },
    { label: 'Generic', path: '/generic' },
    { label: 'Elements', path: '/elements' },
  ],
  sidebarLinks: [
    { label: 'Welcome', sectionName: 'welcomeSection' },
    { label: 'Who We Are', sectionName: 'whoWeAreSection' },
    { label: 'What We Do', sectionName: 'whatWeDoSection' },
    { label: 'Get In Touch', sectionName: 'getInTouchSection' },
  ],
  orderedListData: [
    'Dolor pulvinar etiam.',
    'Etiam vel felis viverra.',
    'Felis enim feugiat.',
    'Dolor pulvinar etiam.',
    'Etiam vel felis lorem.',
    'Felis enim et feugiat.'
  ],
  unOrderedListData: [
    'dolor pulvinar etiam.',
    'sagittis adipiscing.',
    'felis enim feugiat.'
  ],
  sections: [
    {
      id: 'whatWeDo', data: [
        {
          row: [

            { icon: 'code', headerLabel: 'Lorem ipsum amet', bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.' },
            { icon: 'lock', headerLabel: 'Aliquam sed nullam', bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.' },
          ]
        },
        {
          row: [
            { icon: 'cog', headerLabel: 'Sed erat ullam corper', bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.' },
            { icon: 'desktop', headerLabel: 'Veroeros quis lorem', bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.' },
          ]
        },
        {
          row: [
            { icon: 'link', headerLabel: 'Urna quis bibendum', bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.' },
            { icon: 'gem', headerLabel: 'Aliquam urna dapibus', bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.' },
          ]
        }
      ]
    },
    {
      id: 'whoWeAre', data: [
        {
          headerLabel: 'Sed ipsum dolor',
          imageFile: 'hand_holding_phone',
          bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.'
        },
        {
          headerLabel: 'Feugiat consequat',
          imageFile: 'street_view',
          bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.'
        },
        {
          headerLabel: 'Ultricies aliquam',
          imageFile: 'guy_gazing',
          bodyText: 'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.'
        },
      ]
    }
  ]
}

export default siteData