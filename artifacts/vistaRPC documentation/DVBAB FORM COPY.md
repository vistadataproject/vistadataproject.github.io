---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB FORM COPY 

 property | value 
--- | --- 
 label | DVBAB FORM COPY
 tag | COPY
 routine | [DVBABFRM](http://code.osehra.org/dox/Routine_DVBABFRM_source.html)
 return value type | SINGLE VALUE
 description |  Copies a CAPRI form in file 396.17 to a new entry.  Clears key field so the form becomes editable as a new draft document. DVBAB1 = IEN in 396.17 to copyDVBAB2 = IEN in patient file If DVBAB2 is null, the copied form will be filed under the same patient it previously belonged to. If DVBAB2 has a value, it'll be copied to the new patient.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DVBAB1 | LITERAL |  | true |  | 
| DVBAB2 | LITERAL |  | true |  | 