'use client';
import React, {Fragment, useState} from 'react';
import {Combobox, Transition} from '@headlessui/react';
import Image from 'next/image';
import {manufacturers} from '@/constants/constants';

interface ISearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

const SearchManufacturer = (props: ISearchManufacturerProps) => {

  const {manufacturer, setManufacturer} = props;
  const [query, setQuery] = useState('');
  const filteredManufactures = query === '' ? manufacturers : manufacturers.filter((item) => (
    item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
  ))
  return (
    <div className={'search-manufacturer'}>
      <Combobox>
        <div className={'relative w-full'}>
          <Combobox.Button classnName={'absolute top-[14px]'}>
            <Image src={'/car-logo.svg'} alt={'Car logo'} width={20} height={20} className={'ml-4'}/>
          </Combobox.Button>
          <Combobox.Input className={'search-manufacturer__input'} placeholder={'Volkswagen'}
                          displayValue={(manufacturer: string) => manufacturer}
                          onChange={(e) => setQuery(e.target.value)}
          />
          <Transition leave={'transition ease-in duration-100'} leaveFrom={'opacity-100'}
                      leaveTo={'opacity-0'}
                      afterLeave={() => setQuery('')}>
            <Combobox.Options>
              {filteredManufactures.length === 0 && query !== '' ? (
                <Combobox.Option value={query} className={'search-manufacturer__option'}>
                  Create '{query}'
                </Combobox.Option>
              ) : (
                filteredManufactures.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({active}) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                    value={item}>
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export {SearchManufacturer};
