---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST VA DRUG CLASSES 

 property | value 
--- | --- 
 label | ROR LIST VA DRUG CLASSES
 tag | VACLSLST
 routine | [RORRP017](http://code.osehra.org/dox/Routine_RORRP017_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR LIST VA DRUG CLASSES remote procedure returns a list of VA drug classes (defined in the VA DRUG CLASS file), which conform to the searchcriteria.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARENT | LITERAL |  |  | Reserved | 
| vs:Input_Parameter-8994_02 | PART | LITERAL | 30 |  | The partial match restriction. | 
| vs:Input_Parameter-8994_02 | FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   N  Search the classes by their names     (by default, the search is performed by codes) | 
| vs:Input_Parameter-8994_02 | NUMBER | LITERAL |  |  | Deprecatedparameter designates all entries. | 
| vs:Input_Parameter-8994_02 | FROM | LITERAL |  |  | Deprecated   ^01: FromName   ^02: FromIEN   For example, a FROM value of \XA\ would list entries following XA. You canuse the 2-nd and 3-rd \^\- pieces of the Results[0] to continue thelisting in the subsequent procedure calls.   NOTE: The FROM value itself is not included in the      resulting list.   See description of the LIST^DIC for more details about the PART, NUMBER and FROM parameters. | 