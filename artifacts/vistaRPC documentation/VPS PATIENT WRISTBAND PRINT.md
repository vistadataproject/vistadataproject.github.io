---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS PATIENT WRISTBAND PRINT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VPS PATIENT WRISTBAND PRINT{:/}
 tag | {::nomarkdown}PRINT{:/}
 routine | [VPSWRIST](http://code.osehra.org/dox/Routine_VPSWRIST_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC prints patient wristband to VistA printer using VistA standard patPatient Wristband Print routine (DGPWB).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VPSIO{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the device name where the wristband label to print on.{:/} | 
| {::nomarkdown}VPSTYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID Type. Valid Input parameter: DFN, SSN, ICN, VIC/CAC{:/} | 
| {::nomarkdown}VPSNUM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID. This could be DFN, SSN, ICN, VIC/CAC{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}