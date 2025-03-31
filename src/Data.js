import tour1 from './images/tour-1.jpg'
import tour2 from './images/tour-2.jpg'
import tour3 from './images/tour-3.jpg'
import tour4 from './images/tour-4.jpg'
import tour5 from './images/tour-5.jpg'
import tour6 from './images/tour-6.jpg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'servies' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1, 
    icon: 'fas fa-wallet fa-fw', 
    title: 'saving money', 
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },

  {
    id: 2, 
    icon: 'fas fa-tree fa-fw', 
    title: 'endless hiking', 
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },

  {
    id: 3, 
    icon: 'fas fa-socks fa-fw', 
    title: 'amazing comfort', 
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
];

export const  tours = [
  {
    id: 1,
    image: tour1,
    date: 'april 26th, 2025',
    title: 'Aptiw Tour Sydney',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Australia',
    duration: 1,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'april 27th, 2025',
    title: 'Aptiw Tour UAE',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Dubai',
    duration: 2,
    cost: 1500,
  },
  {
    id: 3,
    image: tour3,
    date: 'april 28th, 2025',
    title: 'Aptiw Tour Otawa',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Canada',
    duration: 3,
    cost: 2500,
  },
  {
    id: 4,
    image: tour4,
    date: 'april 29th, 2025',
    title: 'Aptiw Tour Califonia',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'USA',
    duration: 4,
    cost: 3000,
  },
  {
    id: 5,
    image: tour5,
    date: 'april 30th, 2025',
    title: 'Aptiw Tour London',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'UK',
    duration: 5,
    cost: 2900,
  },
  {
    id: 6,
    image: tour6,
    date: 'May 1st, 2025',
    title: 'Aptiw Tour Abuja',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Nigeria',
    duration: 6,
    cost: 1200,
  },
]
