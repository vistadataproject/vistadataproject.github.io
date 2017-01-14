---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU NOTES BY VISIT 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU NOTES BY VISIT{:/}
 tag | {::nomarkdown}NOTES{:/}
 routine | [TIUSRVLV](http://code.osehra.org/dox/Routine_TIUSRVLV_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This API gets lists of Progress Notes by visit from TIU.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Gets list of Notes
 Input Parameters | {::nomarkdown}VISIT<br/>STATUS{:/}
 Lines | {::nomarkdown} I $S(+$G(VISIT)'>0:1,'$D(^AUPNVSIT(+$G(VISIT),0)):1,1:0) Q<br/> D LIST(.TIUY,VISIT,3,$G(STATUS)){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VISIT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the VISIT File.{:/} | 




 Generated on January 13th 2017, 7:15:27 am