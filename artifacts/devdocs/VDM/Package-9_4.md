---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Package-9_4<br/>
<a name="top"></a>
# Package (9.4)
This file identifies the elements of a package that will be transported by the initialization routines created by DIFROM.  The prefix determines which namespaced entries will be retrieved from the Option, Bulletin, Help Frame, Function, and Security Key Files as well as the namespace that will be used to name the INIT routines built by running DIFROM. The Excluded Namespace field may be used to leave out some of these items. The File Multiple determines which files are sent with the package and whether data is included.  Print, Input, Sort and Screen (FORM) templates are brought in by namespace, for the files listed in the File multiple.  In addition, there are multiples for each type of template, that allow the user to specify individual templates outside the namespace to retrieve.  Routines to be run before and after the INIT are specified in the Environment Check Routine, Pre-init after User Commit, and Post-Initialization Routine fields. The remaining fields are simply for documentation.

**Global:** ^DIC(9.4,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | The name of this Package. | STRING | INDEXED<br/>REQUIRED | 
**Prefix**{::nomarkdown}<pre><code>  prefix</code></pre>{:/} | 1 | This is the unique namespace prefix assigned to the Package, e.g. XM for<br/>the MailMan routines and globals, DI for the FileMan routines, etc.<br/>This field is appended to letters (like "INIT") to be used as the<br/>names of INIT routines. | STRING | INDEXED<br/>REQUIRED | 
**Short Description**{::nomarkdown}<pre><code>  short_description</code></pre>{:/} | 2 | This is a brief description of this Package's functions. | STRING | REQUIRED | 
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 3 | This is a complete and detailed description of the Package's functions<br/>and capabilities. | STRING |  | 
**File**{::nomarkdown}<pre><code>  file</code></pre>{:/} | 6 | Any FileMan files which are part of this Package are documented<br/>here.  This multiple controls what files (Data Dictionaries and<br/>Data) are sent in an INIT built from this Package entry. | OBJECT |  | [File-9_44](#File-9_44)
**Print Template**{::nomarkdown}<pre><code>  print_template</code></pre>{:/} | 7 | The names of Print Templates being sent with this Package.<br/>This multiple is used to send non-namespaced templates in an INIT.<br/>Namespaced templates are sent automatically and need not be listed<br/>separately. | OBJECT |  | [Print_Template-9_46](#Print_Template-9_46)
**Input Template**{::nomarkdown}<pre><code>  input_template</code></pre>{:/} | 8 | The names of the Input Templates being sent with this Package<br/>This multiple is used to send non-namespaced templates in an INIT.<br/>Namespaced templates are sent automatically and need not be listed<br/>separately. | OBJECT |  | [Input_Template-9_47](#Input_Template-9_47)
**Sort Template**{::nomarkdown}<pre><code>  sort_template</code></pre>{:/} | 9 | The names of the Sort Templates being sent with this Package.<br/>This multiple is used to send non-namespaced templates in an INIT.<br/>Namespaced templates are sent automatically and need not be listed<br/>separately. | OBJECT |  | [Sort_Template-9_48](#Sort_Template-9_48)
**Screen Template (form)**{::nomarkdown}<pre><code>  screen_template_form</code></pre>{:/} | 9.1 | The names of Screen Templates (from the FORM file) associated with<br/>this package. | OBJECT |  | [Screen_Template_form-9_485](#Screen_Template_form-9_485)
***menu**{::nomarkdown}<pre><code>  menu</code></pre>{:/} | 9.5 | This is the name of a menu-type option in another namespace. | OBJECT | DEPRECATED | 
**Developer (person/site)**{::nomarkdown}<pre><code>  developer_person_site</code></pre>{:/} | 10 | The name of the principal Developer and Site for this Package. | STRING |  | 
***lowest File Number**{::nomarkdown}<pre><code>  lowest_file_number</code></pre>{:/} | 10.6 | Inclusive lower bound of the range of file numbers allocated to this package. | NUMERIC | DEPRECATED | 
***highest File Number**{::nomarkdown}<pre><code>  highest_file_number</code></pre>{:/} | 11 | Inclusive upper bound of the range of file numbers assigned to this package. | NUMERIC | DEPRECATED | 
**Development Isc**{::nomarkdown}<pre><code>  development_isc</code></pre>{:/} | 11.01 | The ISC responsible for the development and management of this Package. | STRING |  | 
**Class**{::nomarkdown}<pre><code>  class</code></pre>{:/} | 11.3 | The ranking Class of this software Package. | ENUMERATION |  | {::nomarkdown}National: <em><strong>I</strong></em><br/>Inactive: <em><strong>II</strong></em><br/>Local: <em><strong>III</strong></em>{:/}
**Current Version**{::nomarkdown}<pre><code>  current_version</code></pre>{:/} | 13 | This field holds the version number of the package currently running<br/>at this site.  When a package initialization has been run, this field<br/>will be updated with the version number most recently installed.<br/>This can be either using the old format (1.0, 16.04, etc.) or the new<br/>format (18.0T4, 19.1V2, etc.) | STRING |  | 
**Additional Prefixes**{::nomarkdown}<pre><code>  additional_prefixes</code></pre>{:/} | 14 |  | STRING |  | 
**Affects Record Merge**{::nomarkdown}<pre><code>  affects_record_merge</code></pre>{:/} | 20 | This Multipule lists the files that will impact this package if a Record<br/>Merge is done on any of the files in the list. | OBJECT |  | [Affects_Record_Merge-9_402](#Affects_Record_Merge-9_402)
**Version**{::nomarkdown}<pre><code>  version</code></pre>{:/} | 22 | The version numbers of this Package. | OBJECT |  | [Version-9_49](#Version-9_49)
**Environment Check Routine**{::nomarkdown}<pre><code>  environment_check_routine</code></pre>{:/} | 913 | The name of the developer's routine which is run at the beginning of<br/>the NAMESPACE_INIT routine.  This should just check the environment<br/>and should not alter any data, since the user has no way to exit out of<br/>the INIT process until this program runs to completion. | STRING |  | 
**Environment Check Done Date**{::nomarkdown}<pre><code>  environment_check_done_date</code></pre>{:/} | 913.5 | This is the date/time that the ENVIRONMENT CHECK routine last ran. When an<br/>INIT is run at a target site, and it contains an ENVIRONMENT CHECK<br/>routine, this field is updated automatically. | DATE-TIME |  | 
**Post-initialization Routine**{::nomarkdown}<pre><code>  postinitialization_routine</code></pre>{:/} | 914 | The name of the developer's routine which is run immediately after the<br/>installation of the package. | STRING |  | 
**Post-init Completion Date**{::nomarkdown}<pre><code>  postinit_completion_date</code></pre>{:/} | 914.5 | This is the date/time that the POST-INIT last ran.  When an<br/>INIT is run at a target site, and it contains a POST-INIT<br/>routine, this field is updated automatically. | DATE-TIME |  | 
**Pre-init After User Commit**{::nomarkdown}<pre><code>  preinit_after_user_commit</code></pre>{:/} | 916 | Name of the developer's routine that runs after the user has answered all<br/>of the questions in NAMESPACE_INIT but before the INIT files any new data.<br/>Used for data conversions, etc. that the developer needs to do before<br/>bringing in new data. | STRING |  | 
**Pre-init Completion Date**{::nomarkdown}<pre><code>  preinit_completion_date</code></pre>{:/} | 916.5 | This is the date/time that the PRE-INIT AFTER USER COMMIT last ran.<br/>When an INIT is run at a target site, and it contains a PRE-INIT<br/>AFTER USER COMMIT routine, this field is updated automatically. | DATE-TIME |  | 
**Excluded Name Space**{::nomarkdown}<pre><code>  excluded_name_space</code></pre>{:/} | 919 | By specifying an "excluded name space", the developer will be telling<br/>the DIFROM routine not to take OPTIONS, BULLETINS, etc. which begin<br/>with these characters.  For example, if "PSZ" is an excluded name space<br/>in the "PS" package, DIFROM will not send along OPTIONS, SECURITY KEYS,<br/>BULLETINS, or FUNCTIONS that begin with "PSZ". | STRING |  | 
**Mail Group**{::nomarkdown}<pre><code>  mail_group</code></pre>{:/} | 1938 | This field points to a mail group that will receive a mail message from<br/>KIDS when a package or patch is installed. | POINTER |  | [Mail_Group-3_8](Mail_Group-3_8)
**Synonym**{::nomarkdown}<pre><code>  synonym</code></pre>{:/} | 15007 |  | STRING |  | 

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="File-9_44"></a>File (9.44)

<dl>
<dt>ID</dt><dd>File-9_44</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**File**{::nomarkdown}<pre><code>  file</code></pre>{:/} | .01 | The name of a VA FileMan file which you wish to transport with<br/>this package.  This may be any file whose number is 2 or greater. | POINTER | INDEXED<br/>REQUIRED | [File-1](File-1)
**Field**{::nomarkdown}<pre><code>  field</code></pre>{:/} | 2 | The names of the FileMan Fields required by this Package.  Enter data<br/>here ONLY if you wish to send just selected fields from a Data Dictionary<br/>instead of the entire DD (i.e., a partial DD). | STRING |  | 
**Update The Data Dictionary**{::nomarkdown}<pre><code>  update_the_data_dictionary</code></pre>{:/} | 222.1 | YES means that the Data Dictionary for this file should be updated when<br/>this version of the package is installed.<br/> <br/>NO means that this Data Dictionary has not changed since the last version,<br/>and therefore, need not be updated.<br/> <br/>If the Data Dictionary does not exist on the recipient system, then this<br/>field does not apply.  The DD will be put in place. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Assign A Version Number**{::nomarkdown}<pre><code>  assign_a_version_number</code></pre>{:/} | 222.2 | YES means that you want to set ^DD(file#,0,"VR") to the version<br/>number of this package when the init is finished.<br/> <br/>NO means that you intend for the version number to remain as it is.<br/>This may mean that this DD has no version number at all. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**May User Override DD Update**{::nomarkdown}<pre><code>  may_user_override_dd_update</code></pre>{:/} | 222.4 | YES means that the user may decide at installation time whether or not<br/>to update the data dictionary for this file.<br/> <br/>NO means that the developer building the INIT is determining if the<br/>data dictionary is to be updated. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Data Comes With File**{::nomarkdown}<pre><code>  data_comes_with_file</code></pre>{:/} | 222.7 | YES means that the data should be included in the initialization<br/>routines.<br/> <br/>NO means that the data should be left out. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Merge Or Overwrite Site&#x27;s Data**{::nomarkdown}<pre><code>  merge_or_overwrite_sites_data</code></pre>{:/} | 222.8 |  <br/>If the data being sent is to be MERGED, then only data which is not<br/>already on file at the recipient site will be put in place.<br/> <br/>If the data being sent is to OVERWRITE, then the data included in<br/>the initialization routines will be put in place regardless of what<br/>is on file at the recipient site. | ENUMERATION |  | {::nomarkdown}MERGE: <em><strong>m</strong></em><br/>OVERWRITE: <em><strong>o</strong></em>{:/}
**May User Override Data Update**{::nomarkdown}<pre><code>  may_user_override_data_update</code></pre>{:/} | 222.9 | YES means that the user has the option to determine whether or not<br/>to bring in the data that has been sent with the package.  However,<br/>he does not get the ability to change from merge to overwrite or<br/>from overwrite to merge.<br/> <br/>No means that the developer of the INIT will control whether the data<br/>will be installed at the target site. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Screen To Determine DD Update**{::nomarkdown}<pre><code>  screen_to_determine_dd_update</code></pre>{:/} | 223 | This field contains standard MUMPS code which is used to determine<br/>whether or not a data dictionary should be updated.  This code must<br/>set $T.  If $T=1, the DD will be updated.  If $T=0, it will not.<br/> <br/>This code will be executed within VA FileMan which may be being called<br/>from within MailMan which is being called from within MenuMan.<br/>Namespace your variables. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Print_Template-9_46"></a>Print Template (9.46)

<dl>
<dt>ID</dt><dd>Print_Template-9_46</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Print Template**{::nomarkdown}<pre><code>  print_template</code></pre>{:/} | .01 | The name of a Print Template being sent with this Package.<br/>This multiple is used to send non-namespaced templates in an INIT.<br/>Namespaced templates are sent automatically and need not be listed<br/>separately.  Selected Fields for Export and Export templates cannot be<br/>sent; entering their names here will have no effect. | STRING | REQUIRED | 
**File**{::nomarkdown}<pre><code>  file</code></pre>{:/} | 2 | The FileMan file for this Print Template. | POINTER | REQUIRED | [File-1](File-1)

[&uarr; Return to top](#top)<br/>


### <a name="Input_Template-9_47"></a>Input Template (9.47)

<dl>
<dt>ID</dt><dd>Input_Template-9_47</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Input Template**{::nomarkdown}<pre><code>  input_template</code></pre>{:/} | .01 | The name of an Input Template being sent with this Package.<br/>This multiple is used to send non-namespaced templates in an INIT.<br/>Namespaced templates are sent automatically and need not be listed<br/>separately. | STRING | REQUIRED | 
**File**{::nomarkdown}<pre><code>  file</code></pre>{:/} | 2 | The name of the FileMan file for this Input Template. | POINTER | REQUIRED | [File-1](File-1)

[&uarr; Return to top](#top)<br/>


### <a name="Sort_Template-9_48"></a>Sort Template (9.48)

<dl>
<dt>ID</dt><dd>Sort_Template-9_48</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Sort Template**{::nomarkdown}<pre><code>  sort_template</code></pre>{:/} | .01 | The name of a Sort Template being sent with this Package.<br/>This multiple is used to send non-namespaced templates in an INIT.<br/>Namespaced templates are sent automatically and need not be listed<br/>separately. | STRING | REQUIRED | 
**File**{::nomarkdown}<pre><code>  file</code></pre>{:/} | 2 | The FileMan file for this Sort Template. | POINTER | REQUIRED | [File-1](File-1)

[&uarr; Return to top](#top)<br/>


### <a name="Screen_Template_form-9_485"></a>Screen Template (form) (9.485)

<dl>
<dt>ID</dt><dd>Screen_Template_form-9_485</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Screen Template (form)**{::nomarkdown}<pre><code>  screen_template_form</code></pre>{:/} | .01 | The name of a Screen Template (from the FORM file) associated with<br/>this Package. | STRING | REQUIRED | 
**File**{::nomarkdown}<pre><code>  file</code></pre>{:/} | 2 | The name of the FileMan file for this Screen Template (FORM). | POINTER | REQUIRED | [File-1](File-1)

[&uarr; Return to top](#top)<br/>


### <a name="Affects_Record_Merge-9_402"></a>Affects Record Merge (9.402)

<dl>
<dt>ID</dt><dd>Affects_Record_Merge-9_402</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**File Affected**{::nomarkdown}<pre><code>  file_affected</code></pre>{:/} | .01 | A file that if merged will affect this package. | POINTER | INDEXED<br/>REQUIRED | [File-1](File-1)
**Name Of Merge Routine**{::nomarkdown}<pre><code>  name_of_merge_routine</code></pre>{:/} | 3 | This field holds the routine name to call when two records in<br/>an affected file are to be merged. This allows the package to<br/>do any repointing or other clean-up needed before the records<br/>are merged. | STRING |  | 
**Record Has Package Data**{::nomarkdown}<pre><code>  record_has_package_data</code></pre>{:/} | 4 |  | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Version-9_49"></a>Version (9.49)

<dl>
<dt>ID</dt><dd>Version-9_49</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Version**{::nomarkdown}<pre><code>  version</code></pre>{:/} | .01 | The version number of this Package.  This number is updated automatically<br/>when an INIT is built for this package. | STRING | INDEXED<br/>REQUIRED | 
**Date Distributed**{::nomarkdown}<pre><code>  date_distributed</code></pre>{:/} | 1 | The date this release was distributed.  This field is updated automatically<br/>when an INIT is built for this package. | DATE-TIME |  | 
**Date Installed At This Site**{::nomarkdown}<pre><code>  date_installed_at_this_site</code></pre>{:/} | 2 | The date this release was installed at this site.  This field is updated<br/>automatically when an INIT is installed for this package. | DATE-TIME |  | 
**Installed By**{::nomarkdown}<pre><code>  installed_by</code></pre>{:/} | 3 | This is the person who installed this version at this site. | POINTER |  | [New_Person-200](New_Person-200)
**Description Of Enhancements**{::nomarkdown}<pre><code>  description_of_enhancements</code></pre>{:/} | 41 | This is a description of the enhancements being distributed with this<br/>release. | STRING |  | 
**Patch Application History**{::nomarkdown}<pre><code>  patch_application_history</code></pre>{:/} | 1105 |  | OBJECT |  | [Patch_Application_History-9_4901](#Patch_Application_History-9_4901)

[&uarr; Return to top](#top)<br/>


### <a name="Patch_Application_History-9_4901"></a>Patch Application History (9.4901)

<dl>
<dt>ID</dt><dd>Patch_Application_History-9_4901</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Patch Application History**{::nomarkdown}<pre><code>  patch_application_history</code></pre>{:/} | .01 |  | STRING | INDEXED<br/>REQUIRED | 
**Date Applied**{::nomarkdown}<pre><code>  date_applied</code></pre>{:/} | .02 |  | DATE-TIME |  | 
**Applied By**{::nomarkdown}<pre><code>  applied_by</code></pre>{:/} | .03 |  | POINTER |  | [New_Person-200](New_Person-200)
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 1 | This is a description of the patch being distributed with this release. | STRING |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}