---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC VA DEFAULT SITE 

 property | value 
--- | --- 
 label | DSIC VA DEFAULT SITE
 tag | SITE
 routine | [DSICVA](http://code.osehra.org/dox/Routine_DSICVA_source.html)
 return value type | SINGLE VALUE
 description | This will return the name and station number for a medical center division.  Optional input parameters are allowed.  However, if not passed then return the data for the primary division (or institution) as of TODAY.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DIV | LITERAL | 6 | true | This is a pointer to the medical center division file (#40.8).  If it is not passed then return data for the primary division as of that date. | 
| DATE | LITERAL | 7 | true | This optional Fileman date only will be used to return division data of of that date.  Default value if not passed is TODAY. | 




 ###### Generated on January 11th 2017, 6:39:43 am