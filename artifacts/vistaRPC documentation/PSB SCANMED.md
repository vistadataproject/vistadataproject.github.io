---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB SCANMED 

 property | value 
--- | --- 
 label | PSB SCANMED
 tag | SCANMED
 routine | [PSBRPC2](http://code.osehra.org/dox/Routine_PSBRPC2_source.html)
 return value type | ARRAY
 description | Takes the scanned valued from the medication and does a lookup on file 50 for an exact match.  If more than one or less than one entry are found for the lookup an error is returned to the client.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SCANVAL | LITERAL | 30 | true | This is the data received from the client scanning the medication. | 
| PSBDIEN | LITERAL |  | true | Takes the scanned valued from the medication and does a lookup on file50 for an exact match.  If more than one or less than one entry arefound for the lookup an error is returned to the client. | 
| PSBTAB | LITERAL | 20 | true | This is the current tab the user is on. | 




Generated on January 11th 2017, 6:34:23 am