const defaults = { nonTextBehavior: 'remove' };
function toPlainText(blocks: any[], opts = {}): string {
	const options = Object.assign({}, defaults, opts);
	return blocks
		.map((block) => {
			if (block._type !== 'block' || !block.children) return '';
			else return block.children.map((child: any) => child.text).join('');
		})
		.join('\n\n');
}

export const portableText = { toPlainText };
