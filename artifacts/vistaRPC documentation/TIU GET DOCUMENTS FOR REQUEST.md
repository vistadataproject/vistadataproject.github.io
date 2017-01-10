---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET DOCUMENTS FOR REQUEST 

 property | value 
--- | --- 
 label | TIU GET DOCUMENTS FOR REQUEST
 tag | GETDOCS
 routine | [TIUSRVLR](http://code.osehra.org/dox/Routine_TIUSRVLR_source.html)
 return value type | GLOBAL ARRAY
 description | This Remote Procedure returns the list of documents associated with agiven Request (e.g., Consult Request, or Surgical Case).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | OVP | LITERAL |  | true | This is the variable pointer (e.g., \12745;GMR(123,\ or \14672;SRF(\) thatidentifies the record in the requesting application. | 