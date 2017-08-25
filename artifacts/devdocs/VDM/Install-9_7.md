---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Install-9_7<br/>
<a name="top"></a>
# Install (9.7)
This file contains the installation information for a site from the Kernel Installation & Distribution System.  This file should not be edited. All information is updated when a new package is installed at a site.

**Global:** ^XPD(9.7,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | The name and version number of this Package (i.e. Kernel 8.0T1) | STRING | INDEXED<br/>REQUIRED | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .02 | This is the status of this package at this site. | ENUMERATION | REQUIRED | {::nomarkdown}Queued for Install: <em><strong>1</strong></em><br/>Start of Install: <em><strong>2</strong></em><br/>Install Completed: <em><strong>3</strong></em><br/>De-Installed: <em><strong>4</strong></em><br/>Loaded from Distribution: <em><strong>0</strong></em>{:/}
**Package File Link**{::nomarkdown}<pre><code>  package_file_link</code></pre>{:/} | 1 | This field contains the link to the Package File. | POINTER |  | [Package-9_4](Package-9_4)
**Date Loaded**{::nomarkdown}<pre><code>  date_loaded</code></pre>{:/} | 2 | This is the time the Transport Global was loaded at the site. | DATE-TIME |  | 
**Starting Package**{::nomarkdown}<pre><code>  starting_package</code></pre>{:/} | 3 | This is the first package in a multi-package install. | POINTER |  | [Install-9_7](Install-9_7)
**Install Order**{::nomarkdown}<pre><code>  install_order</code></pre>{:/} | 4 | This is the order to install this package in a multi-package install. | NUMERIC |  | 
**Queued Task Number**{::nomarkdown}<pre><code>  queued_task_number</code></pre>{:/} | 5 | This is the Task number for this package if this package was queued to<br/>be installed at a later time. | NUMERIC |  | 
**File Comment**{::nomarkdown}<pre><code>  file_comment</code></pre>{:/} | 6 | This is the comment from the HFS file that contained this package. | STRING |  | 
**Required To Continue**{::nomarkdown}<pre><code>  required_to_continue</code></pre>{:/} | 6.5 | If required (answer = YES) the entire build will be aborted if this build does <br/>not successfully load.  If not required (answer = NO) the other builds within <br/>this build will continue to be processed.<br/> | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Setname**{::nomarkdown}<pre><code>  setname</code></pre>{:/} | 7 | This is the SETNAME that will be used to disable options and protocols during<br/>the installation of this package. | STRING |  | 
**Disable Option Delay**{::nomarkdown}<pre><code>  disable_option_delay</code></pre>{:/} | 8 | Enter the number of minutes to wait after the Options and Protocols have<br/>been disabled, but before the Routines have been installed. | NUMERIC |  | 
**Installed By**{::nomarkdown}<pre><code>  installed_by</code></pre>{:/} | 9 | This is the person who installed this package. | POINTER |  | [New_Person-200](New_Person-200)
**Install Start Time**{::nomarkdown}<pre><code>  install_start_time</code></pre>{:/} | 11 | This is the time the install started. | DATE-TIME |  | 
**Routine Install Time**{::nomarkdown}<pre><code>  routine_install_time</code></pre>{:/} | 12 | This is the routine install completed time. | DATE-TIME |  | 
**Pre-init Check Points**{::nomarkdown}<pre><code>  preinit_check_points</code></pre>{:/} | 13 | This contains all the check points needed for the Pre-Init routine. | OBJECT |  | [Preinit_Check_Points-9_713](#Preinit_Check_Points-9_713)
**File**{::nomarkdown}<pre><code>  file</code></pre>{:/} | 14 | This contains the VA Fileman files that were installed by this package. | OBJECT |  | [File-9_714](#File-9_714)
**Build Components**{::nomarkdown}<pre><code>  build_components</code></pre>{:/} | 15 | This contains a list of the components of this package. | OBJECT |  | [Build_Components-9_715](#Build_Components-9_715)
**Post-init Check Points**{::nomarkdown}<pre><code>  postinit_check_points</code></pre>{:/} | 16 | This contains all the check points needed for the Post-Init routine. | OBJECT |  | [Postinit_Check_Points-9_716](#Postinit_Check_Points-9_716)
**Install Complete Time**{::nomarkdown}<pre><code>  install_complete_time</code></pre>{:/} | 17 | This is the time the install finished. | DATE-TIME |  | 
**Globals**{::nomarkdown}<pre><code>  globals</code></pre>{:/} | 18 | This multiple contains a list of globals that were installed by<br/>this package. | OBJECT |  | [Globals-9_718](#Globals-9_718)
**Messages**{::nomarkdown}<pre><code>  messages</code></pre>{:/} | 20 | This is where all messages about the install will be saved. | STRING |  | 
**Volume Set**{::nomarkdown}<pre><code>  volume_set</code></pre>{:/} | 30 | This multiple contains the Volumes Sets that will be updated with the new<br/>routines and compiled cross references, print and input templates. | OBJECT |  | [Volume_Set-9_703](#Volume_Set-9_703)
**Routines**{::nomarkdown}<pre><code>  routines</code></pre>{:/} | 40 | This multiple contains a list of all Routines that were installed for<br/>this package.  It also includes routines that were generated during the<br/>install.  The Routines came from calls to DIEZ, DIPZ, and DIKZ. | STRING |  | 
**Install Answers**{::nomarkdown}<pre><code>  install_answers</code></pre>{:/} | 50 | This multiple contains the answers to all the install Questions. | OBJECT |  | [Install_Answers-9_701](#Install_Answers-9_701)
**Distribution Date**{::nomarkdown}<pre><code>  distribution_date</code></pre>{:/} | 51 | This field holds the distribution date of the build that is being<br/>installed.  This is not a user input field. | DATE-TIME |  | 
**Test#**{::nomarkdown}<pre><code>  testnumber</code></pre>{:/} | 61 | This field holds the Test Version Number from the patch module on FORUM. | NUMERIC |  | 
**Seq#**{::nomarkdown}<pre><code>  seqnumber</code></pre>{:/} | 62 | This field holds the Release Sequence # from the Patch Module on FORUM. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Preinit_Check_Points-9_713"></a>Pre-init Check Points (9.713)

<dl>
<dt>ID</dt><dd>Preinit_Check_Points-9_713</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Pre-init Check Points**{::nomarkdown}<pre><code>  preinit_check_points</code></pre>{:/} | .01 | Enter the name of a Check Point that will be used by the Pre-Init routine.<br/>The Check Point "COMPLETED" will be created by the Install process and<br/>updated when the Pre-Init routine is finished. | STRING | INDEXED<br/>REQUIRED | 
**Completed Time**{::nomarkdown}<pre><code>  completed_time</code></pre>{:/} | 1 | This is the time the check point was completed. | DATE-TIME |  | 
**Callback**{::nomarkdown}<pre><code>  callback</code></pre>{:/} | 2 | This is a routine that will be run if this Check Point didn't complete<br/>and the install process had to be restarted. | STRING |  | 
**Parameters**{::nomarkdown}<pre><code>  parameters</code></pre>{:/} | 3 | This is optional parameters that may be need during a restart. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="File-9_714"></a>File (9.714)

<dl>
<dt>ID</dt><dd>File-9_714</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**File**{::nomarkdown}<pre><code>  file</code></pre>{:/} | .01 | VA Fileman file that was installed by this package. | POINTER | INDEXED<br/>REQUIRED | [File-1](File-1)
**Data Dictionary Time**{::nomarkdown}<pre><code>  data_dictionary_time</code></pre>{:/} | 1 | The time the Data Dictionary was installed at this site. | DATE-TIME |  | 
**Data Time**{::nomarkdown}<pre><code>  data_time</code></pre>{:/} | 2 | The time the Data was installed at this site. | DATE-TIME |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Build_Components-9_715"></a>Build Components (9.715)

<dl>
<dt>ID</dt><dd>Build_Components-9_715</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Build Component**{::nomarkdown}<pre><code>  build_component</code></pre>{:/} | .01 | The name of a VA Fileman file that is a component of this package. | POINTER | INDEXED<br/>REQUIRED | [File-1](File-1)
**Data Time**{::nomarkdown}<pre><code>  data_time</code></pre>{:/} | 1 | This is the time the package component was installed. | DATE-TIME |  | 
**Install Order**{::nomarkdown}<pre><code>  install_order</code></pre>{:/} | 2 | This is the order the Build Components were installed. | NUMERIC | INDEXED | 

[&uarr; Return to top](#top)<br/>


### <a name="Postinit_Check_Points-9_716"></a>Post-init Check Points (9.716)

<dl>
<dt>ID</dt><dd>Postinit_Check_Points-9_716</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Post-init Check Points**{::nomarkdown}<pre><code>  postinit_check_points</code></pre>{:/} | .01 | Enter the name of a Check Point that will be used by the Post-Init routine.<br/>The Check Point "COMPLETED" will be created by the Install process and<br/>updated when the Post-Init routine is finished. | STRING | INDEXED<br/>REQUIRED | 
**Completed Time**{::nomarkdown}<pre><code>  completed_time</code></pre>{:/} | 1 | This is the time the check point was completed. | DATE-TIME |  | 
**Callback**{::nomarkdown}<pre><code>  callback</code></pre>{:/} | 2 | This is a routine that will be run if this Check Point didn't complete<br/>and the install process had to be restarted. | STRING |  | 
**Parameters**{::nomarkdown}<pre><code>  parameters</code></pre>{:/} | 3 | This is optional parameters that may be need during a restart. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Globals-9_718"></a>Globals (9.718)

<dl>
<dt>ID</dt><dd>Globals-9_718</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Globals**{::nomarkdown}<pre><code>  globals</code></pre>{:/} | .01 | The name of a Global or Global root that was installed by this<br/>package. | STRING | INDEXED<br/>REQUIRED | 
**Completed Time**{::nomarkdown}<pre><code>  completed_time</code></pre>{:/} | 1 | This is the time the Global was installed. | DATE-TIME |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Volume_Set-9_703"></a>Volume Set (9.703)

<dl>
<dt>ID</dt><dd>Volume_Set-9_703</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Volume Set**{::nomarkdown}<pre><code>  volume_set</code></pre>{:/} | .01 | Enter the name of the VOLUME SET that you want updated when this package is<br/>installed. This field points to the VOLUME SET file, #14.5. A VOLUME SET<br/>must have the field SIGNON/PRODUCTION VOLUME SET, #9, set to YES. | STRING | INDEXED<br/>REQUIRED | 
**Completed Time**{::nomarkdown}<pre><code>  completed_time</code></pre>{:/} | 1 | This is the time the update to the VOLUME SET was completed.  | DATE-TIME |  | 
**Start Time**{::nomarkdown}<pre><code>  start_time</code></pre>{:/} | 2 | This is the time the update to the VOLUME SET was started. | DATE-TIME |  | 
**Queued Task Number**{::nomarkdown}<pre><code>  queued_task_number</code></pre>{:/} | 3 | This is the Task number for the job that is updating the VOLUME SET. | NUMERIC |  | 
**Last Update**{::nomarkdown}<pre><code>  last_update</code></pre>{:/} | 4 | This is the $H value from the job that is updating the VOLUME SET. It should<br/>be updated every 60 seconds. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Install_Answers-9_701"></a>Install Answers (9.701)

<dl>
<dt>ID</dt><dd>Install_Answers-9_701</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the subscript to the install question. | STRING | INDEXED<br/>REQUIRED | 
**Prompt**{::nomarkdown}<pre><code>  prompt</code></pre>{:/} | 1 | This is the DIR(A) variable that was used to prompt the user for the<br/>Install Question. | STRING |  | 
**External Answer**{::nomarkdown}<pre><code>  external_answer</code></pre>{:/} | 2 | This is the external format of the Install Question answer. | STRING |  | 
**Answer**{::nomarkdown}<pre><code>  answer</code></pre>{:/} | 3 | This is the internal format of the Install Question answer. | STRING |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}