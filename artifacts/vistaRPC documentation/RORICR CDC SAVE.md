---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RORICR CDC SAVE 

 property | value 
--- | --- 
 label | RORICR CDC SAVE
 tag | SAVECDC
 routine | [RORRP027](http://code.osehra.org/dox/Routine_RORRP027_source.html)
 return value type | ARRAY
 description | The RORICR CDC SAVE remote procedure updates the fields that are used by the ICR CDC form.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 
| PATIEN | LITERAL |  | true | A valid patient IEN (DFN) should be assigned to the PATIEN parameter. | 
| DATA | LIST |  | true | A list that contains the CDC data in the same format as the output of theRORICR CDC LOAD remote procedure (see the RORRP025 routine and descriptionof the RPC for more details). Example:   with RPCBroker.Param[3] do    begin      PType := list;      Mult[1] := 'HDR^^2990622';      Mult[2] := 'CDM^^2^22^1^^1^^Westmont^Du Page^17^ILLINOIS^US';      ...      Mult[n] := 'CMT^1^Just a sample CDC comment';    end; NOTE #1: The CS data segment must be always included before the         AID segments. Otherwise, the latter will be ignored.                                                                    NOTE #2: Any AIDS indicator disease, which has empty 3rd piece         in the corresponding AID segment (or no segment at all),         will be removed from the patient record.    NOTE #3: There should be at least one empty comment (i.e. the         \CMT^1\ segment) among the data if you want to clear         the CDC comments. Otherwise, they will not be updated. | 
| FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   H  Update the patient history. If this flag is     not provided, the PH data segment is ignored. | 




 ###### Generated on January 11th 2017, 6:39:43 am