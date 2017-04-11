---
layout: default
title: MVDM Demo
---

# MVDM Demo
The following sections describe first how to install the **nodeVISTA** server and CPRS client, and then how to run the MVDM demo. __The demo focuses on how MVDM audits, secures, and emulates existing VISTA clients such as CPRS using the RPC Emulator__.


![CPRS-MVDM-Clients -width70](/demo/images/common/demo-cprs-mvdm-clients.png)

## Installation and Orientation
1. [Install nodeVISTA](#nodevista-installation)
2. [Install CPRS](#cprs--rpc-server-installation)
3. [Open nodeVISTA Manager](#open-the-nodevista-manager)
4. [CPRS Sign-On / Patient Chart](#cprs-sign-on--patient-chart)

## Domain Demo HOW TOs
* [Allergies](Allergies)
* [Problems](Problems)
* [Vitals](Vitals)
* [Patient](Patient_1)

-----

## nodeVISTA Installation

The following outlines how to install **nodeVISTA** server in a VirtualBox virtual machine.

* Download and install [Git](https://git-scm.com/downloads)

* Download and install [Virtualbox](https://www.virtualbox.org/wiki/Downloads?replytocom=98578)

* Download and install [Vagrant](https://www.vagrantup.com/downloads.html)

* From the command line, install the `vagrant-timezone` Vagrant plugin by running the following command:
    ```shell
    $ vagrant plugin install vagrant-timezone
    ```

* Download (`git clone`) or update (`git pull`) the **nodeVISTA** repository: [https://github.com/vistadataproject/nodeVISTA](https://github.com/vistadataproject/nodeVISTA)
    ```shell
    $ git clone https://github.com/vistadataproject/nodeVISTA
    ```

* `cd` to the `nodeVista/setup/` directory

* If you have installed a **nodeVISTA** VM beforehand, clear out your current VM and setup by running the following command:
   ```shell
   $ vagrant destroy --force
   ```

* Create and configure the **nodeVISTA** VM by running the following command:
    ```shell
    $ vagrant up
    ```

    The initial `vagrant up` process will download a pre-built **nodeVISTA** Vagrant VM. The VM is ~2.6 GB in size and may take awhile to initially download, depending on your network connection speed. The process caches the pre-built VM, and subsequent deployments will not take as long.

    Note: VirtualBox VMs go under `/Users/{user}/VirtualBox VMs/` on MacOS.

* Check that the **nodeVISTA** Model Browser (Fileman Schema Browser) was installed successfully by navigating your browser to [http://10.2.2.100:9000](http://10.2.2.100:9000).

![FM Schema Browser -width70](/demo/images/common/fmql-browser.png)

* As an optional step, if you're working on a Linux or Mac OS host, you may want to append the following command aliases to the `.profile` file in your home directory (i.e. `~/.profile`):
```
alias nv-reload='cd ~/vagrant/nodeVISTA/setup; vagrant reload; nv-status'
alias nv-halt='cd ~/vagrant/nodeVISTA/setup; vagrant halt; nv-status'
alias nv-status='cd ~/vagrant/nodeVISTA/setup; nv; vagrant status'
alias nv-ssh='echo "nodeVISTA ssh user/pass: vdp/vdp"; ssh vdp@10.2.2.100'
alias nv-vdm-browser='open http://10.2.2.100:9000'
```

[ Back to top ↑](#top)


## CPRS / RPC Server Installation

### Summary

Source | Artifact/Action | Target Path
--- | --- | ---
*Download/Unzip*<br> [CPRS_Demo_0613.zip](https://github.com/vistadataproject/documents/raw/master/cprs/osehra/v69/CPRS_Demo_0613.zip) | **CPRS_Demo_0613.exe**<br> 1. Execute  | NA
*Download/Unzip*<br> [CPRSChart30v75.zip ](http://45.33.127.157/files/CPRSChart30v75.zip)| **CPRSChart30v75.exe** <br>1. Rename to CPRSChart.exe<br>2. Copy to target path <br> *(overwrites existing CPRSChart.exe)*  | C:\Program Files (x86)\VistA\CPRS\  
*Download/Unzip*<br> [CPRS30v72_dll.zip](http://45.33.127.157/files/CPRS30v72_dll.zip) |  **CPRS30v72_dll/** (folder)  <br> 1. Copy contents of folder to target path <br> *(overwrites contents in target folder)* | C:\Program Files (x86)\VistA\Common Files\  
*(Windows Desktop Shortcut)*<br> **RPC Server**  | 1.Rename "Osehra VistA CPRS" shortcut -> "RPC Server" <br> 2.  Right-click "RPC Server"<br> 3.Select "properties" <br>4. Paste path| "C:\Program Files (x86)\VistA\CPRS\CPRSChart.exe" CCOW=disable s=10.2.2.100 p=9010 showrpcs

The Computerized Patient Record System (CPRS) is a Veterans Health Information Systems and Technology Architecture (VistA) computer application. The CPRS GUI application was
designed to run in the Microsoft Windows operating environment, which means that you must have access to a Windows-based workstation (physical or virtual). If you're
working in a Linux or Mac OS X environment, a common solution is to run CPRS from a Windows-based VM within a locally hosted hypervisor (e.g. VirtualBox).

1. If you are operating within a Linux or Mac OS X environment, create a VM running either Windows 7 or Windows 10 in your hosted hypervisor of choice. Note: Microsoft
offers free versions of pre-built, virtualized versions of their Windows OS for download for several hosted hypervisors [https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/#downloads](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/#downloads).

2. From your Windows-based workstation (physical or virtual), download, unzip, and run the OSEHRA CPRS installer: [CPRS_Demo_0613.zip](https://github.com/vistadataproject/documents/raw/master/cprs/osehra/v69/CPRS_Demo_0613.zip)

3. Download the latest version of VA's CPRS binary: [CPRSChart30v75.zip (v1.0.30.75)](http://45.33.127.157/files/CPRSChart30v75.zip).

4. Unzip `CPRSChart30v75.zip` and rename the `CPRSChart30v75.exe` uncompressed binary file to `CPRSChart.exe`.

5. Overwrite `C:\Program Files (x86)\VistA\CPRS\CPRSChart.exe` with the latest binary (v1.0.30.75).

6. Download the latest CommonFiles DLLs: [CPRS30v72_dll.zip](http://45.33.127.157/files/CPRS30v72_dll.zip).

7. Unzip `CPRS30v72_dll.zip` and copy/overwrite the contents of the `CPRS30v72_dll/` folder to `C:\Program Files (x86)\VistA\Common Files`.

8. Copy the OSEHRA VistA Desktop Shortcut and rename it to something like "RPC Server", etc.

9. Right click on the new desktop shortcut ("RPC Server") and select "Properties".

10. Modify the shortcut `Target` field with the following line:
    ```
    "C:\Program Files (x86)\VistA\CPRS\CPRSChart.exe" CCOW=disable s=10.2.2.100 p=9010 showrpcs
    ```

11. Run "RPC Server" from the Windows desktop

![run RPC Server](/demo/images/common/run-rpc-server.png)

[ Back to top ↑](#top)


## Open the nodeVISTA Manager

Enter the **nodeVISTA Manager** URL into your web browser: [http://10.2.2.100:9020/#rpcCounts](http://10.2.2.100:9020/#rpcCounts).

![nodeVISTA Manager RPC Counts -width70](/demo/images/common/management-client/rpc-counts-view.png)

[ Back to top ↑](#top)


## CPRS Sign-on / Patient-Chart

To watch the RPC events, select the **RPC Events** tab in the **nodeVISTA Manager** [(http://10.2.2.100:9020/#rpcEvents)](http://10.2.2.100:9020/#rpcEvents)

![nodeVISTA Manager Open -width70](/demo/images/common/management-client/open-empty.png)

Start CPRS...

![CPRS Connect Screen -width70](/demo/images/common/cprs/connect.png)

Before logging in, notice that the **nodeVISTA Manager** **RPC Events** tab shows the first RPC traffic coming from CPRS.

![MVDM Client CPRS Connect -width70](/demo/images/common/management-client/connect.png)

Login into VISTA as **ALEXANDER,ROBERT** using the following credentials:
```
   Access Code: fakedoc1
   Verify Code: 1doc!@#$
```

![CPRS Sign On -width70](/demo/images/common/cprs/signon.png)

After login, you will be brought to the patient selection dialog...

![CPRS Patient Select -width70](/demo/images/common/cprs/patient-select.png)
Before choosing patient **Carter,David**, look in the **nodeVISTA Manager** and see just how _chatty_ CPRS is. Before any patient is
selected, over 80 RPCs have been sent...

![MVDM Client Patient Select -width70](/demo/images/common/management-client/p1postlogsmall.png)


Back at CPRS, select 'OK' and you will be brought to the (empty) patient chart

![CPRS Patient Chart -width70](/demo/images/common/cprs/patient-chart.png)

and the **nodeVISTA Manager** shows the extra RPCs invoked - the total is now at 122...

![MVDM Client P2 Patient Chart -width70](/demo/images/common/management-client/p2patient-chart-no-data.png)

and the **MVDM Events** tab shows MVDM model events for emulated RPCs...

![MVDM Client P2 MVDM Events -width70](/demo/images/common/management-client/p2mvdmevents.png)

[ Back to top ↑](#top)


# Domain Demo HOW TOs

* [Allergies](Allergies)
* [Problems](Problems)
* [Vitals](Vitals)
* [Patient](Patient_1)
