---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST LOCAL DRUGS 

 property | value 
--- | --- 
 label | ROR LIST LOCAL DRUGS
 tag | LDLIST
 routine | [RORRP032](http://code.osehra.org/dox/Routine_RORRP032_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR LIST LOCAL DRUGS remote procedure returns a list of local drugs, which are referenced by the LOCAL DRUG NAME multiple (29) of the RORREGISTRY PARAMETERS file (#798.1).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 
| vs:Input_Parameter-8994_02 | GROUP | LITERAL |  |  | If this parameter is defined and not zero, it should contain a valid codeof the Drug Group. In this case, only the drugs associated with this groupwill be returned. | 