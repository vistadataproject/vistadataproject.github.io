---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR PATIENT DELETE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ROR PATIENT DELETE{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [RORRP030](http://code.osehra.org/dox/Routine_RORRP030_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The ROR PATIENT DELETE remote procedure marks the patient's record as deleted from the registry.not deleted and an error code is returned.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).{:/} | 
| {::nomarkdown}RORDFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}A valid patient IEN (DFN) should be assigned to the RORDFN parameter.{:/} | 
| {::nomarkdown}FORCE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Deprecatedrecord will be deleted from the registry even if some data has been sent to the AAC already. BE VERY CAREFUL WITH THIS!{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}