import type { StructureResolver } from 'sanity/desk';

export const deskStructure: StructureResolver = async (S, { getClient }) => {
	const client = getClient({ apiVersion: '2022-08-15' });

	return S.list()
		.title('Content Management')
		.items([
			S.listItem().title('Pages').child(S.documentTypeList('page').title('Page')),

			S.divider(),

			S.documentListItem({
				id: 'singleton',
				title: 'page',
				schemaType: 'page',
			}),
		]);
};
