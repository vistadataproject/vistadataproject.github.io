---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE GET DESCRIPTION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE GET DESCRIPTION{:/}
 tag | {::nomarkdown}GETDESC{:/}
 routine | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a Template's Description{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Template IEN{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETDESC^[TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 Method comment | Returns Template Description
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  I (TIUDA>0),$D(^TIU(8927,TIUDA,5)) D<br> .N IDX,CNT S (IDX,CNT)=0<br> .F  S IDX=$O(^TIU(8927,TIUDA,5,IDX)) Q:IDX'>0  D<br> ..S CNT=CNT+1,TIUY(CNT)=^TIU(8927,TIUDA,5,IDX,0){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}