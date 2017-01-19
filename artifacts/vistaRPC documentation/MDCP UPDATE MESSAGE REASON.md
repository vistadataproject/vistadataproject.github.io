---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MDCP UPDATE MESSAGE REASON 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MDCP UPDATE MESSAGE REASON{:/}
 tag | {::nomarkdown}UPDRSN{:/}
 routine | [MDCPHL7B](http://code.osehra.org/dox/Routine_MDCPHL7B_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC call will add word processing text to the CLIO_HL7_LOG file to explain the reason for the current status.  It is primarily intended to be used to store error text from CliO.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MDCPMSG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the IFN of the HL7 message in the CLIO_HL7_LOG file.{:/} | 
| {::nomarkdown}MDCPTEXT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the text to add to the CLIO_HL7_LOG file.  Note that this text will completely overwrite the text that was already in the reason field.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}