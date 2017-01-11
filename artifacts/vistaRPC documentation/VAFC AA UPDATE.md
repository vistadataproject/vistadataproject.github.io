---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VAFC AA UPDATE 

 property | value 
--- | --- 
 label | VAFC AA UPDATE
 tag | AAUPD
 routine | [VAFCRPC](http://code.osehra.org/dox/Routine_VAFCRPC_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure call will update assigning authority passed in by MPI to VAFC ASSIGNING AUTHORITY file #391.92.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ARRAA | LIST | 2000 | true | ARRAA may contain the following values:The values are passed into this RPC from the Master Patient Index (MPI).      ARRAA(\HL7V2_4\)= value for HL7V2_4 (#.02) field AND/OR     ARRAA(\HL7V3_0\)= value for HL7V3_0 (#.03) field     ARRAA(\SOURCEID\)= value for DEFAULT SOURCE ID TYPE (#.04) field | 




 Generated on January 11th 2017, 7:15:04 am