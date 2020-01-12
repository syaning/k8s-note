clean:
	rm -rf .vuepress/dist

build: clean
	npm install
	BASEURL="/k8s-note/" npm run build

publish: build
	cd .vuepress/dist && \
		git init && \
		git add -A && \
		git commit -m "build" && \
		git push -f https://github.com/syaning/k8s-note.git master:gh-pages

.SILENT: clean build publish
