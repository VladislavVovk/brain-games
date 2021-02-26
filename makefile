install: all
	npm install

brain-games: 
	node bin/brain-games.js

publish: all
	npm publish --dry-run