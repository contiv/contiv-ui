#script to generate the config file for telegraf
#lookup all ips of nodes, passes them to a python script which
#calls svcstats, and prints out all the endpoint IPs.
#Output is then saved to the file.
filename="telegrafGen.conf"
cp configBase.conf $filename
echo "servers = [" >> $filename
prefix='http://'

##setting up the server addresses to poll from 
for ip in $(etcdctl ls --recursive /contiv.io/service/netplugin/)
do
    ip="${ip##*/}"
    ip="${ip%:*}"
    svcStat=($prefix$ip)
    ret=$(python containerExtract.py $svcStat)
    echo $ret >> $filename

done

echo "]" >> $filename

##setting up the tags
echo "## List of tag names to extract from top-level of JSON server response" >> $filename

echo 'tag_keys = ["EndpointIP","ProviderIP","ServiceIP"]' >> $filename


