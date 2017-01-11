---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 CT PRESETS SAVE 

 property | value 
--- | --- 
 label | MAG4 CT PRESETS SAVE
 tag | SAVECTP
 routine | [MAGGTU6](http://code.osehra.org/dox/Routine_MAGGTU6_source.html)
 return value type | SINGLE VALUE
 description |  Saves the CT Presets from the Radiology Viewer in Clinical Display  as site Specific Presets.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VALUE | LITERAL | 245 | true | This is the string of CT Presets.  | 
| DATA | LITERAL | 245 | true |  DATA is a set of Flags that determine where the CT Presets will be saved. Either as CT PRESETS  or CT PRESETS 2 for Client versions 72 and later | 




Generated on January 11th 2017, 6:34:23 am