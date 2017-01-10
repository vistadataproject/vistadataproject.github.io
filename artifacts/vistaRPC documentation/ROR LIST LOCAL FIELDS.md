---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST LOCAL FIELDS 

 property | value 
--- | --- 
 label | ROR LIST LOCAL FIELDS
 tag | LFLIST
 routine | [RORRP040](http://code.osehra.org/dox/Routine_RORRP040_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR LIST LOCAL FIELDS remote procedure returns a list ofregistry-specific field definitions from the ROR LOCAL FIELD file(#799.53).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 
| vs:Input_Parameter-8994_02 | FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   I  Include inactive field definitions | 
| vs:Input_Parameter-8994_02 | LOCK | LITERAL |  |  | Lock the local fields before loading the data and leave them locked. | 