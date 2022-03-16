resume.json : resume.yml
		cat $< | python3 cli.py | jq > $@

.PHONY : serve
serve: resume.json
		cp $< src
		yarn start
