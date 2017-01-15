---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MDCP MESSAGE BY IEN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MDCP MESSAGE BY IEN{:/}
 tag | {::nomarkdown}GETMSG{:/}
 routine | [MDCPHL7B](http://code.osehra.org/dox/Routine_MDCPHL7B_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns an HL7 message based on its IEN.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MDCPMSG{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the ien of the message in file 772.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}