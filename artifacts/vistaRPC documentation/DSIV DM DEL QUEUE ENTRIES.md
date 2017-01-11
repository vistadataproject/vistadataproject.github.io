---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV DM DEL QUEUE ENTRIES 

 property | value 
--- | --- 
 label | DSIV DM DEL QUEUE ENTRIES
 tag | DEL
 routine | [DSIVDM](http://code.osehra.org/dox/Routine_DSIVDM_source.html)
 return value type | SINGLE VALUE
 description | This will allow for the deletion of one or more records from file 19621.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIVL | LIST | 80 | true | This is a list of records to be deleted from file 19621.  The value of each array element can be either the Transaction ID name or the IEN.    DSIVL(sub) = value | 




 ###### Generated on January 11th 2017, 6:39:43 am