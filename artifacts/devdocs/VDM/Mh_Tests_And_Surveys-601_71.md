---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Mh_Tests_And_Surveys-601_71<br/>
<a name="top"></a>
# Mh Tests And Surveys (601.71)
This file defines the interviews, surveys and tests available in the  Mental Health Assistant. Attributes of the instruments include authoring  credits, target populations, normative samples and copyright information.  Actions available including privileging, reporting of full item content  and transmission to the Mental Health National Database are also specified.    Direct entry via FileMan is prohibited.

**Global:** ^YTT(601.71,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | Name of the interview, survey or test. Often its abbreviation is used here, e.g. "BDI2"<br/>instead of "Beck Depression Inventory-2".  Each entry has a unique name. | STRING | REQUIRED | 
**Print Title**{::nomarkdown}<pre><code>  print_title</code></pre>{:/} | 2 | This is the full formal name of the interview, survey or test.<br/>It is used on printed reports. | STRING |  | 
**Version**{::nomarkdown}<pre><code>  version</code></pre>{:/} | 3 | Test publishers often give a version number to a published test. This <br/>field does not imply VA software versioning. | STRING |  | 
**Author**{::nomarkdown}<pre><code>  author</code></pre>{:/} | 4 | This field indicates the author of the interview, survey or test.  It is <br/>meant to credit the test author and not the software author or the person <br/>who entered this description. Aaron Beck is the Author of the BDI. | STRING |  | 
**Publisher**{::nomarkdown}<pre><code>  publisher</code></pre>{:/} | 5 | This is the name of the publisher of the test. Psychological Corporation <br/>is the publisher of the WAIS-R. | STRING |  | 
**Publication Date**{::nomarkdown}<pre><code>  publication_date</code></pre>{:/} | 7 | Date of formal publication; often the copyright date | DATE-TIME |  | 
**Reference**{::nomarkdown}<pre><code>  reference</code></pre>{:/} | 7.5 | This is the primary journal citation for the test. | STRING |  | 
**A Privilege**{::nomarkdown}<pre><code>  a_privilege</code></pre>{:/} | 8 | If not null, only those users holding the specified key can administer the<br/>instrument. | POINTER |  | Security_Key-19_1
**R Privilege**{::nomarkdown}<pre><code>  r_privilege</code></pre>{:/} | 9 | A key name from the SECURITY KEY file (#19.1). <br/>Only those users holding the specified key can produce a report of the instrument. | STRING |  | 
**Operational**{::nomarkdown}<pre><code>  operational</code></pre>{:/} | 10 | This field allows an instrument to be "taken out of service". If set to <br/>'N' this instrument can no longer be administered and will not show on <br/>selection lists. Reports of old administrations remain available. If set <br/>to U instrument will be tagged Under Development. | ENUMERATION |  | {::nomarkdown}Under Development: <em><strong>U</strong></em><br/>Dropped: <em><strong>D</strong></em><br/>Yes: <em><strong>Y</strong></em><br/>Clinical Reminder: <em><strong>C</strong></em><br/>No: <em><strong>N</strong></em>{:/}
**Has Been Operational**{::nomarkdown}<pre><code>  has_been_operational</code></pre>{:/} | 10.5 | Used to define editing privileges, this field is set to yes when test is <br/>first used to collect patient data. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Requires License**{::nomarkdown}<pre><code>  requires_license</code></pre>{:/} | 11 | This indicates whether a copyright holder must grant the rights to use<br/>this Mental Health instrument. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Purpose**{::nomarkdown}<pre><code>  purpose</code></pre>{:/} | 12 | Description of what the test measures. | STRING |  | 
**Norm Sample**{::nomarkdown}<pre><code>  norm_sample</code></pre>{:/} | 13 | On what population was the normative data gathered ;ie. prisoners, <br/>inpatients, college students. | STRING |  | 
**Target Population**{::nomarkdown}<pre><code>  target_population</code></pre>{:/} | 14 | Which population is appropriate for measuring, ie vocational job seekers,<br/>combat veterans, etc | STRING |  | 
**Entered By**{::nomarkdown}<pre><code>  entered_by</code></pre>{:/} | 15 | User who entered the information about the instrument. | STRING |  | 
**Entry Date**{::nomarkdown}<pre><code>  entry_date</code></pre>{:/} | 16 | Date instrument was added to the system. | DATE-TIME |  | 
**Last Edited By**{::nomarkdown}<pre><code>  last_edited_by</code></pre>{:/} | 17 | User who last edited this record. | STRING |  | 
**Last Edit Date**{::nomarkdown}<pre><code>  last_edit_date</code></pre>{:/} | 18 | Date and time of last change to this record. | DATE-TIME | REQUIRED | 
**Is National Test**{::nomarkdown}<pre><code>  is_national_test</code></pre>{:/} | 19 | Specifies if instrument supported and distributed by the MHSHG informatics<br/>section as opposed to those locally developed. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**License Current**{::nomarkdown}<pre><code>  license_current</code></pre>{:/} | 20 | If set to N indicates there is no longer an agreement with the publisher<br/>to use this test. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Copyright Text**{::nomarkdown}<pre><code>  copyright_text</code></pre>{:/} | 21 | Text to display copyright information on the screen and printed report. | STRING |  | 
**Requires Signature**{::nomarkdown}<pre><code>  requires_signature</code></pre>{:/} | 22 | Boolean if test requires signature before full release. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Is Legacy**{::nomarkdown}<pre><code>  is_legacy</code></pre>{:/} | 23 | Boolean to specify whether test was in the MH Instruments file (#601). | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Submit To National Db**{::nomarkdown}<pre><code>  submit_to_national_db</code></pre>{:/} | 24 | Boolean indicating to send results to the national MHSHG database. <br/>Set only by MHSHG. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Is Copyrighted**{::nomarkdown}<pre><code>  is_copyrighted</code></pre>{:/} | 25 | Boolean specifying whether the instrument is copyrighted. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Write Full Text**{::nomarkdown}<pre><code>  write_full_text</code></pre>{:/} | 26 | Boolean, if set to true, actual question text is shown on reports. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Days To Restart**{::nomarkdown}<pre><code>  days_to_restart</code></pre>{:/} | 27 | This field sets a limit on finishing a previously started instrument.<br/>Set to zero if re-start is not allowed. Set to minus 1 if instrument can<br/>be completed at any time. | NUMERIC |  | 
**Generate Pnote**{::nomarkdown}<pre><code>  generate_pnote</code></pre>{:/} | 28 | Select No (or leave null) to stop MHA3 from generating a TIU note.<br/>Clinical Reminders do not read this flag. TIU notes are never generated<br/>for a test that has an R_Privilege set. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**TIU Title**{::nomarkdown}<pre><code>  tiu_title</code></pre>{:/} | 29 | Title of the TIU note used to identify the progress note for this instrument.  | POINTER |  | [Tiu_Document_Definition-8925_1](Tiu_Document_Definition-8925_1)
**Consult Note Title**{::nomarkdown}<pre><code>  consult_note_title</code></pre>{:/} | 30 | This is the Consult Note Title associated with this instrument. | POINTER |  | [Tiu_Document_Definition-8925_1](Tiu_Document_Definition-8925_1)
**Ys_mha_b.dll Version**{::nomarkdown}<pre><code>  ys_mha_bdll_version</code></pre>{:/} | 100.01 | Version number of YS_MHA_B.DLL from the Host File System (HFS).<br/>It is used to verify the software configuration on a user's workstation.<br/>It should only be edited by Mental Health software. | STRING |  | 
**Ys_mha_b.dll Date/time**{::nomarkdown}<pre><code>  ys_mha_bdll_date_time</code></pre>{:/} | 100.02 | Modified date/time of YS_MHA_B.DLL from the Host File System (HFS).<br/>It is used to verify the software configuration on a user's workstation.  <br/>It should only be edited by Mental Health software. | DATE-TIME |  | 
**Ys_mha_aux.dll Version**{::nomarkdown}<pre><code>  ys_mha_auxdll_version</code></pre>{:/} | 100.03 | Version number of YS_MHA_AUX.DLL from the Host File System (HFS).<br/>It is used to verify the software configuration on a user's workstation.  <br/>It should only be edited by Mental Health software. | STRING |  | 
**Ys_mha_aux.dll Date/time**{::nomarkdown}<pre><code>  ys_mha_auxdll_date_time</code></pre>{:/} | 100.04 | Modified date/time of YYS_MHA_AUX.DLL from the Host File System (HFS).<br/>It is used to verify the software configuration on a user's workstation.  <br/>It should only be edited by Mental Health software. | DATE-TIME |  | 

[&uarr; Return to top](#top)<br/>



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}