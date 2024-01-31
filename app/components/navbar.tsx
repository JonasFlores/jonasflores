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
    <div className="h-full w-full bg-black">
      
      {/* Wraper */}
      <div className={clsx("flex flex-row items-center h-14 px-4 py-4 lg:border-none", {
              'border-b-2 border-green-600': isOpen,
              })}>
        <div className='basis-11/12'>
          <Link href="/" onClick={close} className="group flex w-full items-center gap-x-2.5">
            <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
              Portfolio
            </h3>
          </Link>
        </div>
        
        <div className='text-black hover:text-white'>
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="group px-4 absolute right-0 top-0 flex gap-x-2 h-14 bg-green-600 lg:hidden items-center">
            <div className="font-medium ">Menu</div>
            {isOpen ? (<XIcon className="block w-6" />) : (<MenuAlt2Icon className="block w-6" />)}
          </button>
        </div>

      </div>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 bg-black': isOpen,
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
                    <GlobalNavItem key={item.slug} item={item} close={close} />
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
          'text-gray-400 hover:bg-green-600': !isActive,
          'text-white': isActive,
          'pointer-events-none': item.Disable
        },
      )}
    >
      <div className='flex gap-x-1'>
        {item.name}
        {item.Isexternal? <LinkIcon className='w-4'/> : false}
      </div>
    </Link>
  );
}
