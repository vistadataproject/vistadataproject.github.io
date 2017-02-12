---
layout: default
title: MVDM Demo
---

# MVDM Demo

The following sections describe first how to install the nodeVISTA VM and CPRS, and then how to run the MVDM demo.
__This demo focuses on how MVDM secures and audits existing VISTA clients such as CPRS__. 

![CPRS-MVDM-Clients](/demo/images/installation/cprs-mvdm-demo.png)

## Installation

* [nodeVISTA VM](#installation-nodevista)
* [CPRS](#installation-cprs)

## Orientation

* [MVDM Client](#open-mvdm-client)
* [CPRS Client](#cprs-sign-on--patient-chart)

## Domain by Domain HOW TOs

* [Allergies](Allergies)
* [Problems](Problems)
* [Vitals](Vitals)


<br><br><br><br><br>
# Installation

## Installation: nodeVISTA 

* **Requirements**:  Windows, MacOS, or Linux machine

* Download and install [Git](https://git-scm.com/download)

* Download and install [Virtualbox](https://www.virtualbox.org/wiki/Downloads?replytocom=98578)

* Download and install [Vagrant](https://www.vagrantup.com/downloads.html)

* From the command line, install the following Vagrant plugin(s):

    ```
    $ vagrant plugin install vagrant-timezone
    ```
* Download (_git clone_) or update (_git pull_) the _nodeVISTA_ git, https://github.com/vistadataproject/nodeVISTA

    ```
    $ git clone  https://github.com/vistadataproject/nodeVISTA
    ```
* Change to the _nodeVista/setup/_ directory 

    ```
    $ cd nodeVista/setup/
    ```

* If you have installed nodeVISTA before, then clear out your current setup ...

   ```
   $ vagrant destroy
   ```

* run the following:

    ```
    $ vagrant up
    ```

* The initial Vagrant up process will download a pre-built nodeVISTA vagrant box. The box is ~2.6gb in size and may take awhile to initally download. The box will be cached and subsequent deployments will not take as long.   Note on MacOS the VirtualBox VMs are stored under /Users/{user}/VirtualBox VMs/ 

* Confirm access to the virtual machine via ssh:

    ```
    $ vagrant ssh
    ```
    
* Confirm that FMQL was installed successfully by navigating to [http://10.2.2.100:9000](http://10.2.2.100:9000).

![FMQL-Browser](/demo/images/installation/fmql-browser.png)


* If you have installed nodeVISTA before, and wish to simply reload it ...

   ```
   $ vagrant reload
   ```
<br><br><br><br><br>

### CPRS: Installation

**Requirements**:  Windows machine. If one is using MacOS or Linux, a Windows VM is required.  To create a Windows VM, download a Windows10 ISO [here](https://www.microsoft.com/en-us/software-download/windows10ISO), and follow instructions for creating a VirtalBox VM for Windows [here](http://www.techrepublic.com/article/pro-tip-how-to-install-windows-10-technical-preview-in-virtualbox/).

* On a Windows box, download, unzip, install the CPRS installer: [CPRS_Demo_0613.zip](https://github.com/vistadataproject/documents/raw/master/cprs/osehra/v69/CPRS_Demo_0613.zip)

* Download/unzip the latest version of VA's CPRS binary: [CPRSChart30v75.zip (v1.0.30.75)](http://45.33.127.157/files/CPRSChart30v75.zip).

* Rename the uncompressed binary CPRSChart30v75.exe to CPRSChart.exe.

* Copy the latest CPRSChart.exe binary (v30.75) into the following directory (overwrites older CPRSChart.exe)

    ```
    C:\Program Files (x86)\VistA\CPRS\
    ```
* Download/unzip CommonFiles DLLs [CPRS30v72_dll.zip](http://45.33.127.157/files/CPRS30v72_dll.zip).

* Copy the contents of the CPRS30v72_dll/ folder into the following directory (overwrites existing contents)

    ```
    C:\Program Files (x86)\VistA\Common Files\
    ```
* Copy the Osehra VistA Desktop Shortcut and rename it to something like "RPC Server", etc.

* Right click on the new desktop shortcut ("RPC Server") and select "properties".

* Modify the target to the following:

    ```
    "C:\Program Files (x86)\VistA\CPRS\CPRSChart.exe" CCOW=disable s=10.2.2.100 p=9010 showrpcs
    ```

## CPRS: Login

*  #1: **Start RPC Server** from windows desktop

*  #2:  **Login** to VISTA
Note: Your default user name will be assigned to ALEXANDER,ROBERT

```
   Access Code: fakedoc1
   Verify Code: 1doc!@#$
```

*  #1: **Start RPC Server** from windows desktop

* **Patient Selection:**  Select the first patient in the patient list, then click "OK"

*  **Clinic Selection:**  Select the first clinic in the clinic list, then click "OK"

* **Main Cover Sheet:**  You will now be in the main CPRS cover sheet. 

* Summary
![CPRS Login](https://github.com/vistadataproject/vistadataproject.github.io/blob/master/demo/images/common/cprs/src3/1000x/animated2.gif)







<br><br><br><br><br><br>


# Orientation

## Open MVDM Client 
Point your web browser to MVDM Client page at:  [http://10.2.2.100:9020/#rpcEvents](http://10.2.2.100:9020/#rpcEvents).
<br>

![MVDM Client Open -width70](/demo/images/common/management-client/open-empty.png)
<br><br><br>


## CPRS Sign-on / Patient-Chart

* Start CPRS ... 

![CPRS Connect Screen](/demo/images/common/cprs/connect.png)
<br><br><br>

* Before logging in, notice that the MVDM Client's Events tab shows the first RPC traffic coming from CPRS.

![MVDM Client CPRS Connect](/demo/images/common/management-client/connect.png)
<br><br><br>

* Login into VISTA as ALEXANDER,ROBERT

```
   Access Code: fakedoc1
   Verify Code: 1doc!@#$
```

![CPRS Sign On Image -width70](/demo/images/common/cprs/signon.png)
<br><br><br>

* After login, you will be brought to the patient selection dialog ...

![CPRS Patient Select -width70](/demo/images/common/cprs/patient-select.png)
<br><br><br>

* Before choosing _Carter,David_, look in the MVDM management client and see just how _chatty_ CPRS is. Before any patient is
selected, nearly 80 RPCs have been sent ...

![MVDM Client Patient Select](/demo/images/common/management-client/p1postlogsmall.png)
<br><br><br>


* Back at CPRS, select 'OK' and you will be brought to the (empty) patient chart

![CPRS Patient Chart -width70](/demo/images/common/cprs/patient-chart.png)
<br><br><br>


* and the Management client shows the extra RPCs invoked - the total is now at 112 ...

![MVDM Client P2 Patient Chart](/demo/images/common/management-client/p2patient-chart-no-data.png)
<br><br><br>

*and the _MVDM Events_ tab shows MVDM model events for locked RPCs ...

![MVDM Client P2 MVDM Events](/demo/images/common/management-client/p2mvdmevents.png)


<br><br><br><br><br><br>



## Domain by Domain HOW TOs

* [Allergies](Allergies)
* [Problems](Problems)
* [Vitals](Vitals)
