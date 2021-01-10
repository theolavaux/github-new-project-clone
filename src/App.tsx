import React, { useState } from 'react';
import './App.scss';

import Head from './partials/Head/Head';
import Description from './partials/Description/Description';
import Privacy from './partials/Privacy/Privacy';
import Initialization from './partials/Initialization/Initialization';

const App = () => {
  // Description props
  const [ownersList] = useState([{ name: 'theolavaux', value: 'theolavaux' }]);
  const [repositoryOwner, setRepositoryOwner] = useState(ownersList[0].value);
  const [repositoryName, setRepositoryName] = useState('');
  const [repositoryDescription, setRepositoryDescription] = useState('');

  // Privacy props
  const [repositoryPrivacy, setRepositoryPrivacy] = useState('public');

  // Initialization props
  const [createReadme, setReadme] = useState(false);
  const [addGitIgnore, setGitIgnore] = useState(false);
  const [useLicense, setLicense] = useState(false);

  return (
    <div className="App">
      <form>
        <Head />
        <Description
          onRepositoryOwnerSet={(owner: string) => setRepositoryOwner(owner)}
          onRepositoryNameSet={(name: string) => setRepositoryName(name)}
          onRepositoryDescriptionSet={(description: string) =>
            setRepositoryDescription(description)
          }
          ownersList={ownersList}
          repositoryName={repositoryName}
          repositoryOwner={repositoryOwner}
          repositoryDescription={repositoryDescription}
        />
        <Privacy
          onRepositoryPrivacySet={(privacy: string) =>
            setRepositoryPrivacy(privacy)
          }
          repositoryPrivacy={repositoryPrivacy}
        />
        <Initialization
          createReadme={createReadme}
          addGitIgnore={addGitIgnore}
          useLicense={useLicense}
          onReadmeSet={(readme: boolean) => setReadme(readme)}
          onGitIgnoreSet={(gitignore: boolean) => setGitIgnore(gitignore)}
          onLicenseSet={(license: boolean) => setLicense(license)}
        />

        <input id="createRepository" type="submit" value="Create repository" />
      </form>
    </div>
  );
};

export default App;
