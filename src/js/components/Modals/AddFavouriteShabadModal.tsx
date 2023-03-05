/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCreateFavouriteShabad } from '@/components/FavouriteShabadButton/hooks';
import { setIsModalOpen } from '@/features/actions';
import { getShabadId } from '@/util';
import Times from '@/components/Icons/Times';

const AddFavouriteShabadModal = () => {
  const dispatch = useDispatch();
  const gurbaniVerses = useSelector(state => state.gurbaniVerses);
  const verses = gurbaniVerses.map(gurbani => gurbani.verse.unicode);
  const shabadId = getShabadId(gurbaniVerses[0]);
  const [pankti, setPankti] = useState<string>(verses[0]);
  const [comments, setComments] = useState<string>('');
  const create = useCreateFavouriteShabad()
  const onSave = () => {
    console.log(shabadId, pankti, comments, "onSave..");
    // TO DO- use create.mutate
    dispatch(setIsModalOpen(false))
  }

  return (
    <div className='add-fav-shabad-container'>
      <div className='header'>
        <span>Add to Favourites</span>
        <button className='settings-times' aria-label="close" onClick={() => dispatch(setIsModalOpen(false))}><Times /></button>
      </div>
      <div className='content'>
        <label className="title">Select a line to save as the title:
          <select value={pankti} onChange={(e) => setPankti(e.target.value)}>
            {verses.map((value, idx) =>
              <option key={`${idx}-${value}`}>
                {value}
              </option>)
            }
          </select>
        </label>
        <label className='title'>Notes:
          <textarea
            name="comments"
            rows={4}
            cols={30}
            style={{ resize: "none" }}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </label>
        <div className="save-btn">
          <button className='btn btn-primary' onClick={onSave}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default AddFavouriteShabadModal;
