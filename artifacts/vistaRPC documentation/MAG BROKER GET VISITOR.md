---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG BROKER GET VISITOR 

 property | value 
--- | --- 
 label | MAG BROKER GET VISITOR
 tag | BSEXP
 routine | [MAGS2BSE](http://code.osehra.org/dox/Routine_MAGS2BSE_source.html)
 return value type | SINGLE VALUE
 description | Wraps code underlying RPC: XUS GET VISITOR to check for expired authentication token.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGTKN | LITERAL | 256 | true | The Broker Security Enhancement (BSE) token to validate. | 