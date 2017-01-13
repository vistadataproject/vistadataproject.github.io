---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU LONG LIST BOILERPLATED 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU LONG LIST BOILERPLATED{:/}
 tag | {::nomarkdown}LONGLIST{:/}
 routine | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Used by the GUI to supply a long list of boilerplated titles.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Long list of titles with boilerplate
 Input Parameters | {::nomarkdown}FROM<br/>DIR{:/}
 Lines | {::nomarkdown} N I,DA,CNT,TIUD0<br/> S I=0,CNT=44,DIR=$G(DIR,1)<br/> F  Q:I'<CNT  S FROM=$O(^TIU(8925.1,"B",FROM),DIR) Q:FROM=""  D<br/> . S DA=0<br/> . F  Q:I'<CNT  S DA=$O(^TIU(8925.1,"B",FROM,DA)) Q:+DA'>0  D<br/> . . S TIUD0=$G(^TIU(8925.1,DA,0))<br/> . . I +$P(TIUD0,U,7)'=11 Q  ; Only allow Active Entries<br/> . . I $P(TIUD0,U,4)'="DOC" Q  ; Only allow TITLES<br/> . . ; Quit if no Boilerplate Text is present<br/> . . I '+$O(^TIU(8925.1,DA,"DFLT",0)) Q<br/> . . I $S(+$$CANENTR^TIULP(DA)'>0:1,+$$CANPICK^TIULP(DA)'>0:1,1:0) Q<br/> . . S I=I+1,Y(I)=DA_"^"_FROM{:/}
 Leading comment lines | {::nomarkdown}.Y=returned list, FROM=text to $O from, DIR=$O direction,{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the reference title from which the longlist is scrolling.{:/} | 
| {::nomarkdown}DIR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the direction in which the longlist is scrolling from thereference title.{:/} | 




 Generated on January 13th 2017, 7:15:27 am