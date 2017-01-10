---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RMPR PFFS INS 

 property | value 
--- | --- 
 label | RMPR PFFS INS
 tag | EN
 routine | [RMPR9DM3](http://code.osehra.org/dox/Routine_RMPR9DM3_source.html)
 return value type | ARRAY
 description |          ;RESULTS passed to broker         ;delimited by \^\         ;piece 1 = INSURANCE COMPANY         ;piece 2 = SUB ID         ;piece 3 = GROUP         ;piece 4 = HOLDER         ;piece 5 = EXPIRATION DATE         ;piece 6 = EFFECTIVE DATE         ;piece 7 = COB

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 50 | true |  | 