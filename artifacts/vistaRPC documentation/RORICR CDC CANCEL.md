---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RORICR CDC CANCEL 

 property | value 
--- | --- 
 label | {::nomarkdown}RORICR CDC CANCEL{:/}
 tag | {::nomarkdown}CANCEL{:/}
 routine | [RORRP027](http://code.osehra.org/dox/Routine_RORRP027_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The RORICR CDC CANCEL remote procedure cancels the editing process initiated by the RORICR CDC LOAD remote procedure (see the LOCK parameter)and unlocks the registry records.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).{:/} | 
| {::nomarkdown}PATIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}A valid patient IEN (DFN) should be assigned to the PATIEN parameter.{:/} | 




 Generated on January 13th 2017, 6:24:32 am