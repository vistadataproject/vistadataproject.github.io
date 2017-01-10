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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGTYPE | LITERAL |  | true | Type (e.g. \SOP Class\) | 
| vs:Input_Parameter-8994_02 | MAGSUBT | LITERAL |  | true | Subtype (e.g. \Storage\) | 
| vs:Input_Parameter-8994_02 | MAGACT | LITERAL |  | true | Action Type (e.g. \Storage SCP\) | 