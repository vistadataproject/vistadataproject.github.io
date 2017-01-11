---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR GET REQUESTORS 

 property | value 
--- | --- 
 label | DSIR GET REQUESTORS
 tag | GTREQSTR
 routine | [DSIROI3](http://code.osehra.org/dox/Routine_DSIROI3_source.html)
 return value type | GLOBAL ARRAY
 description | THIS RPC WILL RETURN ALL REQUESTORS THAT MEET ONE OF THE FOLLOWING CRITERIA: THE REQUESTORS LAST NAME STARTS WITH THE CHARACTERS IN THE FIRST INPUT PARAMETER AND THE SECOND PARAMETER IS AN \L\ OR  THE REQUESTORS CORPORATE NAME STARTS WITH THE CHARACTERS IN THE FIRSTINPUT PARAMETER AND THE SECOND PARAMETER IS A \C\L\

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PREF | LITERAL | 30 | true | PREF - FIRST PART OF THE REQUESTOR NAME(S) BEING SEARCHED FOR | 
| STYP | LITERAL | 1 | true | STYP - \L\ - USE THE \AC\ INDEX FOR LAST NAME         \C\ - USE THE \AD\ INDEX FOR CORPORATE NAME | 




 ###### Generated on January 11th 2017, 6:39:43 am