---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF VENDOR LOOK 

 property | value 
--- | --- 
 label | DSIF VENDOR LOOK
 tag | VENDOR
 routine | [DSIFENA4](http://code.osehra.org/dox/Routine_DSIFENA4_source.html)
 return value type | ARRAY
 description | Used to search for Fee Basis Vendors based on the input of last four numbers, searches Tax ID for all matches on error returns-1^error message 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TAXID | LITERAL | 4 | true | Pass in four numbers, these will be used to search for matches in the Tax ID number of the Fee Basis Vendor file | 




 ###### Generated on January 11th 2017, 6:39:43 am