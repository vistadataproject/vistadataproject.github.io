---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC DPT GET ID 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC DPT GET ID{:/}
 tag | {::nomarkdown}ID{:/}
 routine | [DSICDPT](http://code.osehra.org/dox/Routine_DSICDPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This returns the patient's identifier based upon their eligibility code.  For the VA, this will be the SSN (dashed) ^ last 4 of SSN.  For non-VA systems this will be that systems ID.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient's name, IFN, or any other acceptable lookup value.{:/} | 
| {::nomarkdown}ISSSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a Boolean flag (1 or 0).  If 1 then the lookup value in the PAT input parameter is the patient's SSN.{:/} | 
| {::nomarkdown}VAPTYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a pointer value to the Eligibility file (#8).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:14 am</p>{:/}