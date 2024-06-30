import React from 'react';

import PromptIcon from './PromptIcon';
import Prompt from './Prompt';

const Prompts = () => {
  const toRingColour = (type) => {
    switch (type) {
      case 'physical': return 'ring-red-500';
      case 'mental': return 'ring-blue-500';
      case 'emotional': return 'ring-emerald-500';
      case 'social': return 'ring-yellow-500';
      case 'environmental': return 'ring-purple-500';
      default: return 'ring-transparent'
    }
  }

  return (
    <div className={`flex p-2 gap-2 justify-around items-center h-[100px] w-full bg-white text-black rounded ring-4 ${toRingColour('emotional')}`}>
      <PromptIcon />
      <Prompt />
    </div>
  )
}

export default Prompts;