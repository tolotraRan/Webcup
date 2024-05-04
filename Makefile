run		:
			npm run dev

run\:server	:
			cd ./server && npm run dev

push\:%		:
				git status
				git add .
				git status
				git commit -m "$(subst push:,,$@)"
				git push