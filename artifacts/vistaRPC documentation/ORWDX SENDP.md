---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX SENDP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX SENDP{:/}
 tag | {::nomarkdown}SENDP{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Same as ORWDX SEND, but allows print devices as parameter.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}orwdev{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} |  | {::nomarkdown}chart device^label device^requisition device^work copy device All are pointers to the DEVICE file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}