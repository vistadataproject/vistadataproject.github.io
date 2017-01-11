---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU FIELD EXPORT 

 property | value 
--- | --- 
 label | TIU FIELD EXPORT
 tag | EXPORT
 routine | [TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
 return value type | ARRAY
 description | Exports Template Fields in XML format


### Method description

 property | value 
--- | --- 
 Method comment | Exports Template Fields as XML
 Leading comment lines | FLDS should be an array of Template Field names, not IENs

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FLDS | LIST |  |  | List of template field names to export. | 