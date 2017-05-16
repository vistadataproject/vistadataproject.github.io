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


<br><br><br>
# nodeVISTA Installation

The following outlines how to install **nodeVISTA** server in a VirtualBox virtual machine.

* Download and install [Git](https://git-scm.com/downloads)

* Download and install [Virtualbox](https://www.virtualbox.org/wiki/Downloads?replytocom=98578) and Extension Pack.

* Download and install [Vagrant](https://www.vagrantup.com/downloads.html)

* Download and install your favorite Terminal emulator, depending on your operating system.  A few include Mac: [iTerm](https://www.iterm2.com); Linux: [Terminator](https://gnometerminator.blogspot.com/p/introduction.html); Windows: [Command Prompt](https://www.lifewire.com/how-to-open-command-prompt-2618089).

* Open a Terminal and enter the following commands:

* Verify that Git, Virtualbox, and Vagrant are installed properly and are the latest version:
    ```shell
    $ vagrant --version
    $ git --version
    $ VBoxManage --version    
    ```
   
* Install the `vagrant-timezone` Vagrant plugin by running the following command:
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

* The initial `vagrant up` process will download a pre-built **nodeVISTA** Vagrant VM. The VM is ~2.6 GB in size and may take awhile to initially download, depending on your network connection speed. If during this initial download the connection is interrupted,the  directory will need to be deleted and the process started again.  The process caches the pre-built VM, and subsequent deployments will not take as long.  Note:  On MacOS, VirtualBox VMs are stored under `/Users/{user}/VirtualBox VMs/`.



##  Optional: Install nodeVISTA command menu

As an optional feature, if you're working on a Linux or Mac OS host, you may want to have a command-line menu to manage the nodeVISTA server. 

* First, create a new shell script "nv" in your home directory (i.e. in `~/nv.sh`) containing the following:  
```
clear
echo '                nodeVISTA Server             '
echo '     Master Data Model-Driven Node.js VISTA  '
echo ' -----------------------------------------------------'
echo ' nodeVISTA Status:     nv-reload | halt | status'
echo ' nodeVISTA Access:     nv-ssh '
echo ' nodeVISTA Manager:    nv-manager '
echo ' VISTA Data Model:     vdm-browser | vdm-query '
echo ' -----------------------------------------------------'
```

*  Then append the following command aliases to the `.profile` file in your home directory (i.e. in `~/.profile`):
```
alias nv-reload='cd ~/vagrant/nodeVISTA/setup; vagrant reload; nv-status'
alias nv-halt='cd ~/vagrant/nodeVISTA/setup; vagrant halt; nv-status'
alias nv-status='cd ~/vagrant/nodeVISTA/setup; nv; vagrant status'
alias nv-ssh='echo "nodeVISTA ssh user/pass: vdp/vdp"; ssh vdp@10.2.2.100'
alias nv-manager='open http://10.2.2.100:9020/#rpcCounts'
alias nv-vdm-browser='open http://10.2.2.100:9000/schema'
alias nv-vdm-query='open http://10.2.2.100:9000/query'
```

*  The nodeVISTA server command menu will appear whenever you type "nv" on the command line, and provide all the functions as defined in the menu.



## Verify nodeVISTA Installation

* Start the **nodeVISTA** VM by running the following command:
    ```shell
    $ vagrant reload
    ```
    
* Open the VISTA Data Model Browser (Fileman Schema Browser) by navigating your browser to [http://10.2.2.100:9000/schema](http://10.2.2.100:9000/schema).   One should be able to browse the entire VA VISTA Data Model:

![FM Schema Browser -width70](/demo/images/common/fmql-browser.png)




[ Back to top ↑](#top)


<br><br><br><br>
# CPRS Installation


The Computerized Patient Record System (CPRS) is the graphical user interface (Client)  that physicians use to interact with VISTA (Server).  Because end-users don't ever "see" VISTA, __most users think that CPRS *is* the EHR (i.e. "CPRS is VISTA")__. In this regard, according to the most recent national survey of over 15,000 physician end-users of EHRs ( [Medscape 2016 National EHR Survey](http://www.medscape.com/features/slideshow/public/ehr2016#page=8) ), CPRS remains one of the highest regarded integrated EHR in the U.S.


__CPRS runs on all currently supported versions of Microsoft Windows__.  If one wishes to run CPRS on MacOS or LinuxOS, one first needs to create a virtual Windows environment by downloading the free open-source [Virtualbox](https://www.virtualbox.org) or commercial [VMWare](http://www.vmware.com/products/fusion.html) hypervisor, and then install the free  [Windows 10 image](https://www.microsoft.com/en-us/software-download/windows10ISO) within this hypervisor. Alternately, Microsoft offers free pre-built, virtualized versions of Windows prepackaged for several different hypervisors, which one can download [here](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/#downloads).  Note all the free versions of Windows above have some restrictions, but nothing that that affects the installation or execution of CPRS. 

1. From your Windows-based workstation (physical or virtual), download, unzip, and run the OSEHRA CPRS installer: [CPRS_Demo_0613.zip](https://github.com/vistadataproject/documents/raw/master/cprs/osehra/v69/CPRS_Demo_0613.zip)

2. Download the latest version of VA's CPRS binary: [CPRSChart30v75.zip (v1.0.30.75)](http://45.33.127.157/files/CPRSChart30v75.zip).

3. Unzip `CPRSChart30v75.zip` and rename the `CPRSChart30v75.exe` uncompressed binary file to `CPRSChart.exe`.

4. Overwrite `C:\Program Files (x86)\VistA\CPRS\CPRSChart.exe` with the latest binary (v1.0.30.75).

5. Download the latest CommonFiles DLLs: [CPRS30v72_dll.zip](http://45.33.127.157/files/CPRS30v72_dll.zip).

6. Unzip `CPRS30v72_dll.zip` and copy/overwrite the contents of the `CPRS30v72_dll/` folder to `C:\Program Files (x86)\VistA\Common Files`.

7. Copy the OSEHRA VistA shortcut to the Windows desktop and rename it to something like "RPC Server", etc.

8. Right click on the new desktop shortcut ("RPC Server") and select "Properties".

9. Modify the shortcut `Target` field with the following line:
    ```
    "C:\Program Files (x86)\VistA\CPRS\CPRSChart.exe" CCOW=disable s=10.2.2.100 p=9010 showrpcs
    ```

10. Start CPRS by double-clicking the "RPC Server" desktop shortcut.

![run RPC Server](/demo/images/common/run-rpc-server.png)


#### CPRS Installation Summary

Source | Artifact/Action | Target Path
--- | --- | ---
*Download/Unzip*<br> [CPRS_Demo_0613.zip](https://github.com/vistadataproject/documents/raw/master/cprs/osehra/v69/CPRS_Demo_0613.zip) | **CPRS_Demo_0613.exe**<br> 1. Execute  | NA
*Download/Unzip*<br> [CPRSChart30v75.zip ](http://45.33.127.157/files/CPRSChart30v75.zip)| **CPRSChart30v75.exe** <br>1. Rename to CPRSChart.exe<br>2. Copy to target path <br> *(overwrites existing CPRSChart.exe)*  | C:\Program Files (x86)\VistA\CPRS\  
*Download/Unzip*<br> [CPRS30v72_dll.zip](http://45.33.127.157/files/CPRS30v72_dll.zip) |  **CPRS30v72_dll/** (folder)  <br> 1. Copy contents of folder to target path <br> *(overwrites contents in target folder)* | C:\Program Files (x86)\VistA\Common Files\  
*(Windows Desktop Shortcut)*<br> **RPC Server**  | 1.Rename "Osehra VistA CPRS" shortcut -> "RPC Server" <br> 2.  Right-click "RPC Server"<br> 3.Select "properties" <br>4. Paste path| "C:\Program Files (x86)\VistA\CPRS\CPRSChart.exe" CCOW=disable s=10.2.2.100 p=9010 showrpcs


[ Back to top ↑](#top)



<br><br><br><br>
# Open the nodeVISTA Manager


* If **nodeVISTA** VM is not already running, start it by entering the following command:
    ```shell
    $ vagrant reload
    ```
    
* Enter the **nodeVISTA Manager** URL into your web browser: [http://10.2.2.100:9020/#rpcCounts](http://10.2.2.100:9020/#rpcCounts).

![nodeVISTA Manager RPC Counts -width70](/demo/images/common/management-client/rpc-counts-view.png)

[ Back to top ↑](#top)




<br><br><br><br>
# CPRS Sign-on / RPC Emulation

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

and the **nodeVISTA Manager** shows the extra RPCs invoked - the total is now at 133...

![MVDM Client P2 Patient Chart -width70](/demo/images/common/management-client/p2patient-chart-no-data.png)

and the **MVDM Events** tab shows MVDM model events for emulated RPCs...

![MVDM Client P2 MVDM Events -width70](/demo/images/common/management-client/p2mvdmevents.png)

[ Back to top ↑](#top)



<br><br><br><br>
# Domain Demo HOW TOs

* [Allergies](Allergies)
* [Problems](Problems)
* [Vitals](Vitals)
* [Patient](Patient_1)


[ Back to top ↑](#top)

