---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC DPT TEST PATIENT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC DPT TEST PATIENT{:/}
 tag | {::nomarkdown}TEST{:/}
 routine | [DSICDPT](http://code.osehra.org/dox/Routine_DSICDPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will return a Boolean value indicating whether or not the patient record is a test patient or a real patient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is any lookup value for a patient (name, SSN, DFN, etc.){:/} | 
| {::nomarkdown}ISSSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a Boolean flag.  If 1, then the PAT lookup value is the patient's SSN.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}