react:
	yarn run dev

tailwind: 
	npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
	
run:
	react tailwind