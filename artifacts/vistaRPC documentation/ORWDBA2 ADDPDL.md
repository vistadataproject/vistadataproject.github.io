---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA2 ADDPDL 

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
 Leading comment lines | Add a new personal diagnosis list or new ICD9 code to an existing
personal diagnosis list for a clinician. It will filter out duplicate
entries before updating an existing PDL.
Input Variables:
ORCIEN       Clinician Internal Entry Number
ORDXA        Array of dx codes to be added to personal dx list
format: ORDXA(#)=ICD9_Code^Lexicon_Expression_IEN
Output Variable:
Y            Return value, 1 successful, 0 unsuccessful
Local Variables:
DXI          Diagnosis Array Index
DXIEN        Diagnosis Code Internal Entry Number
EM           Error Message
FDXR         Found Diagnoses Records Array
FDXRI        Found Diagnoses Records Array Index
IEN          Internal Entry Number
PDL          Personal Diagnoses List Array
PDLI         Personal Diagnoses List Array Index

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORCIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The clinician's internal ID number.{:/} | 
| {::nomarkdown}ORDXA{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The array variable of diagnosis codes to be added to the clinician's personal diagnoses list.{:/} | 




 Generated on January 13th 2017, 5:52:13 am