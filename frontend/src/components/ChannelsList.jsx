import React from 'react';

const Channelslist = () => (
  <ul
    className="d-flex w-100 nav nav-pills justify-content-start my-3"
    id="v-pills-tab"
    role="tablist"
    aria-orientation="vertical"
  >
    <li className="w-100 mb-2">
      <button
        className="w-100 nav-link active"
        id="v-pills-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-home"
        type="button"
        role="tab"
        aria-controls="v-pills-home"
        aria-selected="true"
      >
        Home
      </button>
    </li>
    <li className="w-100 mb-2">
      <button
        className="w-100 nav-link"
        id="v-pills-profile-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-profile"
        type="button"
        role="tab"
        aria-controls="v-pills-profile"
        aria-selected="false"
      >
        Profile
      </button>
    </li>
  </ul>
);

export default Channelslist;
