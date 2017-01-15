---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EC REPORTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}EC REPORTS{:/}
 tag | {::nomarkdown}RPTEN{:/}
 routine | [ECRRPC](http://code.osehra.org/dox/Routine_ECRRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call is used by all Event Capture GUI reports.  Produces report based onoption selected from the Delphi application.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The input array ECARY will be defined based on the report to be generated. Thereport handle or type must be defined.  It is also necessary to specify whether the report will be printed to a device or displayed. The following is an exampleof the variables defined for 'Patient Summary Report'.      ECARY(\ECDFN\)=170      ECARY(\ECED\)=3010430      ECARY(\ECHNDL\)=\ECPAT\      ECARY(\ECPTYP\)=\D\      ECARY(\ECRY\)=Y      ECARY(\ECSD\)=3010401{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}