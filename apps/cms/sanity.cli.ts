import { SANITY } from 'local-constants';
import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
	api: {
		projectId: SANITY.PROJECT_ID,
		dataset: SANITY.DATASET,
	},
});
