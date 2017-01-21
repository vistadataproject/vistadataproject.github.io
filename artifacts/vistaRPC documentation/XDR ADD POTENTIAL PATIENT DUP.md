---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XDR ADD POTENTIAL PATIENT DUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XDR ADD POTENTIAL PATIENT DUP{:/}
 tag | {::nomarkdown}ADD{:/}
 routine | [XDRDADDS](http://code.osehra.org/dox/Routine_XDRDADDS_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Add a record to the VistA DUPLICATE RECORD file (#15), or find an existingrecord for the pair of potential duplicates passed to the RPC. This waswritten to allow MPI to add potential duplicate patients to the file, whenpotential duplicates are detected by the Person Service IdentityManagement (PSIM) probabilistic search.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE NUMBER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}File number for the file to which the potential duplicate records belong. For example, if the two potential duplicate entries are on the PATIENT file, this value is set to 2.{:/} | 
| {::nomarkdown}TO_IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number (IEN) of one of the potential duplicate records. For example, this could be a DFN from the PATIENT file (file #2).{:/} | 
| {::nomarkdown}FROM_IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number (IEN) of one of the potential duplicate records. For example, this could be a DFN from the PATIENT file (file #2).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}