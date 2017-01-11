---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV DDR DELETE ENTRY 

 property | value 
--- | --- 
 label | DSIV DDR DELETE ENTRY
 tag | KILL
 routine | [DSIVDDR0](http://code.osehra.org/dox/Routine_DSIVDDR0_source.html)
 return value type | ARRAY
 description | This will delete a record from a file or subfile.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE | LITERAL | 20 | true | This is the number of the file or subfile of the record to be deleted | 
| IENS | LITERAL | 50 | true | This is the Fileman IENS input parameter.  Its value must be applicable to the file or subfile for which a record is being deleted. | 




 ###### Generated on January 11th 2017, 6:39:43 am