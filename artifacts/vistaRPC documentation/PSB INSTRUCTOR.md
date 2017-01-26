---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB INSTRUCTOR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB INSTRUCTOR{:/}
 tag | {::nomarkdown}INST{:/}
 routine | [PSBRPC](http://code.osehra.org/dox/Routine_PSBRPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Used by frmInstructor to validate that an instructor is at the client with a student.  Validation is acheived via the instructor entering their SSN and electronic signature code.  This is then validated against the NEW PERSON file (#200).  If a valid user is obtained, that user must posses the PSB INSTRUCTOR key to be passed back as an eligible instructor for the student.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSBACC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Access Code edtSSN component on frmInstructor.{:/} | 
| {::nomarkdown}PSBVER{:/} |  |  | {::nomarkdown}true{:/} | {::nomarkdown}Verify Codeinstructor into the edtESIG component on frmInstructor.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}