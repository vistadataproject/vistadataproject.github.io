---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE GET DESCRIPTION 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE GET DESCRIPTION{:/}
 tag | {::nomarkdown}GETDESC{:/}
 routine | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a Template's Description{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns Template Description
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | ```
 I (TIUDA>0),$D(^TIU(8927,TIUDA,5)) D
 .N IDX,CNT S (IDX,CNT)=0
 .F  S IDX=$O(^TIU(8927,TIUDA,5,IDX)) Q:IDX'>0  D
 ..S CNT=CNT+1,TIUY(CNT)=^TIU(8927,TIUDA,5,IDX,0)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Template IEN{:/} | 




 Generated on January 13th 2017, 6:55:29 am