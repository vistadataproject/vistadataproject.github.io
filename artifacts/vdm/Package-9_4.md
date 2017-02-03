---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Package-9_4 

<dl>
<dt>id</dt><dd>Package-9_4</dd>
<dt>fmId</dt><dd>9.4</dd>
<dt>label</dt><dd>Package</dd>
<dt>location</dt><dd>^DIC(9.4,</dd>
<dt>description</dt><dd>This file identifies the elements of a package that will be transported<br/>by the initialization routines created by DIFROM.  The prefix determines<br/>which namespaced entries will be retrieved from the Option, Bulletin,<br/>Help Frame, Function, and Security Key Files as well as the namespace<br/>that will be used to name the INIT routines built by running DIFROM.<br/>The Excluded Namespace field may be used to leave out some of these items.<br/>The File Multiple determines which files are sent with the package and<br/>whether data is included.  Print, Input, Sort and Screen (FORM)<br/>templates are brought in by namespace, for the files listed in the File<br/>multiple.  In addition, there are multiples for each type of template,<br/>that allow the user to specify individual templates outside the<br/>namespace to retrieve.  Routines to be run before and after the<br/>INIT are specified in the Environment Check Routine, Pre-init after<br/>User Commit, and Post-Initialization Routine fields. The remaining<br/>fields are simply for documentation.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}The name of this Package.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| prefix | 1 | Prefix | {::nomarkdown}This is the unique namespace prefix assigned to the Package, e.g. XM for<br/>the MailMan routines and globals, DI for the FileMan routines, etc.<br/>This field is appended to letters (like \INIT\) to be used as the<br/>names of INIT routines.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| short_description | 2 | Short Description | {::nomarkdown}This is a brief description of this Package's functions.{:/} | STRING |  | REQUIRED |  | 
| description | 3 | Description | {::nomarkdown}This is a complete and detailed description of the Package's functions<br/>and capabilities.{:/} | STRING |  |  |  | 
| file | 6 | File | {::nomarkdown}Any FileMan files which are part of this Package are documented<br/>here.  This multiple controls what files (Data Dictionaries and<br/>Data) are sent in an INIT built from this Package entry.{:/} | [OBJECT] |  |  | [File-9_44](#File-9_44)  | 
| print_template | 7 | Print Template | {::nomarkdown}The names of Print Templates being sent with this Package.<br/>This multiple is used to send non-namespaced templates in an INIT.<br/>Namespaced templates are sent automatically and need not be listed<br/>separately.{:/} | [OBJECT] |  |  | [Print_Template-9_46](#Print_Template-9_46)  | 
| input_template | 8 | Input Template | {::nomarkdown}The names of the Input Templates being sent with this Package<br/>This multiple is used to send non-namespaced templates in an INIT.<br/>Namespaced templates are sent automatically and need not be listed<br/>separately.{:/} | [OBJECT] |  |  | [Input_Template-9_47](#Input_Template-9_47)  | 
| sort_template | 9 | Sort Template | {::nomarkdown}The names of the Sort Templates being sent with this Package.<br/>This multiple is used to send non-namespaced templates in an INIT.<br/>Namespaced templates are sent automatically and need not be listed<br/>separately.{:/} | [OBJECT] |  |  | [Sort_Template-9_48](#Sort_Template-9_48)  | 
| screen_template_form | 9.1 | Screen Template (form) | {::nomarkdown}The names of Screen Templates (from the FORM file) associated with<br/>this package.{:/} | [OBJECT] |  |  | [Screen_Template_form-9_485](#Screen_Template_form-9_485)  | 
| menu | 9.5 | *menu | {::nomarkdown}This is the name of a menu-type option in another namespace.{:/} | [OBJECT] |  |  |  | 
| developer_person_site | 10 | Developer (person/site) | {::nomarkdown}The name of the principal Developer and Site for this Package.{:/} | STRING |  |  |  | 
| lowest_file_number | 10.6 | *lowest File Number | {::nomarkdown}Inclusive lower bound of the range of file numbers allocated to this package.{:/} | NUMERIC |  |  |  | 
| highest_file_number | 11 | *highest File Number | {::nomarkdown}Inclusive upper bound of the range of file numbers assigned to this package.{:/} | NUMERIC |  |  |  | 
| development_isc | 11.01 | Development Isc | {::nomarkdown}The ISC responsible for the development and management of this Package.{:/} | STRING |  |  |  | 
| class | 11.3 | Class | {::nomarkdown}The ranking Class of this software Package.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>I</dt><dd>National</dd><dt>II</dt><dd>Inactive</dd><dt>III</dt><dd>Local</dd></dl>{:/} | 
| current_version | 13 | Current Version | {::nomarkdown}This field holds the version number of the package currently running<br/>at this site.  When a package initialization has been run, this field<br/>will be updated with the version number most recently installed.<br/>This can be either using the old format (1.0, 16.04, etc.) or the new<br/>format (18.0T4, 19.1V2, etc.){:/} | STRING |  |  |  | 
| additional_prefixes | 14 | Additional Prefixes |  | [STRING] |  |  |  | 
| affects_record_merge | 20 | Affects Record Merge | {::nomarkdown}This Multipule lists the files that will impact this package if a Record<br/>Merge is done on any of the files in the list.{:/} | [OBJECT] |  |  | [Affects_Record_Merge-9_402](#Affects_Record_Merge-9_402)  | 
| version | 22 | Version | {::nomarkdown}The version numbers of this Package.{:/} | [OBJECT] |  |  | [Version-9_49](#Version-9_49)  | 
| environment_check_routine | 913 | Environment Check Routine | {::nomarkdown}The name of the developer's routine which is run at the beginning of<br/>the NAMESPACE_INIT routine.  This should just check the environment<br/>and should not alter any data, since the user has no way to exit out of<br/>the INIT process until this program runs to completion.{:/} | STRING |  |  |  | 
| environment_check_done_date | 913.5 | Environment Check Done Date | {::nomarkdown}This is the date/time that the ENVIRONMENT CHECK routine last ran. When an<br/>INIT is run at a target site, and it contains an ENVIRONMENT CHECK<br/>routine, this field is updated automatically.{:/} | DATE-TIME |  |  |  | 
| postinitialization_routine | 914 | Post-initialization Routine | {::nomarkdown}The name of the developer's routine which is run immediately after the<br/>installation of the package.{:/} | STRING |  |  |  | 
| postinit_completion_date | 914.5 | Post-init Completion Date | {::nomarkdown}This is the date/time that the POST-INIT last ran.  When an<br/>INIT is run at a target site, and it contains a POST-INIT<br/>routine, this field is updated automatically.{:/} | DATE-TIME |  |  |  | 
| preinit_after_user_commit | 916 | Pre-init After User Commit | {::nomarkdown}Name of the developer's routine that runs after the user has answered all<br/>of the questions in NAMESPACE_INIT but before the INIT files any new data.<br/>Used for data conversions, etc. that the developer needs to do before<br/>bringing in new data.{:/} | STRING |  |  |  | 
| preinit_completion_date | 916.5 | Pre-init Completion Date | {::nomarkdown}This is the date/time that the PRE-INIT AFTER USER COMMIT last ran.<br/>When an INIT is run at a target site, and it contains a PRE-INIT<br/>AFTER USER COMMIT routine, this field is updated automatically.{:/} | DATE-TIME |  |  |  | 
| excluded_name_space | 919 | Excluded Name Space | {::nomarkdown}By specifying an \excluded name space\, the developer will be telling<br/>the DIFROM routine not to take OPTIONS, BULLETINS, etc. which begin<br/>with these characters.  For example, if \PSZ\ is an excluded name space<br/>in the \PS\ package, DIFROM will not send along OPTIONS, SECURITY KEYS,<br/>BULLETINS, or FUNCTIONS that begin with \PSZ\.{:/} | [STRING] |  |  |  | 
| mail_group | 1938 | Mail Group | {::nomarkdown}This field points to a mail group that will receive a mail message from<br/>KIDS when a package or patch is installed.{:/} | POINTER |  |  | Mail_Group-3_8 | 
| synonym | 15007 | Synonym |  | [STRING] |  |  |  | 

## <a name="File-9_44"></a>File-9_44 

<dl>
<dt>id</dt><dd>File-9_44</dd>
<dt>fmId</dt><dd>9.44</dd>
<dt>label</dt><dd>File</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| file | .01 | File | {::nomarkdown}The name of a VA FileMan file which you wish to transport with<br/>this package.  This may be any file whose number is 2 or greater.{:/} | POINTER |  | REQUIRED, INDEXED | File-1 | 
| field | 2 | Field | {::nomarkdown}The names of the FileMan Fields required by this Package.  Enter data<br/>here ONLY if you wish to send just selected fields from a Data Dictionary<br/>instead of the entire DD (i.e., a partial DD).{:/} | [STRING] |  |  |  | 
| update_the_data_dictionary | 222.1 | Update The Data Dictionary | {::nomarkdown}YES means that the Data Dictionary for this file should be updated when<br/>this version of the package is installed.<br/> <br/>NO means that this Data Dictionary has not changed since the last version,<br/>and therefore, need not be updated.<br/> <br/>If the Data Dictionary does not exist on the recipient system, then this<br/>field does not apply.  The DD will be put in place.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| assign_a_version_number | 222.2 | Assign A Version Number | {::nomarkdown}YES means that you want to set ^DD(file#,0,\VR\) to the version<br/>number of this package when the init is finished.<br/> <br/>NO means that you intend for the version number to remain as it is.<br/>This may mean that this DD has no version number at all.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| may_user_override_dd_update | 222.4 | May User Override DD Update | {::nomarkdown}YES means that the user may decide at installation time whether or not<br/>to update the data dictionary for this file.<br/> <br/>NO means that the developer building the INIT is determining if the<br/>data dictionary is to be updated.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| data_comes_with_file | 222.7 | Data Comes With File | {::nomarkdown}YES means that the data should be included in the initialization<br/>routines.<br/> <br/>NO means that the data should be left out.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| merge_or_overwrite_sites_data | 222.8 | Merge Or Overwrite Site's Data | {::nomarkdown} <br/>If the data being sent is to be MERGED, then only data which is not<br/>already on file at the recipient site will be put in place.<br/> <br/>If the data being sent is to OVERWRITE, then the data included in<br/>the initialization routines will be put in place regardless of what<br/>is on file at the recipient site.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>m</dt><dd>MERGE</dd><dt>o</dt><dd>OVERWRITE</dd></dl>{:/} | 
| may_user_override_data_update | 222.9 | May User Override Data Update | {::nomarkdown}YES means that the user has the option to determine whether or not<br/>to bring in the data that has been sent with the package.  However,<br/>he does not get the ability to change from merge to overwrite or<br/>from overwrite to merge.<br/> <br/>No means that the developer of the INIT will control whether the data<br/>will be installed at the target site.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| screen_to_determine_dd_update | 223 | Screen To Determine DD Update | {::nomarkdown}This field contains standard MUMPS code which is used to determine<br/>whether or not a data dictionary should be updated.  This code must<br/>set $T.  If $T=1, the DD will be updated.  If $T=0, it will not.<br/> <br/>This code will be executed within VA FileMan which may be being called<br/>from within MailMan which is being called from within MenuMan.<br/>Namespace your variables.{:/} | STRING |  |  |  | 

## <a name="Print_Template-9_46"></a>Print_Template-9_46 

<dl>
<dt>id</dt><dd>Print_Template-9_46</dd>
<dt>fmId</dt><dd>9.46</dd>
<dt>label</dt><dd>Print Template</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| print_template | .01 | Print Template | {::nomarkdown}The name of a Print Template being sent with this Package.<br/>This multiple is used to send non-namespaced templates in an INIT.<br/>Namespaced templates are sent automatically and need not be listed<br/>separately.  Selected Fields for Export and Export templates cannot be<br/>sent; entering their names here will have no effect.{:/} | STRING |  | REQUIRED |  | 
| file | 2 | File | {::nomarkdown}The FileMan file for this Print Template.{:/} | POINTER |  | REQUIRED | File-1 | 

## <a name="Input_Template-9_47"></a>Input_Template-9_47 

<dl>
<dt>id</dt><dd>Input_Template-9_47</dd>
<dt>fmId</dt><dd>9.47</dd>
<dt>label</dt><dd>Input Template</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| input_template | .01 | Input Template | {::nomarkdown}The name of an Input Template being sent with this Package.<br/>This multiple is used to send non-namespaced templates in an INIT.<br/>Namespaced templates are sent automatically and need not be listed<br/>separately.{:/} | STRING |  | REQUIRED |  | 
| file | 2 | File | {::nomarkdown}The name of the FileMan file for this Input Template.{:/} | POINTER |  | REQUIRED | File-1 | 

## <a name="Sort_Template-9_48"></a>Sort_Template-9_48 

<dl>
<dt>id</dt><dd>Sort_Template-9_48</dd>
<dt>fmId</dt><dd>9.48</dd>
<dt>label</dt><dd>Sort Template</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| sort_template | .01 | Sort Template | {::nomarkdown}The name of a Sort Template being sent with this Package.<br/>This multiple is used to send non-namespaced templates in an INIT.<br/>Namespaced templates are sent automatically and need not be listed<br/>separately.{:/} | STRING |  | REQUIRED |  | 
| file | 2 | File | {::nomarkdown}The FileMan file for this Sort Template.{:/} | POINTER |  | REQUIRED | File-1 | 

## <a name="Screen_Template_form-9_485"></a>Screen_Template_form-9_485 

<dl>
<dt>id</dt><dd>Screen_Template_form-9_485</dd>
<dt>fmId</dt><dd>9.485</dd>
<dt>label</dt><dd>Screen Template (form)</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| screen_template_form | .01 | Screen Template (form) | {::nomarkdown}The name of a Screen Template (from the FORM file) associated with<br/>this Package.{:/} | STRING |  | REQUIRED |  | 
| file | 2 | File | {::nomarkdown}The name of the FileMan file for this Screen Template (FORM).{:/} | POINTER |  | REQUIRED | File-1 | 

## <a name="Affects_Record_Merge-9_402"></a>Affects_Record_Merge-9_402 

<dl>
<dt>id</dt><dd>Affects_Record_Merge-9_402</dd>
<dt>fmId</dt><dd>9.402</dd>
<dt>label</dt><dd>Affects Record Merge</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| file_affected | .01 | File Affected | {::nomarkdown}A file that if merged will affect this package.{:/} | POINTER |  | REQUIRED, INDEXED | File-1 | 
| name_of_merge_routine | 3 | Name Of Merge Routine | {::nomarkdown}This field holds the routine name to call when two records in<br/>an affected file are to be merged. This allows the package to<br/>do any repointing or other clean-up needed before the records<br/>are merged.{:/} | STRING |  |  |  | 
| record_has_package_data | 4 | Record Has Package Data |  | STRING |  |  |  | 

## <a name="Version-9_49"></a>Version-9_49 

<dl>
<dt>id</dt><dd>Version-9_49</dd>
<dt>fmId</dt><dd>9.49</dd>
<dt>label</dt><dd>Version</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| version | .01 | Version | {::nomarkdown}The version number of this Package.  This number is updated automatically<br/>when an INIT is built for this package.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| date_distributed | 1 | Date Distributed | {::nomarkdown}The date this release was distributed.  This field is updated automatically<br/>when an INIT is built for this package.{:/} | DATE-TIME |  |  |  | 
| date_installed_at_this_site | 2 | Date Installed At This Site | {::nomarkdown}The date this release was installed at this site.  This field is updated<br/>automatically when an INIT is installed for this package.{:/} | DATE-TIME |  |  |  | 
| installed_by | 3 | Installed By | {::nomarkdown}This is the person who installed this version at this site.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| description_of_enhancements | 41 | Description Of Enhancements | {::nomarkdown}This is a description of the enhancements being distributed with this<br/>release.{:/} | STRING |  |  |  | 
| patch_application_history | 1105 | Patch Application History |  | [OBJECT] |  |  | [Patch_Application_History-9_4901](#Patch_Application_History-9_4901)  | 

## <a name="Patch_Application_History-9_4901"></a>Patch_Application_History-9_4901 

<dl>
<dt>id</dt><dd>Patch_Application_History-9_4901</dd>
<dt>fmId</dt><dd>9.4901</dd>
<dt>label</dt><dd>Patch Application History</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| patch_application_history | .01 | Patch Application History |  | STRING |  | REQUIRED, INDEXED |  | 
| date_applied | .02 | Date Applied |  | DATE-TIME |  |  |  | 
| applied_by | .03 | Applied By |  | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| description | 1 | Description | {::nomarkdown}This is a description of the patch being distributed with this release.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 6:30:51 am</p>{:/}