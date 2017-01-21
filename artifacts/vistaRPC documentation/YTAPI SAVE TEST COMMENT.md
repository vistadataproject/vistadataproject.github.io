---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YTAPI SAVE TEST COMMENT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTAPI SAVE TEST COMMENT{:/}
 tag | {::nomarkdown}ADDCOMM{:/}
 routine | [YTRPEXT](http://code.osehra.org/dox/Routine_YTRPEXT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This API is used to add comments to completed tests and interviews.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}YSDATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}200{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The YSDATA catains the following information:  YSDATA=DFN^DUZ^DATE/TIME TEST ENTERED^NAME OF TEST^AUTHOR^TOTAL LINES OFCOMMENT DFN: Pointer to the Patient fileDATE/TIME TEST ENTERED: FileMan date/time formatNAME OF TEST : Test name in the MH Intrument file #601DUZ and AUTHOR: Pointer to the New Person file #200{:/} | 
| {::nomarkdown}YSCOMMT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}200{:/} | {::nomarkdown}true{:/} | {::nomarkdown}YSCOMMT array contains comment lines to be filed.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}