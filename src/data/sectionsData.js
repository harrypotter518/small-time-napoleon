import React from 'react'

import Music from '../components/Music'
import Video from '../components/Video';
import Shows from '../components/Shows';
import About from '../components/About';
import Pictures from '../components/Pictures';
import Contact from '../components/Contact';

import jeffDave from '../assets/photoSection/jeffDave.jpg'
import daveJeff from '../assets/photoSection/daveJeff.jpg'
import zack from '../assets/photoSection/zack.jpg'
import jeff from '../assets/photoSection/jeffSings.jpg'

const sectionsData = [
  {
    title: 'Music',
    sectionId: 'music',
    backgroundImage: jeffDave,
    children: <Music />,
  },
  {
    title: 'Video',
    sectionId: 'video',
    backgroundImage: zack,
    children: <Video />,
  },
  {
    title: 'Shows',
    sectionId: 'shows',
    backgroundImage: daveJeff,
    children: <Shows />,
  },
  {
    title: 'Photos',
    sectionId: 'pictures',
    backgroundImage: zack,
    children: <Pictures />,
  },
  {
    title: 'About',
    sectionId: 'about',
    backgroundImage: jeffDave,
    children: <About />,
  },
  {
    title: 'Contact us',
    sectionId: 'contact',
    backgroundImage: jeff,
    children: <Contact />,
  },
]

export default sectionsData