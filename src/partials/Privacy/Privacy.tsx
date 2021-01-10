import React from 'react';
import './Privacy.scss';

interface PrivacyProps {
  onRepositoryPrivacySet: Function;
  repositoryPrivacy: string;
}

const Privacy = (props: PrivacyProps) => {
  const { onRepositoryPrivacySet, repositoryPrivacy } = props;

  return (
    <section className="category privacy">
      <div className="privacy__row">
        <input
          type="radio"
          id="public"
          name="privacy"
          className="privacy__input"
          checked={repositoryPrivacy === 'public'}
          onChange={() => onRepositoryPrivacySet('public')}
        />
        <svg
          height="32"
          className="privacy__icon"
          viewBox="0 0 24 24"
          version="1.1"
          width="32"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M3 2.75A2.75 2.75 0 015.75 0h14.5a.75.75 0 01.75.75v20.5a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h5.25v-4H6A1.5 1.5 0 004.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 01-.6 1.374A3.25 3.25 0 013 18.75v-16zM19.5 1.5V15H6c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H19.5z"
          ></path>
          <path d="M7 18.25a.25.25 0 01.25-.25h5a.25.25 0 01.25.25v5.01a.25.25 0 01-.397.201l-2.206-1.604a.25.25 0 00-.294 0L7.397 23.46a.25.25 0 01-.397-.2v-5.01z"></path>
        </svg>

        <div className="privacy__information">
          <label className="privacy__label" htmlFor="public">
            Public
          </label>
          <span className="privacy__text">
            Anyone on the internet can see this repository. You choose who can
            commit.
          </span>
        </div>
      </div>

      <div className="privacy__row">
        <input
          type="radio"
          id="private"
          name="privacy"
          className="privacy__input"
          checked={repositoryPrivacy === 'private'}
          onChange={() => onRepositoryPrivacySet('private')}
        />
        <svg
          height="32"
          className="privacy__icon privacy__icon--private"
          viewBox="0 0 24 24"
          version="1.1"
          width="32"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 012.5 2.5v8a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 19.5v-8A2.5 2.5 0 015.5 9H6zm1.5-1.75C7.5 4.58 9.422 2.5 12 2.5c2.578 0 4.5 2.08 4.5 4.75V9h-9V7.25zm-3 4.25a1 1 0 011-1h13a1 1 0 011 1v8a1 1 0 01-1 1h-13a1 1 0 01-1-1v-8z"
          ></path>
        </svg>
        <div className="privacy__information">
          <label className="privacy__label" htmlFor="private">
            Private
          </label>
          <span className="privacy__text">
            You choose who can see and commit to this repository.
          </span>
        </div>
      </div>
    </section>
  );
};

export { Privacy as default };
