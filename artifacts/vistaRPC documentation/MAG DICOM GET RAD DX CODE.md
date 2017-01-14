---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; MAG DICOM GET RAD DX CODE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM GET RAD DX CODE{:/}
 tag | {::nomarkdown}DXCODE{:/}
 routine | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC is used to lookup an entry in file DIAGNOSTIC CODES (78.3).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DXCODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the diagnostic name to be used in the lookup process.{:/} | 




 Generated on January 14th 2017, 7:26:36 am