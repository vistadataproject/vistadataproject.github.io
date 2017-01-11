---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG UTIL GETNETLOC 

 property | value 
--- | --- 
 label | MAG UTIL GETNETLOC
 tag | SHARE
 routine | [MAGSDEL5](http://code.osehra.org/dox/Routine_MAGSDEL5_source.html)
 return value type | ARRAY
 description | Returns a list of entries in the NETWORK LOCATION file(#2005.2).The RPC will return each NETWORK LOCATION data along with its OPERATIONAL STATUS (offline/online), PHYSICAL REFERENCE, HASH SUBDIRECTORY,SITE, PLACE info ...etc.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TYPE | LITERAL | 32 |  | ALL or select storage type \MAG\ or \WORM\ | 




Generated on January 11th 2017, 6:34:23 am