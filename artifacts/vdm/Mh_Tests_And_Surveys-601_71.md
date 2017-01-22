---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Mh_Tests_And_Surveys-601_71 

 property | value 
--- | --- 
 id | Mh_Tests_And_Surveys-601_71
 fmId | 601.71
 label | Mh Tests And Surveys
 location | ^YTT(601.71,
 description | {::nomarkdown}This file defines the interviews, surveys and tests available in the <br/>Mental Health Assistant. Attributes of the instruments include authoring <br/>credits, target populations, normative samples and copyright information. <br/>Actions available including privileging, reporting of full item content <br/>and transmission to the Mental Health National Database are also specified. <br/> <br/>Direct entry via FileMan is prohibited.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}Name of the interview, survey or test. Often its abbreviation is used here, e.g. \BDI2\<br/>instead of \Beck Depression Inventory-2\.  Each entry has a unique name.{:/} | STRING |  | REQUIRED |  | 
| print_title | 2 | Print Title | {::nomarkdown}This is the full formal name of the interview, survey or test.<br/>It is used on printed reports.{:/} | STRING |  |  |  | 
| version | 3 | Version | {::nomarkdown}Test publishers often give a version number to a published test. This <br/>field does not imply VA software versioning.{:/} | STRING |  |  |  | 
| author | 4 | Author | {::nomarkdown}This field indicates the author of the interview, survey or test.  It is <br/>meant to credit the test author and not the software author or the person <br/>who entered this description. Aaron Beck is the Author of the BDI.{:/} | STRING |  |  |  | 
| publisher | 5 | Publisher | {::nomarkdown}This is the name of the publisher of the test. Psychological Corporation <br/>is the publisher of the WAIS-R.{:/} | STRING |  |  |  | 
| publication_date | 7 | Publication Date | {::nomarkdown}Date of formal publication; often the copyright date{:/} | DATE-TIME |  |  |  | 
| reference | 7.5 | Reference | {::nomarkdown}This is the primary journal citation for the test.{:/} | STRING |  |  |  | 
| a_privilege | 8 | A Privilege | {::nomarkdown}If not null, only those users holding the specified key can administer the<br/>instrument.{:/} | POINTER |  |  | Security_Key-19_1 | 
| r_privilege | 9 | R Privilege | {::nomarkdown}A key name from the SECURITY KEY file (#19.1). <br/>Only those users holding the specified key can produce a report of the instrument.{:/} | STRING |  |  |  | 
| operational | 10 | Operational | {::nomarkdown}This field allows an instrument to be \taken out of service\. If set to <br/>'N' this instrument can no longer be administered and will not show on <br/>selection lists. Reports of old administrations remain available. If set <br/>to U instrument will be tagged Under Development.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>U</dt><dd>Under Development</dd><dt>D</dt><dd>Dropped</dd><dt>Y</dt><dd>Yes</dd><dt>C</dt><dd>Clinical Reminder</dd><dt>N</dt><dd>No</dd></dl>{:/} | 
| has_been_operational | 10.5 | Has Been Operational | {::nomarkdown}Used to define editing privileges, this field is set to yes when test is <br/>first used to collect patient data.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| requires_license | 11 | Requires License | {::nomarkdown}This indicates whether a copyright holder must grant the rights to use<br/>this Mental Health instrument.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| purpose | 12 | Purpose | {::nomarkdown}Description of what the test measures.{:/} | STRING |  |  |  | 
| norm_sample | 13 | Norm Sample | {::nomarkdown}On what population was the normative data gathered ;ie. prisoners, <br/>inpatients, college students.{:/} | STRING |  |  |  | 
| target_population | 14 | Target Population | {::nomarkdown}Which population is appropriate for measuring, ie vocational job seekers,<br/>combat veterans, etc{:/} | STRING |  |  |  | 
| entered_by | 15 | Entered By | {::nomarkdown}User who entered the information about the instrument.{:/} | STRING |  |  |  | 
| entry_date | 16 | Entry Date | {::nomarkdown}Date instrument was added to the system.{:/} | DATE-TIME |  |  |  | 
| last_edited_by | 17 | Last Edited By | {::nomarkdown}User who last edited this record.{:/} | STRING |  |  |  | 
| last_edit_date | 18 | Last Edit Date | {::nomarkdown}Date and time of last change to this record.{:/} | DATE-TIME |  | REQUIRED |  | 
| is_national_test | 19 | Is National Test | {::nomarkdown}Specifies if instrument supported and distributed by the MHSHG informatics<br/>section as opposed to those locally developed.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| license_current | 20 | License Current | {::nomarkdown}If set to N indicates there is no longer an agreement with the publisher<br/>to use this test.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| copyright_text | 21 | Copyright Text | {::nomarkdown}Text to display copyright information on the screen and printed report.{:/} | STRING |  |  |  | 
| requires_signature | 22 | Requires Signature | {::nomarkdown}Boolean if test requires signature before full release.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| is_legacy | 23 | Is Legacy | {::nomarkdown}Boolean to specify whether test was in the MH Instruments file (#601).{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| submit_to_national_db | 24 | Submit To National Db | {::nomarkdown}Boolean indicating to send results to the national MHSHG database. <br/>Set only by MHSHG.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| is_copyrighted | 25 | Is Copyrighted | {::nomarkdown}Boolean specifying whether the instrument is copyrighted.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| write_full_text | 26 | Write Full Text | {::nomarkdown}Boolean, if set to true, actual question text is shown on reports.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| days_to_restart | 27 | Days To Restart | {::nomarkdown}This field sets a limit on finishing a previously started instrument.<br/>Set to zero if re-start is not allowed. Set to minus 1 if instrument can<br/>be completed at any time.{:/} | NUMERIC |  |  |  | 
| generate_pnote | 28 | Generate Pnote | {::nomarkdown}Select No (or leave null) to stop MHA3 from generating a TIU note.<br/>Clinical Reminders do not read this flag. TIU notes are never generated<br/>for a test that has an R_Privilege set.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| tiu_title | 29 | TIU Title | {::nomarkdown}Title of the TIU note used to identify the progress note for this instrument. {:/} | POINTER |  |  | TIU_Document_Definition-8925_1 | 
| consult_note_title | 30 | Consult Note Title | {::nomarkdown}This is the Consult Note Title associated with this instrument.{:/} | POINTER |  |  | TIU_Document_Definition-8925_1 | 
| ys_mha_bdll_version | 100.01 | Ys_mha_b.dll Version | {::nomarkdown}Version number of YS_MHA_B.DLL from the Host File System (HFS).<br/>It is used to verify the software configuration on a user's workstation.<br/>It should only be edited by Mental Health software.{:/} | STRING |  |  |  | 
| ys_mha_bdll_date_time | 100.02 | Ys_mha_b.dll Date/time | {::nomarkdown}Modified date/time of YS_MHA_B.DLL from the Host File System (HFS).<br/>It is used to verify the software configuration on a user's workstation.  <br/>It should only be edited by Mental Health software.{:/} | DATE-TIME |  |  |  | 
| ys_mha_auxdll_version | 100.03 | Ys_mha_aux.dll Version | {::nomarkdown}Version number of YS_MHA_AUX.DLL from the Host File System (HFS).<br/>It is used to verify the software configuration on a user's workstation.  <br/>It should only be edited by Mental Health software.{:/} | STRING |  |  |  | 
| ys_mha_auxdll_date_time | 100.04 | Ys_mha_aux.dll Date/time | {::nomarkdown}Modified date/time of YYS_MHA_AUX.DLL from the Host File System (HFS).<br/>It is used to verify the software configuration on a user's workstation.  <br/>It should only be edited by Mental Health software.{:/} | DATE-TIME |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:36 am</p>{:/}