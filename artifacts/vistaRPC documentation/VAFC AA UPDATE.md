---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VAFC AA UPDATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VAFC AA UPDATE{:/}
 tag | {::nomarkdown}AAUPD{:/}
 routine | [VAFCRPC](http://code.osehra.org/dox/Routine_VAFCRPC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure call will update assigning authority passed in by MPI to VAFC ASSIGNING AUTHORITY file #391.92.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ARRAA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}2000{:/} | {::nomarkdown}true{:/} | {::nomarkdown}ARRAA may contain the following values:The values are passed into this RPC from the Master Patient Index (MPI).      ARRAA(\HL7V2_4\)= value for HL7V2_4 (#.02) field AND/OR     ARRAA(\HL7V3_0\)= value for HL7V3_0 (#.03) field     ARRAA(\SOURCEID\)= value for DEFAULT SOURCE ID TYPE (#.04) field{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}