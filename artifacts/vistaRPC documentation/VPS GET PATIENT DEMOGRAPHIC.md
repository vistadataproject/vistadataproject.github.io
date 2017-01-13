---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS GET PATIENT DEMOGRAPHIC 

 property | value 
--- | --- 
 label | {::nomarkdown}VPS GET PATIENT DEMOGRAPHIC{:/}
 tag | {::nomarkdown}GETDATA{:/}
 routine | [VPSRPC1](http://code.osehra.org/dox/Routine_VPSRPC1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Called by the Vetlink Kiosk system.  The RPC will accept a single inputvalue whic is the patient SSN.  The RPC returns the patient demographics,insurance, and up-coming appointments.returns the patient demographics, insurance, and up-coming appointments.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Social Security Number{:/} | 




 Generated on January 13th 2017, 6:24:32 am