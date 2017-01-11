---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 FILTER GET LIST 

 property | value 
--- | --- 
 label | MAG4 FILTER GET LIST
 tag | GETLIST
 routine | [MAGGSFLT](http://code.osehra.org/dox/Routine_MAGGSFLT_source.html)
 return value type | ARRAY
 description | Returns a list of Image FiltersEither for a specific user (Private filters)or Public filters.Some Public filters are distributed with the installation.Public filters can also be created by the Imaging site manager.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| USER | LITERAL | 40 | true | This is DUZ, if \\ is sent, then the RPC retrieves the Public filters. | 




 ###### Generated on January 11th 2017, 6:39:43 am