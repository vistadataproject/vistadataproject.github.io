---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MDCP UPDATE MESSAGE REASON 

 property | value 
--- | --- 
 label | MDCP UPDATE MESSAGE REASON
 tag | UPDRSN
 routine | [MDCPHL7B](http://code.osehra.org/dox/Routine_MDCPHL7B_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC call will add word processing text to the CLIO_HL7_LOG file to explain the reason for the current status.  It is primarily intended to be used to store error text from CliO.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MDCPMSG | LITERAL | 250 | true | This is the IFN of the HL7 message in the CLIO_HL7_LOG file. | 
| MDCPTEXT | LITERAL | 250 | true | This is the text to add to the CLIO_HL7_LOG file.  Note that this text will completely overwrite the text that was already in the reason field. | 