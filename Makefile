react:
	yarn run dev --host

tailwind: 
	npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
	
run:
	react 
	tailwind