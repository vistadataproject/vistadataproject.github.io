---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA2 ADDPDL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA2 ADDPDL{:/}
 tag | {::nomarkdown}ADDPDL{:/}
 routine | [ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Add a new Clinician's Personal DX List or add new ICD9 codes to an existing Clinician's Personal DX List. The Personal DX list is stored in the CPRS Diagnosis Provider file, file # 5000017{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Add to Personal Diagnosis List
 Leading comment lines | {::nomarkdown}Add a new personal diagnosis list or new ICD9 code to an existing<br/>personal diagnosis list for a clinician. It will filter out duplicate<br/>entries before updating an existing PDL.<br/>Input Variables:<br/>ORCIEN       Clinician Internal Entry Number<br/>ORDXA        Array of dx codes to be added to personal dx list<br/>format: ORDXA(#)=ICD9_Code^Lexicon_Expression_IEN<br/>Output Variable:<br/>Y            Return value, 1 successful, 0 unsuccessful<br/>Local Variables:<br/>DXI          Diagnosis Array Index<br/>DXIEN        Diagnosis Code Internal Entry Number<br/>EM           Error Message<br/>FDXR         Found Diagnoses Records Array<br/>FDXRI        Found Diagnoses Records Array Index<br/>IEN          Internal Entry Number<br/>PDL          Personal Diagnoses List Array<br/>PDLI         Personal Diagnoses List Array Index{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORCIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The clinician's internal ID number.{:/} | 
| {::nomarkdown}ORDXA{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The array variable of diagnosis codes to be added to the clinician's personal diagnoses list.{:/} | 




 Generated on January 13th 2017, 6:44:47 am