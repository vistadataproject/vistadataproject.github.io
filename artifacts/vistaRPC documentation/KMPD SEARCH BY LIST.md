---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD SEARCH BY LIST 

 property | value 
--- | --- 
 label | KMPD SEARCH BY LIST
 tag | SBLIST
 routine | [KMPDU7](http://code.osehra.org/dox/Routine_KMPDU7_source.html)
 return value type | GLOBAL ARRAY
 description | Search By list.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LISTTYPE | LITERAL | 5 | true | 2 - client name3 - ip address | 
| SUBSCRIPT | LITERAL | 30 | true | Subscript (free text)Ex: \ORWCV\ | 
| DATAGLOBAL | LITERAL | 30 | true | Global containing data.Ex: ^TMP($J) | 