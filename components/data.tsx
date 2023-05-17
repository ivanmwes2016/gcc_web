import React, { SVGProps } from 'react'
import {
  VideoCameraIcon,
  BookOpenIcon,
  CalendarIcon,
  GlobeIcon,
  HomeIcon,
  ChatIcon,
  FastForwardIcon,
} from '@heroicons/react/outline'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'

interface IMenu {
  name: string
  slug: string
  icon: any
}

interface IHero {
  title: string
  description: string
  image?: string
  url?: string
  buttonDesc?: string
}

interface Icard {
  slug?: string
  title: string
  description?: string
  image: string
  alt?: string
  date?: string
  LinkName: string
  url: string
}

interface IData {
  [x: string]: any
  MenuItems: IMenu[]
  Logo: string
  SocialMediaIcons: IMenu[]
  CardOne: Icard[]
  TeamGroups: Icard[]
  DiversityText: string
  Events: Icard[]
  PrayerText: IHero[]
  FooterData: IHero[]
}

//This is the main static data.
export const data: IData = {
  MenuItems: [
    {
      name: 'HOME',
      slug: '',
      icon: <HomeIcon className="w-7 h-7 stroke-1" />,
    },
    {
      name: 'LIVE SERVICE',
      slug: 'live-service',
      icon: <VideoCameraIcon className="w-7 h-7 stroke-1" />,
    },

    {
      name: 'ABOUT',
      slug: 'about',
      icon: <ChatIcon className="w-7 h-7 stroke-1" />,
    },

    {
      name: 'SERMONS',
      slug: 'sermons',
      icon: <BookOpenIcon className="w-7 h-7 stroke-1" />,
    },

    {
      name: 'EVENTS',
      slug: 'events',
      icon: <CalendarIcon className="w-7 h-7 stroke-1" />,
    },

    {
      name: 'MISSIONS',
      slug: 'missions',
      icon: <GlobeIcon className="w-7 h-7 stroke-1" />,
    },
  ],

  // Logo Area data
  Logo: '../public/LOGO_GCM.png',

  //Hero Image data

  SocialMediaIcons: [
    {
      name: 'facebook',
      slug: 'facebook',
      icon: <GlobeIcon />,
    },
  ],

  CardOne: [
    {
      slug: 'visiting-great-commission',
      title: 'Visiting Great Commission?',
      description:
        'We cant waint to weclome you in person. Great Commission Church is all about people.',
      image: '/bg-bg.jpg',
      alt: 'visiting great commission',
      LinkName: 'Plan your visit',
      url: '#',
    },

    {
      slug: 'childrens-ministry',
      title: "Children's Ministry",
      description:
        'We cant waint to weclome you in person. Great Commission Church is all about people.',
      image: '/bg-bg.jpg',
      alt: "children's ministry",
      LinkName: 'Learn More',
      url: '#',
    },

    {
      slug: 'gcc-connect',
      title: "Let's Connect!",
      description:
        'We cant waint to weclome you in person. Great Commission Church is all about people.',
      image: '/bg-bg.jpg',
      alt: 'connect',
      LinkName: 'Learn More',
      url: '#',
    },
  ],

  TeamGroups: [
    {
      slug: 'relationships-marriage',
      title: 'Relationship & Marriage',
      image: '/bg-bg.jpg',
      LinkName: 'View Posts',
      url: '#',
    },

    {
      slug: 'register',
      title: 'Register or Volunteer',
      image: '/bg-bg.jpg',
      LinkName: 'Volunteer',
      url: '#',
    },

    {
      slug: 'music-ministry',
      title: 'Music Ministry',
      image: '/bg-bg.jpg',
      LinkName: 'Read More',
      url: '#',
    },

    {
      slug: 'youth-ministry',
      title: 'Youth Ministry',
      image: '/bg-bg.jpg',
      LinkName: 'Read More',
      url: '#',
    },

    {
      slug: 'womens-ministry',
      title: "Women's Ministry",
      image: '/bg-bg.jpg',
      LinkName: 'Read More',
      url: '#',
    },
    {
      slug: 'mens-ministry',
      title: "Men's Ministry",
      image: '/bg-bg.jpg',
      LinkName: 'Read More',
      url: '#',
    },
  ],

  DiversityText:
    'Great Commission Church is a globally diverse church which is committed to racial equality and justice for all. Our mission is to find greatness in people and empower them to prosper, through proclaiming the Good news of Jesus Christ which has immediate and eternal implications for human flourishing.',

  Events: [
    {
      title: 'Greats Annual Conference',
      image: '/bg-bg.jpg',
      date: '03 JULY 2022',
      LinkName: 'View Event',
      url: '#',
    },

    {
      title: 'Taking your Market Place',
      image: '/bg-bg.jpg',
      date: '03 JULY 2022',
      LinkName: 'View Event',
      url: '#',
    },

    {
      title: 'Worship Night',
      image: '/bg-bg.jpg',
      date: '04 JULY 2022',
      LinkName: 'View Event',
      url: '#',
    },

    {
      title: 'Night of Encounter',
      image: '/bg-bg.jpg',
      date: '03 AUGUST 2022',
      LinkName: 'View Event',
      url: '#',
    },

    {
      title: 'Praise Rally',
      image: '/bg-bg.jpg',
      date: '03 MAY 2022',
      LinkName: 'View Event',
      url: '#',
    },

    {
      title: 'Greats Annual Conference',
      image: '/bg-bg.jpg',
      date: '03 JULY 2022',
      LinkName: 'View Event',
      url: '#',
    },
  ],

  PrayerText: [
    {
      title: 'Need a Prayer?',
      description:
        "There are times when life is overwhelming when all we have is questions. In those moments hope can feel away. The great thing is that prayer shifts our perspective towards the One God who stands ready to listen. No matter what you're facing, we'd love to pray with you.",
      url: '#',
    },
  ],

  FooterData: [
    {
      title: 'I Have Decided',
      description:
        'If you or a friend have recently made the life-transforming decision to follow Jesus, we want to help you as best as we can.',
      buttonDesc: 'MORE INFO',
      url: '#',
    },

    {
      title: 'New to Church?',
      description: 'Find more about who we are and what we believe.',
      buttonDesc: 'MORE INFO',
      url: '#',
    },

    {
      title: 'Groups',
      description:
        "Our groups are relational, personal and informal. Meeting together every week to build friendships to share and process life's experiences.",
      buttonDesc: 'MORE INFO',
      url: '#',
    },

    {
      title: 'Mental Health and Wellbeing',
      description: 'Content, resources and information for overall well-being',
      buttonDesc: 'MORE INFO',
      url: '#',
    },

    {
      title: 'Resources',
      description:
        'Video content, podcasts and devotionals designed to empower you in your walk of birth.',
      buttonDesc: 'MORE INFO',
      url: '#',
    },

    {
      title: 'Speak to Pastor',
      description:
        'We have pastors and team that would love to contact you to ensure that you are connected and supported.',
      buttonDesc: 'MORE INFO',
      url: '#',
    },
  ],
}
