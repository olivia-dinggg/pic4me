import React from 'react';

const Prompt = ({ promptText }) => {

  return (
    <div className='flex flex-col gap-2 h-full grow text-center font-sans'>
      <p className='font-medium'>
        Your <i className='text-indigo-500'>sidequest</i> for today is too...
      </p>
      <p className='text-lg font-bold'>
        Introduce yourself to a new person!
      </p>
    </div>
  )
}

export default Prompt;