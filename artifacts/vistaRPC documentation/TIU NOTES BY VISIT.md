---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU NOTES BY VISIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU NOTES BY VISIT{:/}
 tag | {::nomarkdown}NOTES{:/}
 routine | [TIUSRVLV](http://code.osehra.org/dox/Routine_TIUSRVLV_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This API gets lists of Progress Notes by visit from TIU.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VISIT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the VISIT File.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | NOTES^[TIUSRVLV](http://code.osehra.org/dox/Routine_TIUSRVLV_source.html)
 Method comment | Gets list of Notes
 Input parameters | {::nomarkdown}VISIT, STATUS{:/}
 Code | {::nomarkdown}  I $S(+$G(VISIT)'>0:1,'$D(^AUPNVSIT(+$G(VISIT),0)):1,1:0) Q<br> D LIST(.TIUY,VISIT,3,$G(STATUS)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}