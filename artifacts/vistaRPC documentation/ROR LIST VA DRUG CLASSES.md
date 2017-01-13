---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST VA DRUG CLASSES 

 property | value 
--- | --- 
 label | {::nomarkdown}ROR LIST VA DRUG CLASSES{:/}
 tag | {::nomarkdown}VACLSLST{:/}
 routine | [RORRP017](http://code.osehra.org/dox/Routine_RORRP017_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The ROR LIST VA DRUG CLASSES remote procedure returns a list of VA drug classes (defined in the VA DRUG CLASS file), which conform to the searchcriteria.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARENT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Reserved{:/} | 
| {::nomarkdown}PART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} |  | {::nomarkdown}The partial match restriction.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Flags that control the execution (can be combined):   N  Search the classes by their names     (by default, the search is performed by codes){:/} | 
| {::nomarkdown}NUMBER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Deprecatedparameter designates all entries.{:/} | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Deprecated   ^01: FromName   ^02: FromIEN   For example, a FROM value of \XA\ would list entries following XA. You canuse the 2-nd and 3-rd \^\- pieces of the Results[0] to continue thelisting in the subsequent procedure calls.   NOTE: The FROM value itself is not included in the      resulting list.   See description of the LIST^DIC for more details about the PART, NUMBER and FROM parameters.{:/} | 




 Generated on January 13th 2017, 6:24:32 am