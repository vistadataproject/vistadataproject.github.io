---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB GETPRNS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB GETPRNS{:/}
 tag | {::nomarkdown}GETPRNS{:/}
 routine | [PSBPRN](http://code.osehra.org/dox/Routine_PSBPRN_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns all administrations of a PRN order that have NOT had the PRNEffectiveness documented in the current admission or within the hours defined in PRN documentation site parameter whichever is greater of the two.  When the PRN medication is administered a flag is set based on the given PRN Reason.  This flag will dictate whether BCMA will mandate aPAIN SCORE measurement with PRN documentation.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient IEN number.{:/} | 
| {::nomarkdown}PSBORD{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Order number from Inpatient Medications. If order number is passed then returns all PRN effectiveness not documented for that order. If order number is NOT passed, then returns all PRN effectiveness not documented for that patient.{:/} | 
| {::nomarkdown}PSBSIOPI{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is a true/false flag (1/0).  If true use the new SI/OP Wpfields and return data in the Results array to the GUI Client. The field is not required, so a null will convert into a 0, for false,making this backwards compatible.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}