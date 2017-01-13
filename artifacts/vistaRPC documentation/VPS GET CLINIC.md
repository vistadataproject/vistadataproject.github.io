---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS GET CLINIC 

 property | value 
--- | --- 
 label | {::nomarkdown}VPS GET CLINIC{:/}
 tag | {::nomarkdown}GETCLN{:/}
 routine | [VPSRPC1](http://code.osehra.org/dox/Routine_VPSRPC1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Called by the Vetlink Kiosk system.  The RPC will accept a single inputvalue representing the name of the clinic (full or partial name); and theoutput produced will be an array that returns all the possible matches forthe clinic (one to many clinics).  Values returned will be the name of theclinic and the ien of the clinic.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLINICNAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}70{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The input would represent a full or partial name of a given clinic.{:/} | 




 Generated on January 13th 2017, 6:44:48 am