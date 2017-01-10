---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MPIF REMOTE LOCAL ICN ASSIGN 

 property | value 
--- | --- 
 label | MPIF REMOTE LOCAL ICN ASSIGN
 tag | LOCALIA
 routine | [MPIFFULL](http://code.osehra.org/dox/Routine_MPIFFULL_source.html)
 return value type | ARRAY
 description | This RPC is to support assignment of local ICNs to the next X number of patients that don't have an ICN already and aren't a merged record (-9 node).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | HOWM | LITERAL | 32 | true | Number of patients to get a local ICN assigned | 