/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
	sidebar: [
		{
			type: "category",
			label: "Introduction",
			collapsed: false,
			items: ["introduction/introduction", "introduction/workflow"],
		},
		{
			type: "category",
			label: "Managing dependencies",
			collapsed: false,
			items: [
				"dependencies/introduction",
				"dependencies/npm",
				"dependencies/images",
				"dependencies/aliases",
				"dependencies/import-maps",
			],
		},
		{
			type: "category",
			label: "Managing the Eik server",
			collapsed: false,
			items: [
				"server/server",
				"server/storage",
				"server/http-api",
				"server/metrics",
			],
		},
		{
			type: "category",
			label: "Guides",
			collapsed: false,
			items: [
				"guides/browser-importmap",
				"guides/esbuild",
				"guides/rollup",
				"guides/postcss",
				"guides/webpack",
				"guides/github-actions",
				"guides/travis",
			],
		},
		{
			type: "category",
			label: "Reference",
			items: [
				{
					type: "autogenerated",
					dirName: "reference",
				},
			],
		},
	],
};
