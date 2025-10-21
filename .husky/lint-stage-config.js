export default {
	"*.{js,jsx,ts,tsx,svelte}": ["prettier --write", "eslint --fix", "eslint"],
	"*.json": ["prettier --write"],
	"src/lib/**/*.{ts,spec.ts}": ["vitest related --passWithNoTests"],
	"src/routes/**/*.{ts,spec.ts}": ["vitest related --passWithNoTests"],
};
