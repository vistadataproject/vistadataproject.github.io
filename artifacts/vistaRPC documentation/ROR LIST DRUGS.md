---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST DRUGS 

 property | value 
--- | --- 
 label | ROR LIST DRUGS
 tag | DRUGLIST
 routine | [RORRP017](http://code.osehra.org/dox/Routine_RORRP017_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR LIST DRUGS remote procedure returns a list of drugs (defined inthe DRUG file), which conform the criteria.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PART | LITERAL | 30 |  | The partial match restriction. | 
| FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   B  Backwards. Traverses the index in the opposite     direction of normal traversal   G  Retrive generic drugs (from file #50.6).     Otherwise, list of dispensed drugs (from     file #50) is retrived. | 
| NUMBER | LITERAL |  |  | Deprecated.parameter designates all entries. | 
| FROM | LITERAL |  |  | Deprecated.   ^01: FromName   ^02: FromIEN   For example, a FROM value of \XA\ would list entries following XA. You canuse the 2-nd and 3-rd \^\- pieces of the Results[0] to continue thelisting in the subsequent procedure calls.   NOTE: The FROM value itself is not included in the      resulting list.   See description of the LIST^DIC for more details about the PART, NUMBER and FROM parameters. | 




 Generated on January 11th 2017, 7:15:04 am