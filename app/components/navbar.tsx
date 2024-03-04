'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { menus, MenuItem } from '@/data/menus';
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';
import { MenuAlt2Icon, XIcon, LinkIcon } from '@heroicons/react/solid';

export function NavBar(){
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="h-full w-full bg-neutral-500 bg-opacity-80 lg:bg-opacity-100 lg:bg-black">
      
      {/* Wraper */}
      <div className={clsx("flex flex-row items-center h-14 px-4 py-4 lg:border-none", {
              'border-b-2 border-slate-700': isOpen,
              })}>
        <div className='basis-3/12 lg:basis-full'>
          <Link href="/" onClick={close} className="group flex w-full items-center gap-x-2.5">
            <h3 className="font-bold tracking-wide text-white group-hover:hover:text-slate-200">
              Portfolio
            </h3>
          </Link>
        </div>
        
        <div className='hover:text-slate-200 text-white'>
          <button 
            type="button"
            onClick={() => setIsOpen(!isOpen)} 
            className="px-4 absolute right-0 top-0 flex h-14 lg:hidden items-center">
            
              <div className="font-medium ">Menu</div>
              {isOpen ? (<XIcon className="block w-4 -mb-1" />) : (<MenuAlt2Icon className="block w-4 -mb-1" />)}
          </button>
        </div>

      </div>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 z-50 bottom-0 top-14 bg-black': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px- pb-24 pt-5">
          {menus.map((section) => {
            return (
              <div key={section.name}>
                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/40">
                  <div>{section.name}</div>
                </div>

                <div className='mx-2'>
                  {section.itens.map((item) => (
                    <GlobalNavItem key={item.name} item={item} close={close} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: MenuItem;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;
  
  let href = item.Isexternal ? item.slug : '/' + item.slug

  return (
    <Link
      onClick={close}
      href={href}
      target={clsx({'_blank': item.Isexternal})}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
        {
          'text-gray-400 hover:bg-zinc-800': !isActive,
          'text-white': isActive,
          'pointer-events-none': item.Disable
        },
      )}
    >
      <div className='flex gap-x-1'>
        {item.name}
        {item.Isexternal? <LinkIcon className='w-4 -mb-[2px]'/> : false}
      </div>
    </Link>
  );
}
