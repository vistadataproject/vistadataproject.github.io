---
layout: default
title: VAM B1 Demo Setup
---

Installing components to make VAM Demo Linode including _VISTA_, _Router_ (w/ management client), _VICS Server_. Its default web site/page will describe how to install CPRS and other pieces needed to run the demo. The Clinical Web Client will be added in Build 2.

__Note__: this is a messy wiki, mixing howto and requirements. Will become a howto only. __Anyone with basic sys admin skills (can use command line, _ssh_, _git clone_ ...) should be able to install the VAM Demo__ on a Linode by following these instructions.

## Server Configuration

### Tools
Install the required Linux tools by issuing the following command:

```shell
sudo apt-get install -y wget git npm unzip
```

Install the required Javascript tools by issuing the following command:

```shell
npm install -g pm2
```

### Setup User Account
Before we load any of the server software, we need to create a `vamuser` user account. All of the software will run from the `vamuser` user account and will reside in the `vamuser` home directory. To create the user account, perform the following command from an SSH session:

> TBD

Setup the `NODE_ENV` variable to `DEMO`:
`cd ~` => Add the following line at the end of .bashrc: `export NODE_ENV=DEMO` => `source .bashrc`

### Firewall (UFW)
Ubuntu 14.04 should come with UFW (Uncomplicated Fire Wall) installed. If not, refer to the following tutorial to install: https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-14-04

Prior to enabling UFW, allow access the following ports:

| Port | Service |
| ---- | ------- |
| 22 | SSH |
| 443 | HTTPS |
| 9000 | FMQL Server |
| 9010 | RPC Router |
| 9011 | RPC Router |
| 9012 | RPC Router Manager Client |

Allow access to the ports above using the following command:

```shell
> sudo ufw allow {{port or service name}}
```

Then, when all the ports are allowed, enable the firewall using the following command:

```shell
> sudo ufw enable
```

You will receive a warning that says the "command may disrupt existing ssh connections." We already set up a firewall rule that allows SSH connections so it should be fine to continue. Respond to the prompt with `y`.

### HTTPS Nginx Web Server
* [Install Nginx](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04)
* [Install SSL via certbot/Let's Encrypt](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04)
* [Setup temporary redirect to vistadataproject.info](https://www.digitalocean.com/community/tutorials/how-to-create-temporary-and-permanent-redirects-with-nginx)

<br/><br/>

## VISTA

__Only the native RPC Broker port is relevant for the VAM Demo__: the VISTA is _nodeVISTA_ but its JS-based emulation stack is not part of the VAM demo. Emulation will happen in the VICS Server and JS-based parsing and formatting will happen in the distinct RPC Router. We will remove the VDP V2 RPC Emulation code from nodeVISTA in Build 2. In Build 2, this VISTA will just be FOIA with FMQL.

[setupNative](https://github.com/vistadataproject/nodeVISTA/blob/master/setup/setupNative.sh) is in nodeVISTA git. To install, _git clone_ nodeVISTA's git and go into the _setup_ subdirectory. Then ...

> sudo ./setupNative.sh

This will update the OS, clone _osehraVISTA_, install _node.js_, _fmql_ and _VDP_ (making _nodeVISTA_). After installation, access FMQL's [Rambler](http://198.74.51.41:9000/rambler#2-25) to test effective installation.

Note that raw, demo database was backed up for restoration with ...

> mupip backup -database "*" /home/nodevista/g/nodevistaOrig.dat

__** TODO **__: [restoring](https://github.com/vistadataproject/nodeVISTA/wiki/Developing-write-back-in-osehraVISTA) the database, shutting down VISTA etc. Reproduce here.

As this is _nodeVISTA_, it has the [management client](http://198.74.51.41:9020/#rpcCounts) but VAM's demo will use the version of this client which will run over the Router.

## MongoDB
Install MongoDB by issuing the following commands from a SSH session. Note: this procedure comes from the [Digital Ocean MongoDB installation tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04):
```shell
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
sudo echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

sudo apt-get update
sudo apt-get install -y mongodb-org

sudo systemctl start mongod
sudo systemctl enable mongod
```

Then, import the base VAM MongoDB dump file by issuing the following commands:
```shell
wget https://demoservices.vistadataproject.info/files/data/VICSServer-MongoDB-export.zip
unzip VICSServer-MongoDB-export.zip
mongorestore ./export --host 127.0.0.1:27017
rm -rf export
```

## VICS Server

### RPC Emulator

#### Installation

1. Deploy/clone `VICSServer` source to the Linode demo server
2. `cd VICSServer` => `npm install`
3. `cd emulation/server` => `pm2 start --name "rpcEmulator" 
4. `pm2 save`

#### Operation/Control
* Restart: `pm2 restart rpcEmulator`
* Status: `pm2 show rpcEmulator`
* Logs: `pm2 logs rpcEmulator [--lines {number of lines}]

__Note__: want server pieces on a linode just like the _Workload Demo_ is [on a linode](https://workload.vistadataproject.info/login), running as a service.

__IMPORTANT__: need to lock MongoDB and relevant ports - talk to Steve. _Workload Demo_ had an issue before this was done.

## Router

  * run as service: easy to start and stop and auto-starts if linode is rebooted
  * publish on a known port for CPRS
  * connect to [1] nodeVISTA on its native RPC Broker port and [2] to the _VICS Server_ on its RPC Interface port
  * can stop and change configuration of what RPCs go to _VISTA_ vs _VICS Server_ and then restart to see new behavior
  * support the Management Client dispatching all RPC activity (__TODO__: change to see which RPCs go to VICS Server vs VISTA)

Initial test is to run as a sniffer between CPRS and nodeVISTA's native RPC Broker. __TARGET__: Monday

### Router setup
Change directory to vamuser home directory. Then clone rpcRouter repo from github
```shell
git clone https://github.com/vistadataproject/rpcRouter.git rpcRouter
```
Run npm install to download node dependencies.
```
cd rpcRouter
npm install
```

Run bower to download the javascript dependencies for the RPC Monitor.
```shell
cd client
bower install
```
Change the IPs and ports for the router and webpage server. For the router in config.js, change config.sniffer.port. For the linode demo this is 9011. This will be the port that CPRS will connect to. Also change config.vistaRpcBroker.configuration host and port to the native VistA RPC broker endpoint. For the linode demo this will be localhost port 9010.
For the webpage server change the port in clientConfig.js. For the linode demo this is set to 9012. Also change the IP and port in client/js/config.js. The host should be the IP of the linode server and the port is also 9012. This is the endpoint that the websocket from the RPC monitor webpage will connect to for the RPC events.

Start the router as a service using pm2
```
cd ~\rpcRouter
pm2 start router.js
```
To test the RPC monitor page, direct your web brower to http://198.74.51.41:9012. Connect your CPRS to port 198.74.51.41:9011. (In a Windows shortcut Target use: '%PATH_TO_CPRS%\CPRSChart.exe s=198.74.51.41 p=9011 showrpcs').



## Web Site of Linode with Demo page 

Redirect to a _Demo 3_ on the [vistadataproject](http://vistadataproject.info/) web site. That set of _Demo 3_ pages should:
  * have a clear diagram numbering all active pieces of demo
  * show how to download CPRS
  * how to run through PDE demo trails, seeing partial emulation (of 70) through the Management Client _attached to the Router_
  * Advanced: how (after login), can stop Router and reload its routing configuration (may not be in demo trail - probably be in Wiki in Router git)


