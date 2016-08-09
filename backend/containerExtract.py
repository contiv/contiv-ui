#python script for extracting containers not part of a service

import json
import sys

def extract(arg):
	if (arg == ""):
		return
	parsed = json.loads(arg)
	for key in parsed:
		print('"' + key + '",')
	return
# print sys.stdin.read()
extract(sys.stdin.read())
