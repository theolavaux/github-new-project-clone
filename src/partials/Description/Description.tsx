import React from 'react';
import './Description.scss';

interface DescriptionProps {
  onRepositoryOwnerSet: Function;
  onRepositoryNameSet: Function;
  onRepositoryDescriptionSet: Function;
  ownersList: { name: string; value: string }[];
  repositoryName: string;
  repositoryOwner: string;
  repositoryDescription: string;
}

const Description = (props: DescriptionProps) => {
  const {
    onRepositoryOwnerSet,
    onRepositoryNameSet,
    onRepositoryDescriptionSet,
    ownersList,
    repositoryName,
    repositoryOwner,
    repositoryDescription,
  } = props;

  return (
    <section className="category description">
      <div className="repository">
        <div className="repository__owner">
          <label htmlFor="repository__owner-choice">Owner</label>
          <div className="repository__image-select">
            <span className="repository__avatar"></span>
            <select
              name="repository-owner"
              id="repository__owner-choice"
              onChange={(e) => onRepositoryOwnerSet(e.target.value)}
              value={repositoryOwner}
            >
              {ownersList.map((owner) => (
                <option key={owner.value} value={owner.value}>
                  {owner.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="repository__separator">
          <span>/</span>
        </div>

        <div className="repository__name">
          <label htmlFor="repository__name-input">Repository name</label>
          <input
            type="text"
            name="repository-name"
            id="repository__name-input"
            value={repositoryName}
            onChange={(e) => onRepositoryNameSet(e.target.value)}
          />
        </div>
      </div>

      <div className="repository__inspiration">
        Great repository names are short and memorable. Need inspiration? How
        about <a href="/">super-duper-disco</a>?
      </div>

      <div className="repository__description">
        <label htmlFor="description">
          Description <span>(optional)</span>
        </label>
        <div>
          <input
            type="text"
            name="description"
            id="description"
            value={repositoryDescription}
            onChange={(e) => onRepositoryDescriptionSet(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export { Description as default };
