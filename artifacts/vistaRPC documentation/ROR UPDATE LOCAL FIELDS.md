---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR UPDATE LOCAL FIELDS 

 property | value 
--- | --- 
 label | {::nomarkdown}ROR UPDATE LOCAL FIELDS{:/}
 tag | {::nomarkdown}LFLUPD{:/}
 routine | [RORRP040](http://code.osehra.org/dox/Routine_RORRP040_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The ROR UPDATE LOCAL FIELDS remote procedure updates a list ofregistry-specific field definitions in the the ROR LOCAL FIELD file(#799.53).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1).{:/} | 
| {::nomarkdown}CANCEL{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Cancel the update and unlock the local fields.{:/} | 
| {::nomarkdown}LFLST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Reference to a local variable that contains a list of local fields.   LFLST[i]              Local Field Descriptor                          ^01: IEN                          ^02: Name                          ^03: Inactivation Date (FileMan)                          ^04: Description{:/} | 




 Generated on January 13th 2017, 6:44:48 am