---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST GENERIC DRUGS 

 property | value 
--- | --- 
 label | ROR LIST GENERIC DRUGS
 tag | GDLIST
 routine | [RORRP035](http://code.osehra.org/dox/Routine_RORRP035_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR LIST GENERIC DRUGS remote procedure returns a list of genericdrugs, which are referenced by the ROR GENERIC DRUG file (#799.51).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 
| GROUP | LITERAL |  |  | If this parameter is defined and not zero, it should contain a valid codeof the Drug Group. In this case, only the drugs associated with this groupwill be returned. | 




 ###### Generated on January 11th 2017, 6:39:43 am