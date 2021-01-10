import React from 'react';
import './Initialization.scss';

interface InitializationProps {
  createReadme: boolean;
  addGitIgnore: boolean;
  useLicense: boolean;
  onReadmeSet: Function;
  onGitIgnoreSet: Function;
  onLicenseSet: Function;
}

const Initialization = (props: InitializationProps) => {
  const {
    createReadme,
    addGitIgnore,
    useLicense,
    onReadmeSet,
    onGitIgnoreSet,
    onLicenseSet,
  } = props;

  return (
    <section className="category initialization">
      <div className="initialization__title">
        Initialize this repository with:
      </div>
      <div className="initialization__subtitle">
        Skip this step if you’re importing an existing repository.
      </div>

      <div className="initialization__option initialization__readme">
        <div className="initialization__checkbox">
          <input
            type="checkbox"
            id="readme"
            name="readme"
            checked={createReadme}
            onChange={(e) => onReadmeSet(e.target.checked)}
          />
        </div>
        <div className="initialization__information">
          <label htmlFor="readme">Add a README file</label>
          <span>
            This is where you can write a long description for your project.{' '}
            <a href="/">Learn more.</a>
          </span>
        </div>
      </div>

      <div className="initialization__option initialization__gitignore">
        <div className="initialization__checkbox">
          <input
            type="checkbox"
            id="gitignore"
            name="gitignore"
            checked={addGitIgnore}
            onChange={(e) => onGitIgnoreSet(e.target.checked)}
          />
        </div>
        <div className="initialization__information">
          <label htmlFor="gitignore">Add .gitignore</label>
          <span>
            Choose which files not to track from a list of templates.{' '}
            <a href="/">Learn more.</a>
          </span>
        </div>
      </div>

      <div className="initialization__option initialization__license">
        <div className="initialization__checkbox">
          <input
            type="checkbox"
            id="license"
            name="license"
            checked={useLicense}
            onChange={(e) => onLicenseSet(e.target.checked)}
          />
        </div>
        <div className="initialization__information">
          <label htmlFor="license">Choose a license</label>
          <span>
            A license tells others what they can and can't do with your code.{' '}
            <a href="/">Learn more.</a>
          </span>
        </div>
      </div>
    </section>
  );
};

export { Initialization as default };
