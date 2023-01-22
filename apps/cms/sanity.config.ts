import { visionTool } from '@sanity/vision';
import { theme } from 'https://themer.sanity.build/api/hues?preset=verdant';
import { SANITY } from 'local-constants';
import { schemaTypes } from 'local-schema/types';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { deskStructure } from './lib/structure';

export default defineConfig({
	theme,
	name: 'default',
	// TODO: Update Sanity Studio title
	title: 'TODO',

	projectId: SANITY.PROJECT_ID,
	dataset: SANITY.DATASET,

	plugins: [
		deskTool({ title: 'Content Management', structure: deskStructure }),
		visionTool({ title: 'Data Tool' }),
	],

	schema: {
		types: schemaTypes,
	},
});
