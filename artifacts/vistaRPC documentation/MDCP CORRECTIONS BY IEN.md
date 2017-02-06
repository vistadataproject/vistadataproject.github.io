---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MDCP CORRECTIONS BY IEN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MDCP CORRECTIONS BY IEN{:/}
 tag | {::nomarkdown}GETCORR{:/}
 routine | [MDCPHL7B](http://code.osehra.org/dox/Routine_MDCPHL7B_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Gets a list of corrections for a given HL7 message.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MDCPMSG{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The IEN of the message in file 703.1 (the CP REPORT RESULTS file).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:05 am</p>{:/}