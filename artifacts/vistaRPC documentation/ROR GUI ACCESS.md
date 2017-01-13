---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR GUI ACCESS 

 property | value 
--- | --- 
 label | {::nomarkdown}ROR GUI ACCESS{:/}
 tag | {::nomarkdown}ACREGLST{:/}
 routine | [RORRP013](http://code.osehra.org/dox/Routine_RORRP013_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The ROR ACCESS remote procedure returns a list of registries that the user has access to (the user has appropriate security keys).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}User IEN in the NEW PERSON file. By default (if $G(USER)'>0), the DUZ isused).{:/} | 




 Generated on January 13th 2017, 6:55:29 am