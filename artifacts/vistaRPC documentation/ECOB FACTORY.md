---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ECOB FACTORY 

 property | value 
--- | --- 
 label | ECOB FACTORY
 tag | FACTORY
 routine | [ECOBUF](http://code.osehra.org/dox/Routine_ECOBUF_source.html)
 return value type | ARRAY
 description | An RPC to construct(get a handle to) or destroy VistA objects.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ARGUMENT | LITERAL | 32000 | true | Constructor Argument = Constructor.[class name].[namespace]Destructor Argument = Destructor.[handle].[class name] | 