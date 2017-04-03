---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Install-9_7 

<dl>
<dt>id</dt><dd>Install-9_7</dd>
<dt>fmId</dt><dd>9.7</dd>
<dt>label</dt><dd>Install</dd>
<dt>location</dt><dd>^XPD(9.7,</dd>
<dt>description</dt><dd>This file contains the installation information for a site from the Kernel<br/>Installation & Distribution System.  This file should not be edited.<br/>All information is updated when a new package is installed at a site.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}The name and version number of this Package (i.e. Kernel 8.0T1){:/} | STRING |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | {::nomarkdown}This is the status of this package at this site.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>Queued for Install</dd><dt>2</dt><dd>Start of Install</dd><dt>3</dt><dd>Install Completed</dd><dt>4</dt><dd>De-Installed</dd><dt>0</dt><dd>Loaded from Distribution</dd></dl>{:/} | 
| package_file_link | 1 | Package File Link | {::nomarkdown}This field contains the link to the Package File.{:/} | POINTER |  |  | Package-9_4 | 
| date_loaded | 2 | Date Loaded | {::nomarkdown}This is the time the Transport Global was loaded at the site.{:/} | DATE-TIME |  |  |  | 
| starting_package | 3 | Starting Package | {::nomarkdown}This is the first package in a multi-package install.{:/} | POINTER |  |  | Install-9_7 | 
| install_order | 4 | Install Order | {::nomarkdown}This is the order to install this package in a multi-package install.{:/} | NUMERIC |  |  |  | 
| queued_task_number | 5 | Queued Task Number | {::nomarkdown}This is the Task number for this package if this package was queued to<br/>be installed at a later time.{:/} | NUMERIC |  |  |  | 
| file_comment | 6 | File Comment | {::nomarkdown}This is the comment from the HFS file that contained this package.{:/} | STRING |  |  |  | 
| required_to_continue | 6.5 | Required To Continue | {::nomarkdown}If required (answer = YES) the entire build will be aborted if this build does <br/>not successfully load.  If not required (answer = NO) the other builds within <br/>this build will continue to be processed.<br/>{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| setname | 7 | Setname | {::nomarkdown}This is the SETNAME that will be used to disable options and protocols during<br/>the installation of this package.{:/} | STRING |  |  |  | 
| disable_option_delay | 8 | Disable Option Delay | {::nomarkdown}Enter the number of minutes to wait after the Options and Protocols have<br/>been disabled, but before the Routines have been installed.{:/} | NUMERIC |  |  |  | 
| installed_by | 9 | Installed By | {::nomarkdown}This is the person who installed this package.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| install_start_time | 11 | Install Start Time | {::nomarkdown}This is the time the install started.{:/} | DATE-TIME |  |  |  | 
| routine_install_time | 12 | Routine Install Time | {::nomarkdown}This is the routine install completed time.{:/} | DATE-TIME |  |  |  | 
| preinit_check_points | 13 | Pre-init Check Points | {::nomarkdown}This contains all the check points needed for the Pre-Init routine.{:/} | [OBJECT] |  |  | [Preinit_Check_Points-9_713](#Preinit_Check_Points-9_713)  | 
| file | 14 | File | {::nomarkdown}This contains the VA Fileman files that were installed by this package.{:/} | [OBJECT] |  |  | [File-9_714](#File-9_714)  | 
| build_components | 15 | Build Components | {::nomarkdown}This contains a list of the components of this package.{:/} | [OBJECT] |  |  | [Build_Components-9_715](#Build_Components-9_715)  | 
| postinit_check_points | 16 | Post-init Check Points | {::nomarkdown}This contains all the check points needed for the Post-Init routine.{:/} | [OBJECT] |  |  | [Postinit_Check_Points-9_716](#Postinit_Check_Points-9_716)  | 
| install_complete_time | 17 | Install Complete Time | {::nomarkdown}This is the time the install finished.{:/} | DATE-TIME |  |  |  | 
| globals | 18 | Globals | {::nomarkdown}This multiple contains a list of globals that were installed by<br/>this package.{:/} | [OBJECT] |  |  | [Globals-9_718](#Globals-9_718)  | 
| messages | 20 | Messages | {::nomarkdown}This is where all messages about the install will be saved.{:/} | STRING |  |  |  | 
| volume_set | 30 | Volume Set | {::nomarkdown}This multiple contains the Volumes Sets that will be updated with the new<br/>routines and compiled cross references, print and input templates.{:/} | [OBJECT] |  |  | [Volume_Set-9_703](#Volume_Set-9_703)  | 
| routines | 40 | Routines | {::nomarkdown}This multiple contains a list of all Routines that were installed for<br/>this package.  It also includes routines that were generated during the<br/>install.  The Routines came from calls to DIEZ, DIPZ, and DIKZ.{:/} | [STRING] |  |  |  | 
| install_answers | 50 | Install Answers | {::nomarkdown}This multiple contains the answers to all the install Questions.{:/} | [OBJECT] |  |  | [Install_Answers-9_701](#Install_Answers-9_701)  | 
| distribution_date | 51 | Distribution Date | {::nomarkdown}This field holds the distribution date of the build that is being<br/>installed.  This is not a user input field.{:/} | DATE-TIME |  |  |  | 
| testnumber | 61 | Test# | {::nomarkdown}This field holds the Test Version Number from the patch module on FORUM.{:/} | NUMERIC |  |  |  | 
| seqnumber | 62 | Seq# | {::nomarkdown}This field holds the Release Sequence # from the Patch Module on FORUM.{:/} | NUMERIC |  |  |  | 

## <a name="Preinit_Check_Points-9_713"></a>Preinit_Check_Points-9_713 

<dl>
<dt>id</dt><dd>Preinit_Check_Points-9_713</dd>
<dt>fmId</dt><dd>9.713</dd>
<dt>label</dt><dd>Pre-init Check Points</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| preinit_check_points | .01 | Pre-init Check Points | {::nomarkdown}Enter the name of a Check Point that will be used by the Pre-Init routine.<br/>The Check Point \COMPLETED\ will be created by the Install process and<br/>updated when the Pre-Init routine is finished.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| completed_time | 1 | Completed Time | {::nomarkdown}This is the time the check point was completed.{:/} | DATE-TIME |  |  |  | 
| callback | 2 | Callback | {::nomarkdown}This is a routine that will be run if this Check Point didn't complete<br/>and the install process had to be restarted.{:/} | STRING |  |  |  | 
| parameters | 3 | Parameters | {::nomarkdown}This is optional parameters that may be need during a restart.{:/} | STRING |  |  |  | 

## <a name="File-9_714"></a>File-9_714 

<dl>
<dt>id</dt><dd>File-9_714</dd>
<dt>fmId</dt><dd>9.714</dd>
<dt>label</dt><dd>File</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| file | .01 | File | {::nomarkdown}VA Fileman file that was installed by this package.{:/} | POINTER |  | REQUIRED, INDEXED | File-1 | 
| data_dictionary_time | 1 | Data Dictionary Time | {::nomarkdown}The time the Data Dictionary was installed at this site.{:/} | DATE-TIME |  |  |  | 
| data_time | 2 | Data Time | {::nomarkdown}The time the Data was installed at this site.{:/} | DATE-TIME |  |  |  | 

## <a name="Build_Components-9_715"></a>Build_Components-9_715 

<dl>
<dt>id</dt><dd>Build_Components-9_715</dd>
<dt>fmId</dt><dd>9.715</dd>
<dt>label</dt><dd>Build Components</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| build_component | .01 | Build Component | {::nomarkdown}The name of a VA Fileman file that is a component of this package.{:/} | POINTER |  | REQUIRED, INDEXED | File-1 | 
| data_time | 1 | Data Time | {::nomarkdown}This is the time the package component was installed.{:/} | DATE-TIME |  |  |  | 
| install_order | 2 | Install Order | {::nomarkdown}This is the order the Build Components were installed.{:/} | NUMERIC |  | INDEXED |  | 

## <a name="Postinit_Check_Points-9_716"></a>Postinit_Check_Points-9_716 

<dl>
<dt>id</dt><dd>Postinit_Check_Points-9_716</dd>
<dt>fmId</dt><dd>9.716</dd>
<dt>label</dt><dd>Post-init Check Points</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| postinit_check_points | .01 | Post-init Check Points | {::nomarkdown}Enter the name of a Check Point that will be used by the Post-Init routine.<br/>The Check Point \COMPLETED\ will be created by the Install process and<br/>updated when the Post-Init routine is finished.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| completed_time | 1 | Completed Time | {::nomarkdown}This is the time the check point was completed.{:/} | DATE-TIME |  |  |  | 
| callback | 2 | Callback | {::nomarkdown}This is a routine that will be run if this Check Point didn't complete<br/>and the install process had to be restarted.{:/} | STRING |  |  |  | 
| parameters | 3 | Parameters | {::nomarkdown}This is optional parameters that may be need during a restart.{:/} | STRING |  |  |  | 

## <a name="Globals-9_718"></a>Globals-9_718 

<dl>
<dt>id</dt><dd>Globals-9_718</dd>
<dt>fmId</dt><dd>9.718</dd>
<dt>label</dt><dd>Globals</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| globals | .01 | Globals | {::nomarkdown}The name of a Global or Global root that was installed by this<br/>package.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| completed_time | 1 | Completed Time | {::nomarkdown}This is the time the Global was installed.{:/} | DATE-TIME |  |  |  | 

## <a name="Volume_Set-9_703"></a>Volume_Set-9_703 

<dl>
<dt>id</dt><dd>Volume_Set-9_703</dd>
<dt>fmId</dt><dd>9.703</dd>
<dt>label</dt><dd>Volume Set</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| volume_set | .01 | Volume Set | {::nomarkdown}Enter the name of the VOLUME SET that you want updated when this package is<br/>installed. This field points to the VOLUME SET file, #14.5. A VOLUME SET<br/>must have the field SIGNON/PRODUCTION VOLUME SET, #9, set to YES.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| completed_time | 1 | Completed Time | {::nomarkdown}This is the time the update to the VOLUME SET was completed. {:/} | DATE-TIME |  |  |  | 
| start_time | 2 | Start Time | {::nomarkdown}This is the time the update to the VOLUME SET was started.{:/} | DATE-TIME |  |  |  | 
| queued_task_number | 3 | Queued Task Number | {::nomarkdown}This is the Task number for the job that is updating the VOLUME SET.{:/} | NUMERIC |  |  |  | 
| last_update | 4 | Last Update | {::nomarkdown}This is the $H value from the job that is updating the VOLUME SET. It should<br/>be updated every 60 seconds.{:/} | STRING |  |  |  | 

## <a name="Install_Answers-9_701"></a>Install_Answers-9_701 

<dl>
<dt>id</dt><dd>Install_Answers-9_701</dd>
<dt>fmId</dt><dd>9.701</dd>
<dt>label</dt><dd>Install Answers</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the subscript to the install question.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| prompt | 1 | Prompt | {::nomarkdown}This is the DIR(A) variable that was used to prompt the user for the<br/>Install Question.{:/} | STRING |  |  |  | 
| external_answer | 2 | External Answer | {::nomarkdown}This is the external format of the Install Question answer.{:/} | STRING |  |  |  | 
| answer | 3 | Answer | {::nomarkdown}This is the internal format of the Install Question answer.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on April 3rd 2017, 4:24:19 pm</p>{:/}