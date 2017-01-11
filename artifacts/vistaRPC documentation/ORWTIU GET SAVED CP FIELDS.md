---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWTIU GET SAVED CP FIELDS 

 property | value 
--- | --- 
 label | ORWTIU GET SAVED CP FIELDS
 tag | GETCP
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | SINGLE VALUE
 description | Given a TIU document of the clinical procedures class, return the author, title, cosigner, procedure summary code, date/time of procedure, and reference date, as stored on the server.


### Method description

 property | value 
--- | --- 
 Method comment | Checks required CP fields before signature

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL | 32 | true | Pointer to file 8925 for the document. | 