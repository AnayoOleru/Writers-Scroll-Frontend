const article = {
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
  articleId: 'id',
};

const bookmarkedArticles = {
  articles: [
    {
      id: 1,
      Article: {
        title: 'This is a cat',
        abstract: 'March 3 2019',
        image:
          'https://res.cloudinary.com/walsam/image/upload/v1556790944/brain-2062057_640.jpg',
        readTime: 3,
        author: {
          first_name: 'sam',
          last_name: 'baker',
        },
      },
    },
    {
      id: 2,
      Article: {
        title: 'This is a cat',
        abstract: 'March 3 2019',
        image:
          'https://res.cloudinary.com/walsam/image/upload/v1556790944/brain-2062057_640.jpg',
        readTime: 3,
        author: {
          first_name: 'sam',
          last_name: 'baker',
        },
      },
    },
  ],
};

const userProfile = {
  userProfile: {
    profile: {
      first_name: 'jest',
      last_name: 'enzyme',
    },
  },
};

const articleObj = {
  articles: [],
};

const userFollowingObj = {
  userFollowing: [],
};

const userFolloweeObj = {
  userFollowee: [],
};

const bookmarkObj = {
  articles: [],
};

const userFollowee = {
  imageUrl: '',
  initials: '',
  name: '',
  bio: '',
  button: '',
  btnClass: '',
};

const userFollowing = {
  imageUrl: '',
  initials: '',
  name: '',
  bio: '',
  button: '',
  btnClass: '',
};

const articleReducer = {
  articles: {
    articleData: [
      {
        id: 2,
        author: 'fadad',
        abstract: 'sfsf',
        title: 'fsdsds',
        category: 'gfdfg',
      },
    ],
  },
  getAllArticles: jest.fn(),
  likeArticle: jest.fn(),
};

const userProfileReducer = {
  userProfile: { profile: { fake: 'data' } },
  suggestedResearchers: [
    {
      profile: {
        first_name: 'sam',
        last_name: 'pete',
        id: 'asfnj',
        bio: 'bio',
        image_url: 'image',
      },
      isFollowing: false,
    },
  ],
};

const articleCardProps = {
  articleId: '2',
  author: 'fadad',
  abstract: 'sfsf',
  title: 'fsdsds',
  category: 'gfdfg',
  date: '2017-11-25T12:34:56z',
  read: 'min',
  paragraph: 'paragraph',
};

const propsFollowee = {
  userFollowee: {
    userFollowee: [
      {
        id: 'nkddn',
        follower_id: 'fjakf',
        followee_id: 'jsdfnkj',
        follower: {
          image_url: '',
          first_name: '',
          last_name: '',
          bio: '',
        },
      },
    ],
  },
  follow: jest.fn(),
};

const propsFollowing = {
  userFollowing: {
    userFollowing: [
      {
        id: 'nkddn',
        follower_id: 'fjakf',
        followee_id: 'jsdfnkj',
        followee: {
          image_url: '',
          first_name: '',
          last_name: '',
          bio: '',
        },
      },
    ],
  },
  unFollow: jest.fn(),
  getFollowing: jest.fn(),
};
const reportedArticleProps = [
  {
    topic: 'fadad',
    status: 'sfsf',
    reason: 'fsdsds',
  },
];

const reviewedArticleProps = [
  {
    topic: 'string',
    abstract: 'string',
    reviewedBy: 'string',
    comment: 'string',
    dateReviewed: 'string',
  },
];

const reviewerRequestProps = [
  {
    imageUrl: 'string',
    name: 'string',
    bio: 'string',
    initials: 'string',
    adminAcceptRequest: jest.fn(),
    adminRejectRequest: jest.fn(),
  },
];

const mock = {
  article,
  bookmarkedArticles,
  userProfile,
  userFolloweeObj,
  userFollowingObj,
  bookmarkObj,
  articleObj,
  userFollowee,
  userFollowing,
  articleReducer,
  articleCardProps,
  userProfileReducer,
  propsFollowing,
  propsFollowee,
  reportedArticleProps,
  reviewedArticleProps,
  reviewerRequestProps,
};

export default mock;
