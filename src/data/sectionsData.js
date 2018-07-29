import React from 'react'

import Music from '../components/Music'
import Video from '../components/Video';
import Shows from '../components/Shows';
import About from '../components/About';
import Pictures from '../components/Pictures';
import Contact from '../components/Contact';

import dan from '../assets/photoSection/dan.jpg'
import jeffDave from '../assets/photoSection/jeffDave.jpg'
import daveJeff from '../assets/photoSection/daveJeff.jpg'
import zack from '../assets/photoSection/zack.jpg'
import jeff from '../assets/photoSection/jeffSings.jpg'
import trio from '../assets/photoSection/newTrio.jpg'

const sectionsData = [
  {
    title: 'Music',
    sectionId: 'music',
    backgroundImage: dan,
    children: <Music />,
  },
  {
    title: 'Videos',
    sectionId: 'video',
    backgroundImage: jeff,
    children: <Video />,
  },
  {
    title: 'Photos',
    sectionId: 'pictures',
    backgroundImage: zack,
    children: <Pictures />,
  },
  {
    title: 'Shows',
    sectionId: 'shows',
    backgroundImage: daveJeff,
    children: <Shows />,
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
    backgroundImage: trio,
    children: <Contact />,
  },
]

export default sectionsData