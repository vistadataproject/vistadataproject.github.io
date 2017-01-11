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


### Method description

 property | value 
--- | --- 
 Method comment | Get TIU Documents for a given Consult or
 Leading comment lines | Surgical Case

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| OVP | LITERAL |  | true | This is the variable pointer (e.g., \12745;GMR(123,\ or \14672;SRF(\) thatidentifies the record in the requesting application. | 




 Generated on January 11th 2017, 7:15:04 am