run:
	@make -j 2 vite tailwindcss

vite:
	@npm run dev

build:
	@npx @tailwindcss/cli -i ./input.css -o ./output.css --minify
	@npm run build

tailwindcss:
	@npx @tailwindcss/cli -i ./input.css -o ./output.css --watch=always