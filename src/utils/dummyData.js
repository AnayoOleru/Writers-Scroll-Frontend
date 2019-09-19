const article = [
  {
    id: 1,
    category: 'Health',
    title: 'World’s Smallest Biggest Killer',
    author: 'Andrew Moffins',
    date: 'March 26 2019',
    read: '1 min read',
    paragraph:
      'The world’s biggest killers are in fact so tiny - the mosquito. Worldwide there are 3500 known species of mosquito. Which are the deadliest the mosquito. Worldwide there are 3500 known species of mosquito...',
    image:
      'https://res.cloudinary.com/walsam/image/upload/v1556790931/robotics.jpg',
  },
  {
    id: 2,
    category: 'Chemistry',
    title: 'Building Realtime Android Chat Room With Firebase ',
    author: 'Peter Emmanuel',
    date: 'March 13 2019',
    read: '1 min read',
    paragraph:
      'Firebase efficiently handles the backend process associated with authentication cloud storage, real-time database, and push notification while you focus...',
    image:
      'https://res.cloudinary.com/walsam/image/upload/v1556790944/brain-2062057_640.jpg',
  },
];

const popularArticle = [
  {
    id: 1,
    title: 'The Sticky Details Behind Apple’s Credit card',
    author: 'John Shanghai',
    date: 'March 3',
    likes: 21,
  },
  {
    id: 2,
    title: 'Cyber Monday Disaster for Tech Savvy consumers',
    author: 'April Juliet',
    date: 'March 13',
    likes: 11,
  },
];

const profileReport = [
  {
    id: 'asdfjn',
    title: 'Title',
    reason: 'Too much typos',
    status: 'pending',
  },
  {
    id: 'ajsfhiuhn',
    title: 'Title',
    reason: 'Too much typos',
    status: 'pending',
  },
  {
    id: 'dmkfm',
    title: 'Title',
    reason: 'Too much typos',
    status: 'pending',
  },
  {
    id: 'skfnajsk',
    title: 'Title',
    reason: 'Too much typos',
    status: 'pending',
  },
];

const suggestedArticle = [
  {
    id: 'ksjfksnf',
    title: 'Article of the year',
    firstname: 'Adebisi',
    lastname: 'Bukunmi',
    readingTime: '3',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    id: 'ksjfsjnjksnf',
    title: 'Article of the year',
    firstname: 'Adebisi',
    lastname: 'Bukunmi',
    readingTime: '3',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  {
    id: 'ksjsdnfjafksnf',
    title: 'Article of the year',
    firstname: 'Adebisi',
    lastname: 'Bukunmi',
    readingTime: '3',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
];

const reviewedArticles = [
  {
    id: 1,
    topic: 'Why would science brew in such manner',
    reviewer: 'Andrew Moffins',
    dateReviewed: 'March 26 2019',
    abstract:
      'In 2017 we are seeing more evidence of how not just IoT, but especially robots and drones will play a central role in our smart cities and automation economy.',
    comment:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 2,
    topic: 'Everyday science from the desert',
    reviewer: 'Peter Emmanuel',
    dateReviewed: 'March 13 2019',
    abstract:
      'Firebase efficiently handles the backend process associated with authentication cloud storage, real-time database, and push notification while you focus...',
    comment: 'this article does not speak well of the zongo zanga',
  },
  {
    id: 3,
    topic: '7 wonders of the jonzin planet',
    reviewer: 'Peter Emmanuel',
    dateReviewed: 'May 27 2020',
    abstract:
      'Firebase efficiently handles the backend process associated with authentication cloud storage, real-time database, and push notification while you focus...',
    comment:
      'worst case scenerio is the solomon another jackson of lagos when master',
  },
];

const comment = [
  {
    id: '0595eff6-bd3a-440e-95c4-f83c40742555',
    likes_count: 0,
    user_id: '57c515a1-890d-412f-8ca1-0a5395123dca',
    body:
      'In sit amet pretium eros, sed varius arcu. Ut tincidunt purus vitae sollicitudin fringilla. Ut at eros pulvinar, rutrum nulla non, vestibulum massa. Etiam ut ligula sodales, fermentum mi in, iaculis lorem. Vestibulum magna dui.',
    createdAt: '2019-05-18T18:34:42.695Z',
    replies: [
      {
        id: 'bf473558-8878-431c-8828-684d9a59f3cc',
        user_id: '57c515a1-890d-412f-8ca1-0a5395123dca',
        comment_id: '0595eff6-bd3a-440e-95c4-f83c40742555',
        reply:
          'ut ligula sodales, fermentum mi in, iaculis lorem. Vestibulum magna dui, consectetur luctus tempus sit amet, rutrum ac sem. Cras augue tellus, dictum a lacus eget, porta luctus quam.',
        createdAt: '2019-05-18T18:38:04.632Z',
      },
      {
        id: '1e4909e1-b564-4623-8093-141acd6487e5',
        user_id: '57c515a1-890d-412f-8ca1-0a5395123dca',
        comment_id: '0595eff6-bd3a-440e-95c4-f83c40742555',
        reply:
          'some amazong friendliness in the zonal ermentum mi in, iaculis lorem. Vestibulum magna dui, consectetur luctus tempus sit amet, rutrum ac sem. Cras augue tellus, dictum a lacus eget, porta luctus quam.',
        createdAt: '2019-05-18T18:38:33.479Z',
      },
    ],
  },
];

const data = {
  article,
  popularArticle,
  profileReport,
  suggestedArticle,
  reviewedArticles,
  comment,
};

export default data;
