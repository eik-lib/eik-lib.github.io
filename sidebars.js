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
				"dependencies/aliases",
				"dependencies/import-maps",
			],
		},
		{
			type: "category",
			label: "Managing the Eik server",
			items: [
				"server/server",
				"server/js-api",
				"server/sink",
				"server/http-api",
				"server/file-structure",
				"server/metrics",
			],
		},
		{
			type: "category",
			label: "Guides",
			items: ["guides/travis"],
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
