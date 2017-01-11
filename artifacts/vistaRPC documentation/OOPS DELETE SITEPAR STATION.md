---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS DELETE SITEPAR STATION 

 property | value 
--- | --- 
 label | OOPS DELETE SITEPAR STATION
 tag | SITEPKIL
 routine | [OOPSGUI6](http://code.osehra.org/dox/Routine_OOPSGUI6_source.html)
 return value type | SINGLE VALUE
 description | This broker call deletes the Station Subfile for the IEN passed into it.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LITERAL | 256 | true | This parameter contains the Site Parameter IEN, the subfile number, and theIEN of the Station Subfile being deleted. | 