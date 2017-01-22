---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EC GETPATPROCS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}EC GETPATPROCS{:/}
 tag | {::nomarkdown}PATPROC{:/}
 routine | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns an array of patient entries from EVENT CAPTURE PATIENT FILE #721 that matches a location, DSS unit, patient DFN, start date and end date.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Input variable ECARY contains the following values separated by up-arrows:-  1.  ECLOC  - Location ien  2.  ECPAT  - Patient DFN ien  3.  ECUNT  - DSS unit ien  4.  ECSD   - Start Date  5.  ECED   - End Date{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}