---
layout: default
title: MVDM Demo
---

# MVDM Demo
The following sections describe first how to install the nodeVISTA server and CPRS client, and then how to run the MVDM demo.
__The demo focuses on how MVDM secures and audits existing VISTA clients such as CPRS using the RPC Locker__. 

![CPRS MVDM Clients](/demo/images/common/cprs-mvdm-clients.png)

## Installation and Orientation
1. [Install nodeVISTA](#nodevista-installation)
2. [Install CPRS](#cprs--rpc-server-installation)
3. [Open MVDM Client](#open-mvdm-client)
4. [Open and login to CPRS](#cprs-sign-on--patient-chart)

## Domain by Domain HOW TOs
* [Allergies](Allergies)
* [Problems](Problems)
* [Vitals](Vitals)

<br><br><br><br><br><br>


## nodeVISTA Installation

The following outlines how to install nodeVISTA server in a VirtualBox virtual machine.

* Download and install [Git](https://git-scm.com/downloads)

* Download and install [Virtualbox](https://www.virtualbox.org/wiki/Downloads?replytocom=98578)

* Download and install [Vagrant](https://www.vagrantup.com/downloads.html)

* From the command line, install the following Vagrant plugin(s):

    ```
    $ vagrant plugin install vagrant-timezone
    ```

* Download (_git clone_) or update (_git pull_) the _nodeVISTA_ git, https://github.com/vistadataproject/nodeVISTA

    ```
    $ git clone https://github.com/vistadataproject/nodeVISTA
    ```

* cd to the _nodeVista/setup/_ directory 

* if you have previously installed nodeVISTA , then clear out your current setup ...

   ```
   $ vagrant destroy
   ```

* run the following:

    ```
    $ vagrant up
    ```

    The initial Vagrant up process will download a pre-built nodeVISTA vagrant box. The box is ~2.6gb in size and may take awhile to initally download. The box will be cached and subsequent deployments will not take as long.   Note: On MacOS, the VirtualBox VMs are saved under /Users/{user}/VirtualBox VMs/.

* Check that FMQL was installed successfully by navigating your browser to [http://10.2.2.100:9000](http://10.2.2.100:9000).

<br><br>

![FMQL Browsdr](/demo/images/common/fmql-browser.png)

<br><br><br><br><br>


## CPRS / RPC Server Installation

1. On a Windows7 or Windows10 box, download, unzip, install osehra CPRS installer: [CPRS_Demo_0613.zip](https://github.com/vistadataproject/documents/raw/master/cprs/osehra/v69/CPRS_Demo_0613.zip)

2. Download/unzip the latest version of VA's CPRS binary: [CPRSChart30v75.zip (v1.0.30.75)](http://45.33.127.157/files/CPRSChart30v75.zip).

3. Rename the uncompressed binary CPRSChart30v75.exe to CPRSChart.exe.

4. Copy/overwrite the latest CPRSChart.exe binary (v1.0.30.75) into directory C:\Program Files (x86)\VistA\CPRS\ [CPRSChart.exe]

5. Download/unzip CommonFiles DLLs [CPRS30v72_dll.zip](http://45.33.127.157/files/CPRS30v72_dll.zip).

6. Copy/overwrite the contents of the CPRS30v72_dll/ folder to C:\Program Files (x86)\VistA\Common Files\  [CPRS30v72_dll].

7. Copy the Osehra VistA Desktop Shortcut and rename it to something like "RPC Server", etc.

8. Right click on the new desktop shortcut ("RPC Server") and select "properties".

9. Modify the target to the following: "C:\Program Files (x86)\VistA\CPRS\CPRSChart.exe" CCOW=disable s=10.2.2.100 p=9010 showrpcs

10. Run "RPC Server" from windows desktop

<br><br>
![run RP Server](/demo/images/common/run-rpc-server.png)


Source | Artifact/Action | Target Path
--- | --- | ---
*Download/Unzip*<br> [CPRS_Demo_0613.zip](https://github.com/vistadataproject/documents/raw/master/cprs/osehra/v69/CPRS_Demo_0613.zip) | **CPRS_Demo_0613.exe**<br> 1. Execute  | NA
*Download/Unzip*<br> [CPRSChart30v75.zip ](http://45.33.127.157/files/CPRSChart30v75.zip)| **CPRSChart30v75.exe** <br>1. Rename to CPRSChart.exe<br>2. Copy to target path <br> *(overwrites existing CPRSChart.exe)*  | C:\Program Files (x86)\VistA\CPRS\  
*Download/Unzip*<br> [CPRS30v72_dll.zip](http://45.33.127.157/files/CPRS30v72_dll.zip) |  **CPRS30v72_dll/** (folder)  <br> 1. Copy contents of folder to target path <br> *(overwrites contents in target folder)* | C:\Program Files (x86)\VistA\Common Files\  
*(Windows Desktop Shortcut)*<br> **RPC Server**  | 1.Rename "Osehra VistA CPRS" shortcut -> "RPC Server" <br> 2.  Right-click "RPC Server"<br> 3.Select "properties" <br>4. Paste path| "C:\Program Files (x86)\VistA\CPRS\CPRSChart.exe" CCOW=disable s=10.2.2.100 p=9010 showrpcs


<br><br><br><br><br>
## Open MVDM Client 

Point your web browser to MVDM Client page at:  [http://10.2.2.100:9020/#rpcEvents](http://10.2.2.100:9020/#rpcEvents).

![MVDM Client Open](/demo/images/common/management-client/open-empty.png)


<br><b><br><br><br>
## CPRS Sign-on / Patient-Chart

Start CPRS ... 

![CPRS Connect Screen](/demo/images/common/cprs/connect.png)

<br><br><br>

Before logging in, notice that the MVDM Client's Events tab shows the first RPC traffic coming from CPRS.

![MVDM Client CPRS Connect](/demo/images/common/management-client/connect.png)
<br><br><br>

Login into VISTA 

```
   Access Code: fakedoc1
   Verify Code: 1doc!@#$
```
(your username will be set to ALEXANDER,ROBERT)


![CPRS Sign On](/demo/images/common/cprs/signon.png)
<br><br><br>

After login, you will be brought to the patient selection dialog ...

![CPRS Patient Select](/demo/images/common/cprs/patient-select.png)
<br><br><br>

Before choosing _Carter,David_, look in the MVDM management client and see just how _chatty_ CPRS is. 
Before any patient is selected, nearly 80 RPCs have been sent ...

![MVDM Client Patient Select](/demo/images/common/management-client/p1postlogsmall.png)
<br><br><br>

Back at CPRS, select 'OK' and you will be brought to the (empty) patient chart

![CPRS Patient Chart -width70](/demo/images/common/cprs/patient-chart.png)
<br><br><br>

and the Management client shows the extra RPCs invoked - the total is now at 112 ...

![MVDM Client P2 Patient Chart](/demo/images/common/management-client/p2patient-chart-no-data.png)
<br><br><br>

and the _MVDM Events_ tab shows MVDM model events for locked RPCs ...

![MVDM Client P2 MVDM Events](/demo/images/common/management-client/p2mvdmevents.png)
<br><br><br><br><br>

## Domain by Domain HOW TOs

* [Allergies](Allergies)
* [Problems](Problems)
* [Vitals](Vitals)
