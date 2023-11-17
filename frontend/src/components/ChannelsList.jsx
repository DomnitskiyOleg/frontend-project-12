import React from 'react';
import { useDispatch } from 'react-redux';
import { changeChannel } from '../slices/chatDataSlice';

const Channelslist = ({ chanels, currentChannelId }) => {
  const dispatch = useDispatch();
  const channelsList = chanels.map(({ id, name }) => (
    <li key={id} className="w-100 mb-2">
      <button
        className={`text-truncate w-100 nav-link ${id === currentChannelId ? 'active' : ''}`}
        id="v-pills-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-home"
        type="button"
        role="tab"
        aria-controls="v-pills-home"
        aria-selected="true"
        onClick={() => {
          dispatch(changeChannel(id));
        }}
      >
        {name}
      </button>
    </li>
  ));
  return (
    <ul
      className="d-flex w-100 nav nav-pills justify-content-start my-3"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      {channelsList}
    </ul>
  );
};

export default Channelslist;
