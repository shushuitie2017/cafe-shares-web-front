import React, { useState } from 'react';

import { thereOrNot, whetherPossible, largeAreas, sortOrderTypes } from '../../../data';
import { SearchParams } from '../../../interfaces';
import { Button } from '../../Button';
import { CloseIcon } from '../../icons';

import { FilteringInput } from './FilteringInput';
import { FilteringSelect } from './FilteringSelect';

export interface SearchFormProps {
  setSearchParams: React.Dispatch<React.SetStateAction<SearchParams>>;
}

export const SearchForm: React.FC<SearchFormProps> = ({ setSearchParams }) => {
  const [largeArea, setLargeArea] = useState<string>('Z011');
  const [keyword, setKeyword] = useState<string>('');
  const [wifi, setWifi] = useState<string>('0');
  const [privateRoom, setPrivateRoom] = useState<string>('0');
  const [noSmoking, setNoSmoking] = useState<string>('0');
  const [parking, setParking] = useState<string>('0');
  const [pet, setPet] = useState<string>('0');
  const [card, setCard] = useState<string>('0');
  const [sortOrder, setSortOrder] = useState<string>('4');

  const handleSetSearchParams = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setSearchParams({
      start: 1,
      largeArea: largeArea,
      keyword: keyword,
      wifi: wifi,
      privateRoom: privateRoom,
      noSmoking: noSmoking,
      parking: parking,
      pet: pet,
      card: card,
      order: sortOrder,
    });
  };

  const handleResetSearchParams = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setLargeArea('Z011');
    setKeyword('');
    setWifi('0');
    setPrivateRoom('0');
    setNoSmoking('0');
    setParking('0');
    setPet('0');
    setCard('0');
    setSortOrder('4');
  };

  return (
    <div className='flex flex-col justify-center max-w-lg w-full bg-white p-10'>
      <div className='max-w-sm w-full m-auto'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-semibold'>検索条件</h2>
          <div className='modal-action mt-0'>
            <label htmlFor='search-form'>
              <CloseIcon />
            </label>
          </div>
        </div>
        <div className='flex flex-col my-4'>
          <div className='m-3'>
            <FilteringSelect
              label='都道府県'
              name='large_area'
              data={largeAreas}
              state={largeArea}
              setState={setLargeArea}
            />
          </div>
          <div className='m-3'>
            <FilteringInput
              label='キーワード'
              name='keyword'
              placeholder='店名、住所、駅名など'
              state={keyword}
              setState={setKeyword}
            />
          </div>
          <div className='m-3'>
            <FilteringSelect
              label='Wifi'
              name='wifi'
              data={thereOrNot}
              state={wifi}
              setState={setWifi}
            />
          </div>
          <div className='m-3'>
            <FilteringSelect
              label='個室'
              name='private_room'
              data={thereOrNot}
              state={privateRoom}
              setState={setPrivateRoom}
            />
          </div>
          <div className='m-3'>
            <FilteringSelect
              label='禁煙席'
              name='no_smoking'
              data={thereOrNot}
              state={noSmoking}
              setState={setNoSmoking}
            />
          </div>
          <div className='m-3'>
            <FilteringSelect
              label='駐車場'
              name='parking'
              data={thereOrNot}
              state={parking}
              setState={setParking}
            />
          </div>
          <div className='m-3'>
            <FilteringSelect
              label='ペット'
              name='pet'
              data={whetherPossible}
              state={pet}
              setState={setPet}
            />
          </div>
          <div className='m-3'>
            <FilteringSelect
              label='カード決済'
              name='card'
              data={whetherPossible}
              state={card}
              setState={setCard}
            />
          </div>
          <div className='m-3'>
            <FilteringSelect
              label='並び順'
              name='order'
              data={sortOrderTypes}
              state={sortOrder}
              setState={setSortOrder}
            />
          </div>
        </div>
        <div className='flex justify-between max-w-xs m-auto'>
          <Button
            label='リセット'
            btnColor='btn-accent'
            size='small'
            onClick={handleResetSearchParams}
          />
          <Button label='検索' size='large' onClick={handleSetSearchParams} />
        </div>
      </div>
    </div>
  );
};
