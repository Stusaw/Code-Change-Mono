import('./bootstrap').catch((err) => console.error(err));

import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([loadRemoteEntry('http://localhost:4300/remoteEntry.js', 'mfe')])
  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
