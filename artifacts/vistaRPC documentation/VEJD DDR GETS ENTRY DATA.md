---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VEJD DDR GETS ENTRY DATA 

 property | value 
--- | --- 
 label | VEJD DDR GETS ENTRY DATA
 tag | GET
 routine | [VEJDDDR0](http://code.osehra.org/dox/Routine_VEJDDDR0_source.html)
 return value type | GLOBAL ARRAY
 description | 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | VEJDFILE | LITERAL |  | true | This is the number of the file in which you wish to search. | 
| vs:Input_Parameter-8994_02 | VEJDIENS | LITERAL |  | true | This is the IENS for the search.  See the instructions on constructing anIENS in the FileMan Programmer's Manual | 
| vs:Input_Parameter-8994_02 | VEJDFELD | LITERAL |  | true | This is an ^ (or \;\) delimited list of field numbers to return from theentry identified in VEJDIENS | 
| vs:Input_Parameter-8994_02 | VEJDFLAG | LITERAL |  | true | This is a string containing up to 3 characters that will modify howFileMan presents the results of this operation:        E: Return data in external format       I: Return data in internal format               Mutually exclusive.        N: Do NOT return null values (do NOT use this, Jay.  It will screwup how I put the entries in the return array for you).       R: Resolves field numbers to field names. | 