#telegraf script
#lookup all ips of nodes
filename="telegraf.conf"
cp configBase.conf $filename
echo "servers = [" >> $filename
quote='"'
comma=','
prefix='http://'
endpoint=':9090/svcstats'
##array of the svcstat endpoints
svcStats=()
##setting up the server addresses to poll from 
for ip in $(etcdctl ls --recursive /contiv.io/service/netplugin/)
do
	# echo $ip
	i="$((${#ip}-17))"
	# j="$((${#ip}-5))"
	ipaddr="${ip:$i:12}"
	svcStat=($prefix$ipaddr$endpoint)
	svcStats+=($svcStat)
	echo $quote$svcStat$quote$comma >> $filename
done

echo "]" >> $filename
##setting up the tags of the containers
echo "## List of tag names to extract from top-level of JSON server response" >> $filename

echo "tag_keys = [" >> $filename
# echo ${svcStats[@]}
for nodeSvcStat in ${svcStats[@]}
do
	# echo '"' >> $filename
	curl -s $nodeSvcStat | python containerExtract.py >> $filename
	# echo '",' >> $filename
done
echo ']' >> $filename


## List of tag names to extract from top-level of JSON server response
#   # tag_keys = [
#   #   "my_tag_1",
#   #   "my_tag_2"
#   # ]

