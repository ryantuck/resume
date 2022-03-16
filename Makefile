to_json:
		yq '.' resume.yml > resume/src/resume.json

serve:
		cd resume && yarn start
