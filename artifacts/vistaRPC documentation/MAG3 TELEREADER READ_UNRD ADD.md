---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG3 TELEREADER READ_UNRD ADD 

 property | value 
--- | --- 
 label | MAG3 TELEREADER READ_UNRD ADD
 tag | FILE
 routine | [MAGNGMR](http://code.osehra.org/dox/Routine_MAGNGMR_source.html)
 return value type | SINGLE VALUE
 description | Add a consult and image pointers toUnread/Read List file (#2006.5849)and DICOM GMRC TEMP LIST file (#2006.5839)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGDA | LITERAL |  |  | An image IEN in IMAGE file (#2005) - ^MAG(2005,MAGDA) | 
| MAGCNT | LITERAL |  | true | Count of new images captured | 
| MAGRIEN | LITERAL |  | true | a request/consult IEN in REQUEST/CONSULTATION file (#123) | 




Generated on January 11th 2017, 6:34:23 am