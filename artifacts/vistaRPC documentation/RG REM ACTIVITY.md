---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; RG REM ACTIVITY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}RG REM ACTIVITY{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [RGACTIV](http://code.osehra.org/dox/Routine_RGACTIV_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure call (RPC) returns Health Level Seven (HL7) message information and exception information for a patient.  The HL7 data is fromthe ADT/HL7 PIVOT (#391.71) file and exception date is from the CIRN HL7 EXCEPTION LOG (#991.1) file.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Integration Control Number (ICN) for patient on whom data is requested.{:/} | 
| {::nomarkdown}SSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Social Security Number (SSN) for patient on whom data is requested.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}