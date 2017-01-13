---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RORICR PATIENT LOAD 

 property | value 
--- | --- 
 label | {::nomarkdown}RORICR PATIENT LOAD{:/}
 tag | {::nomarkdown}LOAD{:/}
 routine | [RORRP033](http://code.osehra.org/dox/Routine_RORRP033_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The RORICR PATIENT LOAD remote procedure loads the patient's data from theICR registry and prepares the record for editing.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).{:/} | 
| {::nomarkdown}PATIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}A valid patient IEN (DFN) should be assigned to the PATIEN parameter.{:/} | 
| {::nomarkdown}LOCK{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}If this parameter is defined and not zero then the RPC will try to lockthe registry record before loading the data and will leave it locked.{:/} | 




 Generated on January 13th 2017, 6:15:57 am