---
layout: default
title: MVDM Demo
---

# MVDM Demo

The following sections first describe how to install the nodeVISTA VM, CPRS, and then how to run the MVDM demo.  

## Install nodeVISTA

The following outlines how to install nodeVISTA

* Download and install [Virtualbox](https://www.virtualbox.org/wiki/Downloads?replytocom=98578)

* Download and install [Vagrant](https://www.vagrantup.com/downloads.html)

* From the command line, install the following Vagrant plugin(s):

    ```text
    $ vagrant plugin install vagrant-timezone
    ```

* Download (_git clone_) or update (_git pull_) the _nodeVISTA_ git

* cd to the __nodeVista/setup/__ directory 

* if you have installed nodeVISTA before, then clear out your current setup ...

   ```
   $ vagrant destroy
   ```

* run the following:

    ```text
    $ vagrant up
    ```

    The initial Vagrant up process will download a pre-built nodeVISTA vagrant box. The box is ~2.6gb in size and may take awhile to initally download. The box will be cached and subsequent deployments will not take as long.

    Note: Virtual Box VMs go under /Users/{user}/VirtualBox VMs/ on macOS.

* Check that FMQL was installed successfully by navigating your browser to [http://10.2.2.100:9000](http://10.2.2.100:9000).

## CPRS Installation

1. On a Windows7 or Windows10 box, download, unzip, and run the Osehra CPRS installer: [CPRS_Demo_0613.zip](https://github.com/vistadataproject/documents/raw/master/cprs/osehra/v69/CPRS_Demo_0613.zip)
2. Download latest version of VA's CPRS binary: [CPRSChart30v75.zip (v1.0.30.75)](http://45.33.127.157/files/CPRSChart30v75.zip).
3. Unzip CPRSChart30v75.zip and rename the uncompressed binary CPRSChart30v75.exe to CPRSChart.exe.
4. Overwrite  C:\Program Files (x86)\VistA\CPRS\CPRSChart.exe with the latest binary (v1.0.30.75).
5. Download latest CommonFiles DLLs [CPRS30v72_dll.zip] (http://45.33.127.157/files/CPRS30v72_dll.zip).
6. Unzip CPRS30v72_dll.zip and copy/overwrite the contents of the CPRS30v72_dll/ folder to C:\Program Files (x86)\VistA\Common Files.
7. Copy the Osehra VistA Desktop Shortcut and rename it to something like "RPC Server", etc.
8. Right click on the new desktop shortcut ("RPC Server") and select "properties".
9. Modify the target to the following: "C:\Program Files (x86)\VistA\CPRS\CPRSChart.exe" CCOW=disable s=10.2.2.100 p=9010 showrpcs
10. Run "RPC Server" from windows desktop

## Open the MVDM Client 

Point your web browser to MVDM Client page at [http://10.2.2.100:9020/#rpcEvents](http://10.2.2.100:9020/#rpcEvents).

## CPRS Sign-on / Patient-Chart

Login into CPRS as ALEXANDER,ROBERT

```
   Access Code: fakedoc1
   Verify Code: 1doc!@#$
```

![CPRS Sign On Image](/demo/images/common/cprs/signon.JPG)

![CPRS Sign On Image -fullwidth](/demo/images/common/cprs/signon.JPG)


Before logging in, notice that the MVDM Client displays under the RPC Events tab the initial RPC traffic coming from CPRS.

![MVDM Client Logon](/demo/images/common/management-client/login-dialog.jpeg)

Back at CPRS, after you sign-on, you will be brought to the patient selection dialog. Select patient _Carter,David_ ...

![CPRS Patient Select](/demo/images/common/cprs/patient-search.JPG)

In the MVDM management client, notice the RPC traffic under the rpcEvents tab - the bold RPCs are locked.

![MVDM Client Patient Select](/demo/images/common/management-client/patient-search.jpeg)

Then look at the MVDM Events tab, you should see the patient search MVDM Events that fired.

![MVDM Client Patient Select MVDM Events](/demo/images/common/management-client/patient-search-mvdm-events.jpeg)

Back at CPRS, select 'OK' and proceed to the patient chart

![CPRS Patient Chart](/demo/images/common/cprs/patient-chart.JPG)

## Domain by Domain HOW TOs

* [Allergies](Allergies)
* [Problems](Problems)
* [Vitals](Vitals)
