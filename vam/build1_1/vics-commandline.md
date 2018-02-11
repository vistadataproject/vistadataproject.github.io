# VICS Server management command line shortcuts

To create a menu of commands that appears when one types "vics"

### Create file "vics.sh" at user's root  (~/vics.sh) with the following:

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
echo ' Client-Web:   vics-   browser | query'
echo ' Client-CPRS:  cprs-   client (fakedoc1/1doc!@#$)'
echo ' -----------------------------------------------------'
```


### Add the following users shell profile in user's root (~/.profile)

```shell
# VICS - Veteran Integrated Care Services
#-------------------------------------------------------------------------------------
alias vics='clear; sh ~/vics.sh'

# Server Status
alias vics-reload='cd ~/vagrant/VICSServer/setup; vagrant reload'
alias vics-halt='cd ~/vagrant/VICSServer/setup; vagrant halt'
alias vics-status='cd ~/vagrant/VICSServer/setup; vagrant status'

# Server Access:  IP 10.2.2.222
# web ssh: Install on guest VM: sudo apt-get install shellinabox
alias vics-ssh-web='echo "VICSServer ssh user/pass: vdp/vdp"; open https://10.2.2.222:4200/'
alias vics-ssh='echo "VICSServer ssh user/pass: vdp/vdp"; vagrant ssh'
# or:  ssh vdp@10.2.2.222'

# Web Clients
alias vics-model='open http://10.2.2.222:9000/schema'
alias vics-query='open http://10.2.2.222:9000/query'
alias vics-router='open http://10.2.2.222:9020/#rpcCounts'

# CPRS Client (wine)
#user/pass:  fakedoc1 / 1doc!@#$ -> fakedoc1#
alias cprs-client='cd ~/.wine/drive_c/Program\ Files/CPRS; wine CPRSChart.exe'

```

