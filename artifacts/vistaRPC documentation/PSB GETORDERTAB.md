---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB GETORDERTAB 

 property | value 
--- | --- 
 label | {::nomarkdown}PSB GETORDERTAB{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [PSBVDLTB](http://code.osehra.org/dox/Routine_PSBVDLTB_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Gives the client VDL information for the specified patient and time frame.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The patient IEN from ^DPT.{:/} | 
| {::nomarkdown}VDL TAB{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The tab from the VDL that is being requested.{:/} | 
| {::nomarkdown}VDL DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The date of the requested data.  If not passed then current date/time areused.{:/} | 
| {::nomarkdown}PSBSIOPI{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown} This parameter is a true/false flag (1/0).  If true use the new SI/OP Wp fields and return data in the Results array to the GUI Client.   The field is not required, so a null will convert into a 0, for false, making this backwards compatible.{:/} | 
| {::nomarkdown}PSBCLINORD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is a True/False flag (1/0).  If true, then return onlyClinic Orders and not Inpatient Medication orders to BCMA, else if false, return only Inpatient Medication orders to BCMA. The field is not required, so a null will convert into a 0, for a default false value, making this backwards compatible.{:/} | 




 Generated on January 13th 2017, 6:15:57 am