---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; IBCN INSURANCE QUERY TASK 

 property | value 
--- | --- 
 label | IBCN INSURANCE QUERY TASK
 tag | RPC
 routine | [IBCNRDV](http://code.osehra.org/dox/Routine_IBCNRDV_source.html)
 return value type | ARRAY
 description | This does a remote query on the insurance information. This is the one that used during tasked jobs to avoid user data exchange.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IBICN | LITERAL | 50 | true | This is the patient's ICN. | 