import React from 'react';

const Post = () => {
  return (
    <div className='relative w-full aspect-[3/4] rounded-lg'>
      <img
        className='absolute inset-0 w-full h-full rounded-lg'
        src='https://images.unsplash.com/photo-1682495867890-c0f5f045f303?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <div className="absolute flex top-2 w-full h-12">
        <img 
          className='w-8 h-8 mx-2 aspect-square rounded-full'
          src='https://cdn.pixabay.com/photo/2013/07/12/14/07/basketball-147794_1280.png'
        />
        <div className='flex flex-col text-xs text-black'>
          <div> Parv </div>
          <div> 30/06/2024 </div>
        </div>
      </div>
    </div>
  )
}

export default Post;