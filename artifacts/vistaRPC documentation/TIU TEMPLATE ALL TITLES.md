---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE ALL TITLES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE ALL TITLES{:/}
 tag | {::nomarkdown}TITLELST{:/}
 routine | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a long list of all active titles.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}DIR{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | TITLELST^[TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 Method comment | Long list of titles
 First comment | {::nomarkdown} .Y=returned list, FROM=text to $O from, DIR=$O direction,{:/}
 Input parameters | {::nomarkdown}FROM<br>DIR{:/}
 Code | {::nomarkdown}  N I,DA,CNT,TIUD0<br> S I=0,CNT=44,DIR=$G(DIR,1)<br> F  Q:I'<CNT  S FROM=$O(^TIU(8925.1,"B",FROM),DIR) Q:FROM=""  D<br> . S DA=0<br> . F  Q:I'<CNT  S DA=$O(^TIU(8925.1,"B",FROM,DA)) Q:+DA'>0  D<br> . . S TIUD0=$G(^TIU(8925.1,DA,0))<br> . . I +$P(TIUD0,U,7)'=11 Q  ; Only allow Active Entries<br> . . I $P(TIUD0,U,4)'="DOC" Q  ; Only allow TITLES<br> . . S I=I+1,Y(I)=DA_"^"_FROM<br>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}