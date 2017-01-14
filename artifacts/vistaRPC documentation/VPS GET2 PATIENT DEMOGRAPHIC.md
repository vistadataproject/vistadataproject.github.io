---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; VPS GET2 PATIENT DEMOGRAPHIC 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VPS GET2 PATIENT DEMOGRAPHIC{:/}
 tag | {::nomarkdown}GETDATA2{:/}
 routine | [VPSRPC1](http://code.osehra.org/dox/Routine_VPSRPC1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Called by the Vetlink Kiosk system. The RPC will accept two input parameters which are the patient SSN or DFN and the patient type. The RPC returns the patient demographics,insurance, and up-coming appointments.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VPSNUM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient Social Security Number or Patient IEN.{:/} | 
| {::nomarkdown}VPSTYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}SSN or DFN{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}