---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR UPDATE LOCAL FIELDS 

 property | value 
--- | --- 
 label | ROR UPDATE LOCAL FIELDS
 tag | LFLUPD
 routine | [RORRP040](http://code.osehra.org/dox/Routine_RORRP040_source.html)
 return value type | ARRAY
 description | The ROR UPDATE LOCAL FIELDS remote procedure updates a list ofregistry-specific field definitions in the the ROR LOCAL FIELD file(#799.53).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 
| CANCEL | LITERAL |  |  | Cancel the update and unlock the local fields. | 
| LFLST | LIST |  |  | Reference to a local variable that contains a list of local fields.   LFLST[i]              Local Field Descriptor                          ^01: IEN                          ^02: Name                          ^03: Inactivation Date (FileMan)                          ^04: Description | 




 Generated on January 11th 2017, 7:15:04 am