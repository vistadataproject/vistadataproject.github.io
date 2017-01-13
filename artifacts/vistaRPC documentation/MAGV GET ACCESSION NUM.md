---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV GET ACCESSION NUM 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGV GET ACCESSION NUM{:/}
 tag | {::nomarkdown}GETACCNO{:/}
 routine | [MAGVRS08](http://code.osehra.org/dox/Routine_MAGVRS08_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC returns an accession number given a patient reference internal entry number and procedure reference internal entry number.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATREFIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of the entry on the IMAGING PATIENT REFERENCE File (#2005.6) with which the procedure reference is associated.{:/} | 
| {::nomarkdown}PROCREFIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the procedure's internal entry number on the IMAGING PROCEDUREREFERENCE File (#2005.61).{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter should be used with EXTREME CAUTION.  If set TRUE(nonzero), will suppress the validation of the procedure reference IENagainst the patient reference IEN.{:/} | 




 Generated on January 13th 2017, 7:15:28 am