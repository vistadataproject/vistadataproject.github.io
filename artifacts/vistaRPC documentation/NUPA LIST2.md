---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA LIST2 

 property | value 
--- | --- 
 label | NUPA LIST2
 tag | LIST2
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | GLOBAL ARRAY
 description | List of all entries from a file including other fields.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FILE | LITERAL |  | true | File number to list data from. | 
| vs:Input_Parameter-8994_02 | FILEDS | LITERAL |  | true | Other fields in format FILE^Field 1^Field 2 etc. | 
| vs:Input_Parameter-8994_02 | SCREEN | LITERAL |  | true | Fileman screen for the lookup. | 