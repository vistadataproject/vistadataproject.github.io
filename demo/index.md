---
layout: default
title: MVDM Demo
---

# MVDM Demo
The following sections describe first how to install the nodeVISTA VM and CPRS, and then how to run the MVDM demo.
__This demo focuses on how MVDM secures and audits existing VISTA clients such as CPRS__. 

![CPRS-MVDM-Clients](/demo/images/installation/cprs-mvdm-demo.png)

<br>
## Installation

1. [nodeVISTA VM](#installation-nodevista-vm)
2. [CPRS](#cprs-installation)

## Orientation

1. [Open MVDM Client](#open-mvdm-client)
2. [Open and login to CPRS](#cprs-sign-on--patient-chart)

## Domain by Domain HOW TOs

* [Allergies](Allergies)
* [Problems](Problems)
* [Vitals](Vitals)

### Installation: nodeVISTA VM

* **Requirements**: (1) Windows, MacOS, or Linux machine (2) High-speed internet connection.

* Download and install [Git](https://git-scm.com/download)

* Download and install [Virtualbox](https://www.virtualbox.org/wiki/Downloads?replytocom=98578)

* Download and install [Vagrant](https://www.vagrantup.com/downloads.html)

* From the command line, install the following Vagrant plugin(s):

    ```shell
    $ vagrant plugin install vagrant-timezone
    ```
* Download (_git clone_) or update (_git pull_) the _nodeVISTA_ git, https://github.com/vistadataproject/nodeVISTA

    ```shell
    $ git clone  https://github.com/vistadataproject/nodeVISTA
    ```
* Change to the _nodeVista/setup/_ directory 

    ```shell
    $ cd nodeVista/setup/
    ```
    
* If you have installed nodeVISTA before, then clear out your current setup ...

   ```shell
   $ vagrant destroy
   ```
   
* run the following:

    ```shell
    $ vagrant up
    ```
    
    The initial Vagrant up process will download a pre-built nodeVISTA vagrant box. The box is ~2.6gb in size and may take awhile to initally download. The box will be cached and subsequent deployments will not take as long.  
    
    Note, on MacOS, the VirtualBox VMs are stored under /Users/{user}/VirtualBox VMs/ 

* Confirm access to the virtual machine via ssh:

    ```shell
    $ vagrant ssh
    ```
    
* Confirm that FMQL was installed successfully by navigating to [http://10.2.2.100:9000](http://10.2.2.100:9000).

![FMQL-Browser](/demo/images/installation/fmql-browser.png)


* If you have installed nodeVISTA before, and wish to simply reload it ...

   ```shell
   $ vagrant reload
   ```
   



###  CPRS Installation

**Requirements**:  Windows machine. If one is using MacOS or Linux, a Windows VM is required.  To create a Windows VM, download a Windows 7 ISO [here](https://www.microsoft.com/en-us/software-download/windows7) or Windows10 ISO [here](https://www.microsoft.com/en-us/software-download/windows10ISO), and follow instructions for creating a VirtalBox VM for Windows [here](http://www.techrepublic.com/article/pro-tip-how-to-install-windows-10-technical-preview-in-virtualbox/).

1. On a Windows box, download, unzip, install the CPRS installer: [CPRS_Demo_0613.zip](https://github.com/vistadataproject/documents/raw/master/cprs/osehra/v69/CPRS_Demo_0613.zip)
2. Download/unzip the latest version of VA's CPRS binary: [CPRSChart30v75.zip (v1.0.30.75)](http://45.33.127.157/files/CPRSChart30v75.zip).
3. Rename the uncompressed binary CPRSChart30v75.exe to CPRSChart.exe.
4. Copy/overwrite the latest CPRSChart.exe binary (v1.0.30.75) into directory C:\Program Files (x86)\VistA\CPRS\ 
5. Download/unzip CommonFiles DLLs [CPRS30v72_dll.zip](http://45.33.127.157/files/CPRS30v72_dll.zip).
6. Copy/overwrite the contents of the CPRS30v72_dll/ folder to C:\Program Files (x86)\VistA\Common Files\.
7. Copy the Osehra VistA Desktop Shortcut and rename it to something like "RPC Server", etc.
8. Right click on the new desktop shortcut ("RPC Server") and select "properties".
9. Modify the target to the following: "C:\Program Files (x86)\VistA\CPRS\CPRSChart.exe" CCOW=disable s=10.2.2.100 p=9010 showrpcs
10. Run "RPC Server" from windows desktop



# Orientation

## Open MVDM Client 
Point your web browser to MVDM Client page at:  [http://10.2.2.100:9020/#rpcEvents](http://10.2.2.100:9020/#rpcEvents).
<br>

![MVDM Client Open -width70](/demo/images/common/management-client/open-empty.png)
<br>

## CPRS Sign-on / Patient-Chart

Start CPRS ... 

![CPRS Connect Screen -width70](/demo/images/common/cprs/connect.png)

Before logging in, notice that the MVDM Client's Events tab shows the first RPC traffic coming from CPRS.

![MVDM Client CPRS Connect](/demo/images/common/management-client/connect.png)

Login into VISTA as ALEXANDER,ROBERT

```
   Access Code: fakedoc1
   Verify Code: 1doc!@#$
```

![CPRS Sign On Image -width70](/demo/images/common/cprs/signon.png)

After login, you will be brought to the patient selection dialog ...

![CPRS Patient Select -width70](/demo/images/common/cprs/patient-select.png)

Before choosing _Carter,David_, look in the MVDM management client and see just how _chatty_ CPRS is. Before any patient is
selected, nearly 80 RPCs have been sent ...

![MVDM Client Patient Select](/demo/images/common/management-client/p1postlogsmall.png)

Back at CPRS, select 'OK' and you will be brought to the (empty) patient chart

![CPRS Patient Chart -width70](/demo/images/common/cprs/patient-chart.png)

and the Management client shows the extra RPCs invoked - the total is now at 112 ...

![MVDM Client P2 Patient Chart](/demo/images/common/management-client/p2patient-chart-no-data.png)

and the _MVDM Events_ tab shows MVDM model events for locked RPCs ...

![MVDM Client P2 MVDM Events](/demo/images/common/management-client/p2mvdmevents.png)

## Domain by Domain HOW TOs

* [Allergies](Allergies)
* [Problems](Problems)
* [Vitals](Vitals)
