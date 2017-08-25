---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Icd_Coding_Systems-80_4<br/>
<a name="top"></a>
# Icd Coding Systems (80.4)
This file contains a listing of ICD coding systems stored in file 80 and 80.1.  The Internal Entry Numbers (IENs) in this file are identical to those found in the Lexicon's CODING  SYSTEM file 757.03.   This table file should NOT be edited in anyway by the site.

**Global:** ^ICDS(

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Icd Coding System**{::nomarkdown}<pre><code>  icd_coding_system</code></pre>{:/} | .001 | This is a numeric representation of a ICD Coding System. | IEN |  | 
**Icd Coding System Nomenclature**{::nomarkdown}<pre><code>  icd_coding_system_nomenclature</code></pre>{:/} | .01 | This is the ICD Coding system, to include the ICD designator,<br/>the version number and an identifier for the type if ICD <br/>coding system (diagnosis or procedure).  Examples: ICD-9-CM,<br/>ICD-10-CM, ICD-10-PCS, etc.   | STRING | INDEXED<br/>REQUIRED | 
**Coding System Abbreviation**{::nomarkdown}<pre><code>  coding_system_abbreviation</code></pre>{:/} | .02 | This is a unique 3 character identifier for the <br/>coding system.   | STRING | INDEXED | 
**Icd File**{::nomarkdown}<pre><code>  icd_file</code></pre>{:/} | .03 | This is the file number were the ICD CODING SYSTEM is stored. | POINTER | INDEXED | [File-1](File-1)
**Implementation Date**{::nomarkdown}<pre><code>  implementation_date</code></pre>{:/} | .04 | This is the date the ICD CODING SYSTEM was implemented<br/>in the VA.   | DATE-TIME |  | 

[&uarr; Return to top](#top)<br/>



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}