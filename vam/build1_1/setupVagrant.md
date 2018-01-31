---
layout: default
title: Running VICS Vagrant 
---

# VICS Vagrant

The components of VICS (VICS Server and Router) and a VISTA with sample data ("nodeVISTA") have been packaged into a _Vagrant Install_ for _testing, development and demonstration_.

<br>

# Installation
1. [Install VICS Vagrant](#Vagrant)
2. [Install CPRS](#cprs)

## Vagrant

The following describes how to install the VICS components (VICS Server and Router) and an example VISTA in a VirtualBox virtual machine.

### Prerequisites

* [Git](https://git-scm.com/downloads)
* [Virtualbox](https://www.virtualbox.org/wiki/Downloads?replytocom=98578) and Extension Pack.
* [Vagrant](https://www.vagrantup.com/downloads.html)

* Verify that Git, Virtualbox, and Vagrant are installed properly and are the latest version:
    ```shell
    $ git --version
    $ VBoxManage --version
    $ vagrant --version
    ```

### Installation

Open a terminal and 

1. clone the `VICSServer` repo from GitHub:
```shell
> git clone https://github.com/vistadataproject/VICSServer.git
```

2. change your working directory to `VICSServer/setup`
```shell
> cd VICSServer/setup
```

3. setup and provision the VICSServer VM via Vagrant:
```shell
> vagrant up
```

The Vagrant VM will have an IP address of __`10.2.2.222`__.

__Note__: The initial `vagrant up` process will download a pre-built **VICSServer** Vagrant VM. The VM is large and may take awhile to initially download, depending on your network connection speed. If during this initial download the connection is interrupted,the  directory will need to be deleted (_vagrant destroy -f_) and the process started again.  The process caches the pre-built VM, and subsequent deployments will not take as long.  Note:  On MacOS, VirtualBox VMs are stored under `/Users/{user}/VirtualBox VMs/`.

### Verify Installation

Verify that the installation was successful by performing any or all of the following steps:

1. In your browser, open the FileMan Rambler at _http://10.2.2.222:9000/schema_ to view the contents of _nodeVISTA_

2. In your browser, open up the Router Manager at _http://10.2.2.222:9012/_

3. Login into the VM and verify the contents of the _vdp user's_ home directory with:
```shell
> vagrant ssh
> su vdp
Password: vdp
> cd
> ls
... nodevista  ...  rpcRouter  ...  VICSServer
> exit
> exit
```

4. If you have the _MongoDB command line client_ running in your host OS, try
```shell
> mongo 10.2.2.222:27017
```

5. COMING: how to invoke the simple node.js-based, VICS Test Client

[ Back to top ↑](#top)


<br><br><br>
## CPRS

The Computerized Patient Record System (CPRS) is the graphical user interface (Client) through which physicians interact with VISTA (Server).  Because end-users don't ever "see" VISTA, __most users think that CPRS *is* the EHR (i.e. "CPRS is VISTA")__. In this regard, according to the most recent national survey of over 15,000 physician end-users of EHRs ( [Medscape 2016 National EHR Survey](http://www.medscape.com/features/slideshow/public/ehr2016#page=8) ), CPRS remains one of the highest regarded integrated EHR in the U.S.

### Prerequisites

__CPRS runs on all currently supported versions of Microsoft Windows__.  If one wishes to run CPRS on MacOS or LinuxOS, one first needs to create a virtual Windows environment by downloading the free open-source [Virtualbox](https://www.virtualbox.org) or commercial [VMWare](http://www.vmware.com/products/fusion.html) hypervisor, and then install the free  [Windows 10 image](https://www.microsoft.com/en-us/software-download/windows10ISO) within this hypervisor. Alternately, Microsoft offers free pre-built, virtualized versions of Windows prepackaged for several different hypervisors, which one can download [here](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/#downloads).  Note all the free versions of Windows above have some restrictions, but nothing that affects the installation or execution of CPRS.

### Installation

1. From your Windows-based workstation (physical or virtual), download, unzip, and run the OSEHRA CPRS installer: [CPRS_Demo_0613.zip](https://github.com/vistadataproject/documents/raw/master/cprs/osehra/v69/CPRS_Demo_0613.zip)

2. Download the latest version of VA's CPRS binary: [CPRSChart30v75.zip (v1.0.30.75)](https://demoservices.vistadataproject.info/archive/CPRSChart30v75.zip).

3. Unzip `CPRSChart30v75.zip` and rename the `CPRSChart30v75.exe` uncompressed binary file to `CPRSChart.exe`.

4. Overwrite `C:\Program Files (x86)\VistA\CPRS\CPRSChart.exe` with the latest binary (v1.0.30.75).

5. Download the latest CommonFiles DLLs: [CPRS30v72_dll.zip](https://demoservices.vistadataproject.info/archive/CPRS30v72_dll.zip).

6. Unzip `CPRS30v72_dll.zip` and copy/overwrite the contents of the `CPRS30v72_dll/` folder to `C:\Program Files (x86)\VistA\Common Files`.

7. Copy the OSEHRA VistA shortcut to the Windows desktop and rename it to something like "RPC Server", etc.

8. Right click on the new desktop shortcut ("RPC Server") and select "Properties".

9. Modify the shortcut `Target` field with the following line:
    ```
    "C:\Program Files (x86)\VistA\CPRS\CPRSChart.exe" CCOW=disable s=10.2.2.222 p=9011 showrpcs
    ```

10. Start CPRS by double-clicking the "RPC Server" desktop shortcut ...

![CPRS Open -width70](images/cprs_open_vagrant.png)


[ Back to top ↑](#top)

<br><br><br><br>
# Next
* [Coversheet Demo](Allergies) - ignore the instructions to login to a remote server. Just connect CPRS to the Vagrant instead at _s=10.2.2.222 p=9011_
* [Highlights of Build 1.1](Problems)

[ Back to top ↑](#top)

