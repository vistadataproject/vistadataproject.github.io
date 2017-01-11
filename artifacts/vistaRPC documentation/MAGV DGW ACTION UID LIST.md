---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV DGW ACTION UID LIST 

 property | value 
--- | --- 
 label | MAGV DGW ACTION UID LIST
 tag | ACTUIDS
 routine | [MAGVDGWP](http://code.osehra.org/dox/Routine_MAGVDGWP_source.html)
 return value type | ARRAY
 description | Return list of UIDfrom DICOM UID SPECIFIC ACTION file (#2006.539)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGTYPE | LITERAL |  | true | Type (e.g. \SOP Class\) | 
| MAGSUBT | LITERAL |  | true | Subtype (e.g. \Storage\) | 
| MAGACT | LITERAL |  | true | Action Type (e.g. \Storage SCP\) | 




 Generated on January 11th 2017, 7:15:04 am