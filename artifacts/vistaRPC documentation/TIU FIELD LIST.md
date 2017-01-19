---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU FIELD LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU FIELD LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns long list array of template fields{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | LIST^[TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
 Method comment | Long list of Template Fields
 First comment | {::nomarkdown}<pre> .Y=returned list, FROM=text to $O from, DIR=$O direction</pre>{:/}
 Input parameters | {::nomarkdown}FROM<br>DIR{:/}
 Code | {::nomarkdown}  N I,DA,CNT,TIUD0,NODE<br> S I=0,CNT=80,DIR=$G(DIR,1)<br> F  Q:I'<CNT  S FROM=$O(^TIU(8927.1,"B",FROM),DIR) Q:FROM=""  D<br> . S DA=0<br> . F  Q:I'<CNT  S DA=$O(^TIU(8927.1,"B",FROM,DA)) Q:+DA'>0  D<br> .. S I=I+1,Y(I)=DA_U_FROM<br> .. S NODE=$G(^TIU(8927.1,DA,0))<br> .. I +$P(NODE,U,3) S Y(I)=Y(I)_" <Inactive>"<br> .. S Y(I)=Y(I)_U_$P(NODE,U,2)_U_$P(NODE,U,8)_U_$P(NODE,U,16){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}