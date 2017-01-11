---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM CON SET TELE READER 

 property | value 
--- | --- 
 label | MAG DICOM CON SET TELE READER
 tag | SETREAD
 routine | [MAGDTR06](http://code.osehra.org/dox/Routine_MAGDTR06_source.html)
 return value type | SINGLE VALUE
 description | This allows the user to select/deselect an item from his/her siteand specialty list.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SELECT | LITERAL |  | true | User selection preference - 1=select, 0=ignore | 
| IENPARAM | LITERAL |  | true | Pointer to User Parameter file 2006.5843 | 