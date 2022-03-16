src/resume.json : resume.yml
		cat $< | python3 cli.py | jq > $@

.PHONY : serve
serve: src/resume.json
		yarn start
