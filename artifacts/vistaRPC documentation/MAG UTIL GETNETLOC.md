---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG UTIL GETNETLOC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG UTIL GETNETLOC{:/}
 tag | {::nomarkdown}SHARE{:/}
 routine | [MAGSDEL5](http://code.osehra.org/dox/Routine_MAGSDEL5_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of entries in the NETWORK LOCATION file(#2005.2).The RPC will return each NETWORK LOCATION data along with its OPERATIONAL STATUS (offline/online), PHYSICAL REFERENCE, HASH SUBDIRECTORY,SITE, PLACE info ...etc.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} |  | {::nomarkdown}ALL or select storage type \MAG\ or \WORM\{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}