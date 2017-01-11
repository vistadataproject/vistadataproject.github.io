---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM GET GATEWAY INFO 

 property | value 
--- | --- 
 label | MAG DICOM GET GATEWAY INFO
 tag | GETINFO
 routine | [MAGDQR05](http://code.osehra.org/dox/Routine_MAGDQR05_source.html)
 return value type | ARRAY
 description | This Remote Procedure returns information about aDICOM Gateway.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| HOSTNAME | LITERAL | 30 | true | The value of this parameter is a string.This string must be the \hostname\ of the computer that isbeing used to operate the DICOM Gateway for which informationis to be returned. | 




Generated on January 11th 2017, 6:34:23 am