import { z } from 'zod';

const SanityKeyed = z.object({
	_key: z.string(),
	_type: z.string(),
});

const SanityReference = z.object({ _type: z.literal('reference'), _ref: z.string() });
const SanityDocument = z.object({
	_id: z.string(),
	_rev: z.string(),
	_type: z.string(),
	_createdAt:z.date(),
	_updatedAt:z.date(),
});

const SanitySlug = z
	.object({ _type: z.literal('slug'), current: z.string() })
	.transform((v) => v.current);
const SanityGeopoint = z.object({
	_type: z.literal('geopoint'),
	alt: z.number(),
	lat: z.number(),
	lng: z.number(),
});

const SanityImage = z.object({ _type: z.string(), asset: SanityReference });
const SanityImageAssetMetadataPaletteSwatch = z.object({
	_type: z.literal('sanity.imagePaletteSwatch'),
	background: z.string(),
	foreground: z.string(),
	population: z.number(),
	title: z.string(),
});
const SanityImageAssetMetadataPalette = z.object({
	_type: z.literal('sanity.imagePalette'),
	darkMuted: SanityImageAssetMetadataPaletteSwatch,
	darkVibrant: SanityImageAssetMetadataPaletteSwatch,
	dominant: SanityImageAssetMetadataPaletteSwatch,
	lightMuted: SanityImageAssetMetadataPaletteSwatch,
	lightVibrant: SanityImageAssetMetadataPaletteSwatch,
	muted: SanityImageAssetMetadataPaletteSwatch,
	vibrant: SanityImageAssetMetadataPaletteSwatch,
});
const SanityImageAssetMetadata = z.object({
	_type: z.literal('sanity.imageMetadata'),
	blurHash: z.string(),
	hasAlpha: z.boolean(),
	isOpaque: z.boolean(),
	lqip: z.string(),
	dimensions: z.object({
		_type: z.literal('sanity.imageDimensions'),
		aspectRatio: z.number(),
		height: z.number(),
		width: z.number(),
	}),
	palette: SanityImageAssetMetadataPalette,
});
const SanityImageAsset = SanityDocument.extend({
	_type: z.literal('sanity.imageAsset'),
	assetId: z.string(),
	extension: z.string(),
	mimeType: z.string(),
	originalFilename: z.string(),
	path: z.string(),
	sha1hash: z.string(),
	size: z.number(),
	uploadId: z.string(),
	url: z.string().url(),
	metadata: SanityImageAssetMetadata,
});

const SanityFile = z.object({ _type: z.literal('file'), asset: SanityReference });
const SanityFileAsset = SanityDocument.extend({
	_type: z.literal('sanity.fileAsset'),
	assetId: z.string(),
	extension: z.string(),
	mimeType: z.string(),
	originalFilename: z.string(),
	path: z.string(),
	sha1hash: z.string(),
	size: z.number(),
	uploadId: z.string(),
	url: z.string().url(),
});

export const sanity = {
	document: SanityDocument,
	file: SanityFile,
	fileasset: SanityFileAsset,
	geopoint: SanityGeopoint,
	image: SanityImage,
	imageAsset: SanityImageAsset,
	imageAssetMetadata: SanityImageAssetMetadata,
	imageAssetMetadataPalette: SanityImageAssetMetadataPalette,
	keyed: SanityKeyed,
	reference: SanityReference,
	slug: SanitySlug,
};
