---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG IMAGE STATISTICS BY USER 

 property | value 
--- | --- 
 label | MAGG IMAGE STATISTICS BY USER
 tag | GETUSRPT
 routine | [MAGGA03Q](http://code.osehra.org/dox/Routine_MAGGA03Q_source.html)
 return value type | GLOBAL ARRAY
 description | Return all statistics reports previously tasked for a user

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGDUZ | LITERAL |  |  | Internal ID of a user that has previously queued an Image Statistics Report.The default value is the current user DUZ. | 