---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR PATIENT GET DATA 

 property | value 
--- | --- 
 label | ROR PATIENT GET DATA
 tag | GETPTDAT
 routine | [RORRP021](http://code.osehra.org/dox/Routine_RORRP021_source.html)
 return value type | ARRAY
 description | The ROR GET PATIENT DATA remote procedure returns patient's data from the PATIENT file and (optionally) the registry record.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIEN | LITERAL |  | true | A valid patient IEN (DFN) should be assigned to the PATIEN parameter. | 
| FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   A  Load the patient's address  E  Load the ethnicity information  L  Load values of the registry local fields  R  Load the race information  S  Load the patient's selection rules The \L\ and \S\ flags require the REGIEN parameter. Otherwise, they areignored. | 
| REGIEN | LITERAL |  |  | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). If this parameter is defined and its value is greater than 0 then the\PRD\ segment with the basic patient's registry data will be returned.If the patient is not in the registry then an empty \PRD\ segment willbe returned anyway. | 