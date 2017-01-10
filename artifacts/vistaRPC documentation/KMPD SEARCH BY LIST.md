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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | LISTTYPE | LITERAL | 5 | true | 2 - client name3 - ip address | 
| vs:Input_Parameter-8994_02 | SUBSCRIPT | LITERAL | 30 | true | Subscript (free text)Ex: \ORWCV\ | 
| vs:Input_Parameter-8994_02 | DATAGLOBAL | LITERAL | 30 | true | Global containing data.Ex: ^TMP($J) | 