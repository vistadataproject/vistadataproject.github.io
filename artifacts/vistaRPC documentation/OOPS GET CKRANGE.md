---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS GET CKRANGE 

 property | value 
--- | --- 
 label | OOPS GET CKRANGE
 tag | GETSCHED
 routine | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
 return value type | ARRAY
 description | This broker call is used to return an array which holds the integer values stored in the field included in the input parameter. Currently in ASISTS, the fields that are evaluated/returned via this broker are:140 Regular Work Schedule for CA1244 Regular Work Schedule for CA2

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INPUT | LITERAL |  | true | The input parameter must contain the file, field and IEN to retrieve therequested informationd. The format of the input parmameter must be FILE^FIELD^IEN. | 