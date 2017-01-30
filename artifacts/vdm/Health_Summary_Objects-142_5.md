---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Health_Summary_Objects-142_5 

<dl>
<dt>id</dt><dd>Health_Summary_Objects-142_5</dd>
<dt>fmId</dt><dd>142.5</dd>
<dt>label</dt><dd>Health Summary Objects</dd>
<dt>location</dt><dd>^GMT(142.5,</dd>
<dt>description</dt><dd>}This file contains Health Summary Types that are to be embedded into another <br/>document as an object.  The bulk of this file is made up of display flags <br/>which control how the object is to be embedded into the other document.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the name of the Health Summary Object to be embedded in another <br/>document.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| object_label | .02 | Object Label | {::nomarkdown}This is a string of text, 3 to 79 characters in length, that will precede <br/>the object embedded in another document to identify the object that follows.{:/} | STRING |  |  |  | 
| health_summary_type | .03 | Health Summary Type | {::nomarkdown}This is a pointer to the Health Summary Type that will be imbedded as an <br/>object into another document.{:/} | POINTER |  | REQUIRED, INDEXED | Health_Summary_Type-142 | 
| report_period | .04 | Report Period | {::nomarkdown}This is a pointer to the Health Summary Type that will be imbedded as an <br/>object into another document.<br/>elements may be excluded depending on how exclusion fields in this file are <br/>set.{:/} | STRING |  |  |  | 
| suppress_components_w_o_data | .05 | Suppress Components W/o Data | {::nomarkdown}If this field is set to 1 (YES) and a Health Summary component does not have <br/>any data, the component will be suppressed.  If this field is not set to 1 <br/>(YES) and the component does not have any data, then the component will <br/>print with the statement \No data available\.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| suppress_header | .06 | Suppress Header | {::nomarkdown}When this field is set to 1 (YES), Health Summary headers will be suppressed<br/>when printing as an object embedded in another document.  Individual data <br/>elements may be excluded depending on how exclusion fields in this file are <br/>set.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| print_label | .07 | Print Label | {::nomarkdown}When this field is set to 1 (YES), the Health Summary Object Label will be<br/>printed prior to printing the object.  When it is set to 0 (NO) the Health <br/>Summary Object Label will be ignored.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| print_blank_line_after_label | .08 | Print Blank Line After Label | {::nomarkdown}If there is a Label for the object and the Label is to be printed, then a<br/>blank line may be printed after the object label if this field is set to<br/>1 (YES).{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| print_report_date_and_time | .09 | Print Report Date And Time | {::nomarkdown}When this field is set to 1 (YES), the Health Summary report date and time <br/>will be printed as part of a Health Summary object embedded in another <br/>document, even if the Health Summary headers are to be suppressed.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| print_confidentiality_banner | .1 | Print Confidentiality Banner | {::nomarkdown}When this field is set to 1 (YES), the Health Summary confidentiality banner <br/>will be printed as part of a Health Summary object embedded in another <br/>document, even if the Health Summary headers are to be suppressed.<br/>suppressed.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| print_report_header | .11 | Print Report Header | {::nomarkdown}When this field is set to 1 (YES), the Health Summary report header (and <br/>accompanying blank line) will be printed as part of a Health Summary object<br/>embedded in another document, even if the Health Summary headers are to be <br/>suppressed.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| print_component_header | .12 | Print Component Header | {::nomarkdown}When this field is set to 1 (YES), the Health Summary component headers will<br/>be printed as part of a Health Summary object embedded in another document, <br/>even if the Health Summary headers are to be suppressed.<br/>Summary headers are to be suppressed.  For this field to have any effect on <br/>the display, the field \PRINT COMPONENT HEADERS\ must also be set to 1<br/>(YES).{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| underline_component_header | .13 | Underline Component Header | {::nomarkdown}When this field is set to 1 (YES), the a Component Header will be underlined <br/>with a single dashed line.  For this field to have any effect on the display, <br/>the field \PRINT COMPONENT HEADERS\ must also be set to 1 (YES).  <br/><br/>PN - Progress Notes <br/>-------------------<br/><data> {:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| print_timeoccurrence_limits | .14 | Print Time-occurrence Limits | {::nomarkdown}When this field is set to 1 (YES), the Health Summary report time and <br/>occurrence limits will be printed with the Component Header as part of a <br/>Health Summary object embedded in another document, even if the Health <br/>Summary headers are to be suppressed.  For this field to have any effect on <br/>the display, the field \PRINT COMPONENT HEADERS\ must also be set to 1 (YES){:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| force_blank_line | .15 | Force Blank Line | {::nomarkdown}When this field is set to 1 (YES), a blank line will be printed after <br/>each Component Header as part of a Health Summary object embedded in another <br/>document, even if the Health Summary headers are to be suppressed.  For this <br/>field to have any effect on the display, the field \PRINT COMPONENT HEADERS\<br/>must also be set to 1 (YES).{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| print_deceased_information | .16 | Print Deceased Information | {::nomarkdown}The Health Summary has a conditional line of text that prints with each <br/>Health Summary Header for patients who are deceased.  This conditional line <br/>contains the word \DECEASED\ and the date and time the patient died.  When <br/>this field is set to 1 (YES), the conditional \Deceased\ line will be <br/>printed as part of a Health Summary object embedded in another document, <br/>even if the Health Summary headers are to be suppressed.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| creator | .17 | Creator | {::nomarkdown}The name of the individual who created the Health Summary object.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| date_created | .18 | Date Created | {::nomarkdown}This is the date the Object was created.{:/} | DATE-TIME |  |  |  | 
| date_last_modified | .19 | Date Last Modified | {::nomarkdown}This is the date that this object was last modified.{:/} | DATE-TIME |  |  |  | 
| national_object | .2 | National Object | {::nomarkdown}This field is a flag to indicate an object as being a nationally released <br/>object.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| object_description | 1 | Object Description |  | STRING |  |  |  | 
| overwrite_no_data | 2 | Overwrite No Data | {::nomarkdown}This field stores a site defined message. This message will replace the<br/>standard No Data Available message when running a TIU/HS Object.<br/>{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 30th 2017, 8:13:27 pm</p>{:/}