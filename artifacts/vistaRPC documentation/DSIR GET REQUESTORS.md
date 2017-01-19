---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR GET REQUESTORS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR GET REQUESTORS{:/}
 tag | {::nomarkdown}GTREQSTR{:/}
 routine | [DSIROI3](http://code.osehra.org/dox/Routine_DSIROI3_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}THIS RPC WILL RETURN ALL REQUESTORS THAT MEET ONE OF THE FOLLOWING CRITERIA: THE REQUESTORS LAST NAME STARTS WITH THE CHARACTERS IN THE FIRST INPUT PARAMETER AND THE SECOND PARAMETER IS AN \L\ OR  THE REQUESTORS CORPORATE NAME STARTS WITH THE CHARACTERS IN THE FIRSTINPUT PARAMETER AND THE SECOND PARAMETER IS A \C\L\{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PREF{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PREF - FIRST PART OF THE REQUESTOR NAME(S) BEING SEARCHED FOR{:/} | 
| {::nomarkdown}STYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}STYP - \L\ - USE THE \AC\ INDEX FOR LAST NAME         \C\ - USE THE \AD\ INDEX FOR CORPORATE NAME{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}