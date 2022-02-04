import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return <div className='flex items-center justify-center shadow-xl rounded-xl mt-6 p-6 h-96'>
      <div className=' text-center text-zinc-600' >
          <h1 className='sm:text-4xl font-semibold' >404 | Sorry</h1>
          <h2 className='sm:text-xl' >This page could not be found.</h2>
          <p className=' sm:text-md' > Go back to <Link href={'/'} ><a className='underline' >Home page</a></Link> </p>
      </div>
  </div>;
}
