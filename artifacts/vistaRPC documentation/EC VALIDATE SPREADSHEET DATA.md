---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC VALIDATE SPREADSHEET DATA 

 property | value 
--- | --- 
 label | EC VALIDATE SPREADSHEET DATA
 tag | IN
 routine | [ECV1RPC](http://code.osehra.org/dox/Routine_ECV1RPC_source.html)
 return value type | ARRAY
 description | This RPC validates EC spreadsheet data and returns an array containing error messages

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ECDATA | LITERAL |  | true | This is a row of data in the spreadsheet | 