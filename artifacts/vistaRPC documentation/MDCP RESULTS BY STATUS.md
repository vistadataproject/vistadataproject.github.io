---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MDCP RESULTS BY STATUS 

 property | value 
--- | --- 
 label | MDCP RESULTS BY STATUS
 tag | GTMSGIDS
 routine | [MDCPHL7B](http://code.osehra.org/dox/Routine_MDCPHL7B_source.html)
 return value type | GLOBAL ARRAY
 description | This broker call will return a list of IENS from the CP RESULT REPORT file based on the STATUS passed in as a parameter.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MDCPSTAT | LITERAL | 1 | true | This is the EXTERNAL representation of the status to be used to generate the list of IENs. | 




 Generated on January 11th 2017, 7:15:04 am