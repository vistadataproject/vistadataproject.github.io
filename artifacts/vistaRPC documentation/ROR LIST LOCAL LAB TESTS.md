---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR LIST LOCAL LAB TESTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ROR LIST LOCAL LAB TESTS{:/}
 tag | {::nomarkdown}LTLIST{:/}
 routine | [RORRP031](http://code.osehra.org/dox/Routine_RORRP031_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The ROR LIST LOCAL LAB TESTS remote procedure returns a list of local lab tests, which are referenced by the LOCAL TEST NAME multiple (28) of theROR REGISTRY PARAMETERS file (#798.1).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1).{:/} | 
| {::nomarkdown}GROUP{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}If this parameter is defined and not zero, it should contain a valid codeof the Lab Group. In this case, only the tests associated with this groupwill be returned.{:/} | 




 Generated on January 13th 2017, 6:44:47 am