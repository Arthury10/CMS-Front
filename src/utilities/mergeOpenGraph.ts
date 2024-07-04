import type { Metadata } from 'next';

const defaultOpenGraph: Metadata['openGraph'] = {
	type: 'website',
	siteName: 'Arthur CMS',
	title: 'Arthur CMS',
	description: 'CMS for the modern web',
	images: [
		{
			url: '',
		},
	],
};

export const mergeOpenGraph = (
	og?: Metadata['openGraph']
): Metadata['openGraph'] => {
	return {
		...defaultOpenGraph,
		...og,
		images: og?.images ? og.images : defaultOpenGraph.images,
	};
};
