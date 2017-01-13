---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST REGISTRY USERS 

 property | value 
--- | --- 
 label | {::nomarkdown}ROR LIST REGISTRY USERS{:/}
 tag | {::nomarkdown}USERLIST{:/}
 routine | [RORRP013](http://code.osehra.org/dox/Routine_RORRP013_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The ROR GET REGISTRY USERS remote procedure returns the list of registry users (VistA users who have the appropriate security keys).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).{:/} | 




 Generated on January 13th 2017, 5:52:13 am