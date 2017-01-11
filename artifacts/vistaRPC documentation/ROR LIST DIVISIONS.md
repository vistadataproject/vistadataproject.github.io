---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST DIVISIONS 

 property | value 
--- | --- 
 label | ROR LIST DIVISIONS
 tag | DIVLIST
 routine | [RORRP015](http://code.osehra.org/dox/Routine_RORRP015_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR LIST DIVISIONS remote procedure returns a list of divisions defined in the MEDICAL CENTER DIVISION file (#40.8).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PART | LITERAL | 30 |  | The partial match restriction. | 
| FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   B  Backwards. Traverses the index in the opposite     direction of normal traversal. | 
| NUMBER | LITERAL |  |  | Maximum number of entries to return. A value of \*\ or no value in this parameter designates all entries. | 
| FROM | LITERAL |  |  | The index entry(s) from which to begin the list  ^01: FromName  ^02: FromIEN For example, a FROM value of \VA\ would list entries following VA. You canuse the 2-nd and 3-rd \^\- pieces of the @RESULTS@(0) node to continue thelisting in the subsequent procedure calls. NOTE: The FROM value itself is not included in the      resulting list. See description of the LIST^DIC for more details about the PART, NUMBERand FROM parameters. | 




Generated on January 11th 2017, 6:34:23 am