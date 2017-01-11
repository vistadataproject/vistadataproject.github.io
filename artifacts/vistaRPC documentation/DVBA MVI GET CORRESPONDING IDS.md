---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBA MVI GET CORRESPONDING IDS 

 property | value 
--- | --- 
 label | DVBA MVI GET CORRESPONDING IDS
 tag | GETIDS
 routine | [DVBAMVI2](http://code.osehra.org/dox/Routine_DVBAMVI2_source.html)
 return value type | ARRAY
 description | The remote procedure passes the Integration Control Number ID to the MVI GET CORRESPONDING IDS web service and returns the list of VAMC treatingfacilities for the selected identifier.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SOURCE ID | LITERAL | 250 | true | This is the Integration Control Number (ICN) used to identify the patientthat is selected from the MVI SEARCH PERSON web service results.Format:  \1008523099V750710^NI^200M^USVHA^\ | 




 Generated on January 11th 2017, 7:15:04 am