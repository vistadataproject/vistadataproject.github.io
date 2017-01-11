---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VEJD DDR FINDER 

 property | value 
--- | --- 
 label | VEJD DDR FINDER
 tag | FIND
 routine | [VEJDDDR0](http://code.osehra.org/dox/Routine_VEJDDDR0_source.html)
 return value type | GLOBAL ARRAY
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VEJDFILE | LITERAL |  | true | This is the number of the file in which you wish to search. | 
| VEJDIENS | LITERAL |  | true | This is the IENS through which you wish to search for the value VEJDVAL.If you are searching the top level of a file, this should be null.  Seethe FileMan Programmers manual for instructions on constructing IENSstrings. | 
| VEJDFELD | LITERAL |  | true | This is an ^ (or \;\) delimited list of fields that you wish returned fromeach entry that matches the lookup conditions that you have specified. | 
| VEJDNUM | LITERAL |  | true | This is the maximum number of entries to be returned.  Defaults to allentries matching the lookup value (VEJDVAL). | 




 ###### Generated on January 11th 2017, 6:39:43 am