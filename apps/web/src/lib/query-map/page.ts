import groq from 'groq';
import { schema } from 'local-schema/schemas';
import { z } from 'zod';
import type { QueryBuilder } from '../sanity';

export const queryPage = {
	QUERY: groq`*[_type == "page" && route.slug.current == $slug][0]{
		...,
		og {
			...,
			"images": coalesce(images[]{ ..., "metadata":asset->.metadata }, []),
		},
		"builder": coalesce(builder[]{
			_type == 'sectionHero' => {
				...,
				buttons[] {
					...,
					"link": link[0].reference->{_type, label,route, url},
				},
			},
			_type == 'sectionServices' => {
				...,
				button {
					...,
					"link": link[0].reference->{_type, label,route, url},
				},
				items[]{
					...,
					button {
					...,
						"link": link[0].reference->{_type, label,route, url},
					},
				}
			},
			_type == 'sectionFeatures' => {
				...,
				items[]{
					...,
					"img": img{ ..., "metadata":asset->.metadata },
				}
			},
			_type == 'sectionTestimonials' => {
				...,
				items[]->{
					...,
					"avatar": img{ ..., "metadata":asset->.metadata },
				}
			},
			_type == 'sectionLogos' => {
				...,
				items[]->{
					...,
					"icon": icon{ ..., "metadata":asset->.metadata },
					"logo": logo{ ..., "metadata":asset->.metadata },
				},
			},
		}, [])
	}`,
	SCHEMA: schema.page,
	PARAMS: z.object({ slug: z.string() }),
} satisfies QueryBuilder;
