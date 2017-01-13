---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR REPORTS AVAILABLE 

 property | value 
--- | --- 
 label | {::nomarkdown}ROR REPORTS AVAILABLE{:/}
 tag | {::nomarkdown}RPAVAIL{:/}
 routine | [RORRP011](http://code.osehra.org/dox/Routine_RORRP011_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The ROR REPORTS AVAILABLE remote procedure returns a list of reports (and their parameters) available for the registry.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).The output list will contain reports available for the registry defined bythis parameter.{:/} | 




 Generated on January 13th 2017, 6:55:29 am