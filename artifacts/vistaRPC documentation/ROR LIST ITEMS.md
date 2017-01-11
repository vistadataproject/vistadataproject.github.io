---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST ITEMS 

 property | value 
--- | --- 
 label | ROR LIST ITEMS
 tag | LSTITEMS
 routine | [RORRP012](http://code.osehra.org/dox/Routine_RORRP012_source.html)
 return value type | ARRAY
 description | The ROR LIST ITEMS remote procedure returns a list of registry-specific items from the ROR LIST ITEM file.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 
| TYPE | LITERAL |  | true | The TYPE parameter defines type of the items that should be extracted:   3  Lab Groups  4  Drug Groups See description of the TYPE field (.02) of the ROR LIST ITEM file (#799.1)for more details.for more details. | 




 ###### Generated on January 11th 2017, 6:39:43 am