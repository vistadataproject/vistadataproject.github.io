---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBA CAPRI SETCLAIMTYPE 

 property | value 
--- | --- 
 label | DVBA CAPRI SETCLAIMTYPE
 tag | SETCT
 routine | [DVBACPR1](http://code.osehra.org/dox/Routine_DVBACPR1_source.html)
 return value type | ARRAY
 description | This RPC returns the status of Claim Types passed to be set to a valid 2507 Request

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | REQIEN | LITERAL |  | true | This is the valid 2507 Request IEN | 
| vs:Input_Parameter-8994_02 | ARRAYCT | LIST |  | true | This is the list of Claim Types to be set to the valid 2507 Request | 