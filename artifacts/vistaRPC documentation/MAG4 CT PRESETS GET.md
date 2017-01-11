---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 CT PRESETS GET 

 property | value 
--- | --- 
 label | MAG4 CT PRESETS GET
 tag | GETCTP
 routine | [MAGGTU6](http://code.osehra.org/dox/Routine_MAGGTU6_source.html)
 return value type | SINGLE VALUE
 description | Returns the site specific CT Presets

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 100 | true |  DATA is a set of Flags to determine which set of Site CT Presets to return. Client Versions before Patch 72 use Presets from the CT PRESETS Field Client Versions Patch 72 and later use Presets from the CT PRESETS 2 Field in the Imaging Site Parameters File. | 




Generated on January 11th 2017, 6:34:23 am