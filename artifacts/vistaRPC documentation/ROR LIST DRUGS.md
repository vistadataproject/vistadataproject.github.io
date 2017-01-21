---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR LIST DRUGS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ROR LIST DRUGS{:/}
 tag | {::nomarkdown}DRUGLIST{:/}
 routine | [RORRP017](http://code.osehra.org/dox/Routine_RORRP017_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The ROR LIST DRUGS remote procedure returns a list of drugs (defined inthe DRUG file), which conform the criteria.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PART{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} |  | {::nomarkdown}The partial match restriction.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Flags that control the execution (can be combined):   B  Backwards. Traverses the index in the opposite     direction of normal traversal   G  Retrive generic drugs (from file #50.6).     Otherwise, list of dispensed drugs (from     file #50) is retrived.{:/} | 
| {::nomarkdown}NUMBER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Deprecated.parameter designates all entries.{:/} | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Deprecated.   ^01: FromName   ^02: FromIEN   For example, a FROM value of \XA\ would list entries following XA. You canuse the 2-nd and 3-rd \^\- pieces of the Results[0] to continue thelisting in the subsequent procedure calls.   NOTE: The FROM value itself is not included in the      resulting list.   See description of the LIST^DIC for more details about the PART, NUMBER and FROM parameters.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}