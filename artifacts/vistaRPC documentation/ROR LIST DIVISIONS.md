---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR LIST DIVISIONS 

 property | value 
--- | --- 
 label | {::nomarkdown}ROR LIST DIVISIONS{:/}
 tag | {::nomarkdown}DIVLIST{:/}
 routine | [RORRP015](http://code.osehra.org/dox/Routine_RORRP015_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The ROR LIST DIVISIONS remote procedure returns a list of divisions defined in the MEDICAL CENTER DIVISION file (#40.8).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} |  | {::nomarkdown}The partial match restriction.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Flags that control the execution (can be combined):   B  Backwards. Traverses the index in the opposite     direction of normal traversal.{:/} | 
| {::nomarkdown}NUMBER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Maximum number of entries to return. A value of \*\ or no value in this parameter designates all entries.{:/} | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The index entry(s) from which to begin the list  ^01: FromName  ^02: FromIEN For example, a FROM value of \VA\ would list entries following VA. You canuse the 2-nd and 3-rd \^\- pieces of the @RESULTS@(0) node to continue thelisting in the subsequent procedure calls. NOTE: The FROM value itself is not included in the      resulting list. See description of the LIST^DIC for more details about the PART, NUMBERand FROM parameters.{:/} | 




 Generated on January 13th 2017, 7:11:27 am