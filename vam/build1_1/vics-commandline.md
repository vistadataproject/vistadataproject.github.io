

# Create file "vics.sh" at user's root  (~/)

```shell
clear
figlet  VICS Server
echo '     Veteran Integrated Cloud Services (VICS)'
echo '     Centralized Continuity of Care Services'
echo '      Website: http://vistadataproject.info '
echo ' -----------------------------------------------------'
echo ' VICS Status:  vics-   reload | halt | status'
echo ' VICS Access:  vics-   ssh | ssh-web  (vdp/vdp)'
echo ' VICS Router:  vics-   router'
echo ' Client-Web:   vdm-  browser | query'
echo ' Client-CPRS:  cprs- client (fakedoc1/1doc!@#$)'
echo ' -----------------------------------------------------'
```



# Add to users shell profile (dotfile) in user's root directory (~/.profile)

```shell
# VICS - Veteran Integrated Care Services
#-------------------------------------------------------------------------------------
alias vics='clear; sh ~/vics.sh'

# Server Status
alias vics-reload='cd ~/vagrant/VICSServer/setup; vagrant reload'
alias vics-halt='cd ~/vagrant/VICSServer/setup; vagrant halt'
alias vics-status='cd ~/vagrant/VICSServer/setup; vagrant status'

# Server Access
# web ssh: Install on guest VM: sudo apt-get install shellinabox
alias vics-ssh-web='echo "VICSServer ssh user/pass: vdp/vdp"; open https://10.2.2.100:4200/'
alias vics-ssh='echo "VICSServer ssh user/pass: vdp/vdp"; ssh vdp@10.2.2.100'

# Web Clients
alias vicsweb-model='open http://10.2.2.100:9000/schema'
alias vicsweb-query='open http://10.2.2.100:9000/query'
alias vicsweb-router='open http://10.2.2.100:9020/#rpcCounts'

# CPRS Client (wine)
#user/pass:  fakedoc1 / 1doc!@#$ -> fakedoc1#
alias cprs-client='cd ~/.wine/drive_c/Program\ Files/CPRS; wine CPRSChart.exe'


# Clinical Services
alias vicscs-demo=' echo "Starting MVDM Clinical Services demo"; br; cd ~/git/rafael5/vdp/nodeVISTAClients/console; node console.js '
alias vicscs-status='cd ~/git/rafael5/vdp/nodeVISTAClients/console; curl http://10.2.2.100:9030'
# echo "    <==    If the response is no authentication token, the service is working correctly and ON; 
# If there is no respoinse, or failure to connect, the clinical service is OFF."
```


```

