---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC DSSCATCHECK 

 property | value 
--- | --- 
 label | EC DSSCATCHECK
 tag | CATCHK
 routine | [ECUMRPC1](http://code.osehra.org/dox/Routine_ECUMRPC1_source.html)
 return value type | SINGLE VALUE
 description | Checks whether category is used in an Event Code Screen.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ECARY | LITERAL |  | true | Variable ECARY contains the DSS Unit ien (file #724) that will be checked to determine if category exist. | 