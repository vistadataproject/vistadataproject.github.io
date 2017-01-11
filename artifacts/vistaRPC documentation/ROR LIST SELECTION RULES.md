---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST SELECTION RULES 

 property | value 
--- | --- 
 label | ROR LIST SELECTION RULES
 tag | SELRULES
 routine | [RORRP014](http://code.osehra.org/dox/Routine_RORRP014_source.html)
 return value type | ARRAY
 description | The ROR LIST SELECTION RULES remote procedure returns a list of registry selection rules from the ROR SELECTION RULE file(#798.2) that are referenced by the SELCTION RULE multiple (3)of the ROR REGISTRY PARAMETERS file (#798.1).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 