"use client"

import React from 'react';

const PromptIcon = ({ type }) => {
  const toIcon = {
    '': String.fromCodePoint('0x1F60A'), // 😊
    'physical': String.fromCodePoint('0x1F938'), // 🤸‍♀️
    'mental': String.fromCodePoint('0x1F9E0'), // 🧠
    'emotional': String.fromCodePoint('0x1F3A8'), // 🎨
    'social': String.fromCodePoint('0x1F973'), // 🥳
    'environmental': String.fromCodePoint('0x1F333'), // 🌳
  }

  return (
    <div className='h-16 w-16 min-w-16 justify-center items-center bg-indigo-500'>
      <span>{toIcon[type]}</span>
    </div>
  )
}

export default PromptIcon;