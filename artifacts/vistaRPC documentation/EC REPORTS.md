---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC REPORTS 

 property | value 
--- | --- 
 label | EC REPORTS
 tag | RPTEN
 routine | [ECRRPC](http://code.osehra.org/dox/Routine_ECRRPC_source.html)
 return value type | GLOBAL ARRAY
 description | This call is used by all Event Capture GUI reports.  Produces report based onoption selected from the Delphi application.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ECARY | LIST |  | true | The input array ECARY will be defined based on the report to be generated. Thereport handle or type must be defined.  It is also necessary to specify whether the report will be printed to a device or displayed. The following is an exampleof the variables defined for 'Patient Summary Report'.      ECARY(\ECDFN\)=170      ECARY(\ECED\)=3010430      ECARY(\ECHNDL\)=\ECPAT\      ECARY(\ECPTYP\)=\D\      ECARY(\ECRY\)=Y      ECARY(\ECSD\)=3010401 | 




 ###### Generated on January 11th 2017, 6:39:42 am