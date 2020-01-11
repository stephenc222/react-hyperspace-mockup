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
  ]
}

export default siteData