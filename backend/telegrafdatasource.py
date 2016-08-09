from BaseHTTPServer import BaseHTTPRequestHandler,HTTPServer
import urllib2
import json
import sys


PORT_NUMBER = 4000

#This class will handles any incoming request from
#the browser 
class myHandler(BaseHTTPRequestHandler):
	
	def labelParser(self, labels):
		#first 4 char are map[ and last is ]
		labelMap = {}
		labels = labels[4:-1]
		labels = labels.split()
		for l in labels:
			index = l.find(':')
			key = l[0:index]
			val = l[index+1:]
			labelMap[key] = val
		return labelMap


	#Handler for the GET requests
	def do_GET(self):
		# print(self.path)
		svcstats = urllib2.urlopen("http://localhost:9090/svcstats").read()
		svcstatsjson = json.loads(str(svcstats))
		self.send_response(200)
		self.send_header('Content-type','application/json')
		self.end_headers()
		# Send the html message
		# self.wfile.write("Hello World !")
		# print(self.path)
		# print(svcstatsjson)
		# print(svcstats)
		if ('/services' in self.path):
			# containers = [key for key in svcstatsjson]
			serviceInspectNames = []

			services = urllib2.urlopen("http://localhost:9999/api/v1/serviceLBs/").read()
			for s in json.loads(services):
				name = str(s["tenantName"]) + ':' + str(s["serviceName"])
				serviceInspectNames.append(name)
			# #inspect each service
			childrenServiceDict = {}
			childrenServiceDict["topLevel"] = []
			ancestorServiceDict = {}
			endpoints, providers = [], []
			labelMap = {}
			selectorMap = {}

			for serviceName in serviceInspectNames:
				endpoints.append(serviceName)
				service = urllib2.urlopen("http://localhost:9999/api/v1/inspect/serviceLBs/" + serviceName + '/').read()
				serviceJson = json.loads(service)

				#getting selectors
				selectorMapLocal = {}
				for selector in serviceJson["Config"]["selectors"]:
					index = selector.find('=')
					key = selector[0:index]
					val = selector[index+1:]
					selectorMapLocal[key] = val
				selectorMap[serviceName] = selectorMapLocal

				providerList = serviceJson["Oper"]["providers"]
				ipAddrs = []
				for provider in providerList:
					for p in provider["ipAddress"]:
						if p != "":
							# containers.append(str(p))
							if p not in providers:
								providers.append(str(p))
								labelMap[p] = self.labelParser(provider["labels"])
							ipAddrs.append(str(p))
							ancestorServiceDict[str(p)] = [serviceName]
					# ipAddrs += [str(p) for p in provider["ipAddress"] if p != ""]
				childrenServiceDict[serviceName] = ipAddrs
				childrenServiceDict["topLevel"].append(serviceName)
			ret = {}
			ret["ancestors_struct"] = ancestorServiceDict
			ret["children_struct"] = childrenServiceDict
			ret["endpoints"] = endpoints
			ret["providers"] = providers
			ret["labels"] = labelMap
			ret["serviceSelectors"] = selectorMap
			# ret["nodes"] = c
			self.wfile.write(json.dumps(ret))
		else:
			path = self.path[1:];
			svcstat = svcstatsjson[path]
			ret = {}
			ret["EndpointIP"] = str(svcstat["EndpointIP"])
			ret["ServiceIP"] = str(svcstat["SvcStats"].keys()[0])
			service = ret["ServiceIP"];
			ret["ProviderIP"] = str(svcstat["SvcStats"][service]["ProviderIP"])
			ret["BytesIn"] = int(svcstat["SvcStats"][service]["Stats"]["BytesIn"])
			ret["BytesOut"] = int(svcstat["SvcStats"][service]["Stats"]["BytesOut"]) 
			ret["PacketsIn"] = int(svcstat["SvcStats"][service]["Stats"]["PacketsIn"]) 
			ret["PacketsOut"] = int(svcstat["SvcStats"][service]["Stats"]["PacketsOut"]) 
			self.wfile.write(json.dumps(ret))
		# if (self.path == "/11.1.1.2"):
		# 	svcstat = svcstatsjson["11.1.1.2"]
		# 	ret = {}
		# 	ret["EndpointIP"] = str(svcstat["EndpointIP"])
		# 	ret["ServiceIP"] = str(svcstat["SvcStats"].keys()[0])
		# 	ret["ProviderIP"] = str(svcstat["SvcStats"]["100.1.1.3"]["ProviderIP"])
		# 	ret["BytesIn"] = int(svcstat["SvcStats"]["100.1.1.3"]["Stats"]["BytesIn"])
		# 	ret["BytesOut"] = int(svcstat["SvcStats"]["100.1.1.3"]["Stats"]["BytesOut"]) 
		# 	ret["PacketsIn"] = int(svcstat["SvcStats"]["100.1.1.3"]["Stats"]["PacketsIn"]) 
		# 	ret["PacketsOut"] = int(svcstat["SvcStats"]["100.1.1.3"]["Stats"]["PacketsOut"]) 
		# 	self.wfile.write(json.dumps(ret))
		# elif (self.path == "/11.1.1.3"):
		# 	svcstat = svcstatsjson["11.1.1.3"]
		# 	ret = {}
		# 	ret["EndpointIP"] = str(svcstat["EndpointIP"])
		# 	ret["ServiceIP"] = str(svcstat["SvcStats"].keys()[0])
		# 	ret["ProviderIP"] = str(svcstat["SvcStats"]["100.1.1.3"]["ProviderIP"])
		# 	ret["BytesIn"] = int(svcstat["SvcStats"]["100.1.1.3"]["Stats"]["BytesIn"])
		# 	ret["BytesOut"] = int(svcstat["SvcStats"]["100.1.1.3"]["Stats"]["BytesOut"]) 
		# 	ret["PacketsIn"] = int(svcstat["SvcStats"]["100.1.1.3"]["Stats"]["PacketsIn"]) 
		# 	ret["PacketsOut"] = int(svcstat["SvcStats"]["100.1.1.3"]["Stats"]["PacketsOut"]) 
		# 	self.wfile.write(json.dumps(ret))
		# elif ('/services' in self.path):
		# 	# containers = [key for key in svcstatsjson]
		# 	serviceInspectNames = []

		# 	services = urllib2.urlopen("http://localhost:9999/api/v1/serviceLBs/").read()
		# 	for s in json.loads(services):
		# 		name = str(s["tenantName"]) + ':' + str(s["serviceName"])
		# 		serviceInspectNames.append(name)
		# 	# #inspect each service
		# 	childrenServiceDict = {}
		# 	childrenServiceDict["topLevel"] = []
		# 	ancestorServiceDict = {}
		# 	endpoints, providers = [], []
		# 	labelMap = {}
		# 	selectorMap = {}

		# 	for serviceName in serviceInspectNames:
		# 		endpoints.append(serviceName)
		# 		service = urllib2.urlopen("http://localhost:9999/api/v1/inspect/serviceLBs/" + serviceName + '/').read()
		# 		serviceJson = json.loads(service)

		# 		#getting selectors
		# 		selectorMapLocal = {}
		# 		for selector in serviceJson["Config"]["selectors"]:
		# 			index = selector.find('=')
		# 			key = selector[0:index]
		# 			val = selector[index+1:]
		# 			selectorMapLocal[key] = val
		# 		selectorMap[serviceName] = selectorMapLocal

		# 		providerList = serviceJson["Oper"]["providers"]
		# 		ipAddrs = []
		# 		for provider in providerList:
		# 			for p in provider["ipAddress"]:
		# 				if p != "":
		# 					# containers.append(str(p))
		# 					if p not in providers:
		# 						providers.append(str(p))
		# 						labelMap[p] = self.labelParser(provider["labels"])
		# 					ipAddrs.append(str(p))
		# 					ancestorServiceDict[str(p)] = [serviceName]
		# 			# ipAddrs += [str(p) for p in provider["ipAddress"] if p != ""]
		# 		childrenServiceDict[serviceName] = ipAddrs
		# 		childrenServiceDict["topLevel"].append(serviceName)
		# 	ret = {}
		# 	ret["ancestors_struct"] = ancestorServiceDict
		# 	ret["children_struct"] = childrenServiceDict
		# 	ret["endpoints"] = endpoints
		# 	ret["providers"] = providers
		# 	ret["labels"] = labelMap
		# 	ret["serviceSelectors"] = selectorMap
		# 	# ret["nodes"] = c
		# 	self.wfile.write(json.dumps(ret))
		# elif ('/visualization/influx' in self.path) :
		# 	query = self.path[22:];
		# 	url = "http://localhost:8086/" + query
		# 	# print(url)
		# 	ret = urllib2.urlopen(url).read()
		# 	self.wfile.write(ret);

		return

try:
	#Create a web server and define the handler to manage the
	#incoming request
	server = HTTPServer(('', PORT_NUMBER), myHandler)
	print 'Started httpserver on port ' , PORT_NUMBER
	
	#Wait forever for incoming htto requests
	server.serve_forever()

except KeyboardInterrupt:
	print '^C received, shutting down the web server'
	server.socket.close()





