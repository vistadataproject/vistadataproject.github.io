---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ROR PATIENT REGISTRY LABS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ROR PATIENT REGISTRY LABS{:/}
 tag | {::nomarkdown}LOADPRL{:/}
 routine | [RORRP041](http://code.osehra.org/dox/Routine_RORRP041_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure returns the results of registry-specific lab tests for the patient and group statistics for these results.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PTIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}A valid patient IEN (DFN) should be assigned to the PTIEN parameter.{:/} | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).{:/} | 




 Generated on January 14th 2017, 7:26:36 am