import React from 'react';
import './SubscribeUs.css'

const SubscribeUs = () => {
 

 

    return (
      <div className='email-subscribe-main mt-10'>
        <h1 className='text-3xl font-semibold text-[#2c2370]'>Subscribe for Get Updates</h1>
        <div className='email-subscribe'>
             <div>
             <label class="block">
  <span class="after:content-[''] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
  
  </span>
          <input type="email" name="email" class="w-80 mt-1 px-3 py-2 bg-white border-2 shadow-sm border-[#2c2370] placeholder-slate-400 focus:outline-none focus:border-[#2c2370] focus:border-[#2c2370] block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" /><br/>
        
        </label>
          </div>
        
        <div>
           <button class="rounded-full text-white bg-[#2c2370]">Subscribe</button>
        </div>
        </div>
     
            
        </div>
    );
};

export default SubscribeUs;