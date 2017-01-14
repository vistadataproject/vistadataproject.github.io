---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU LONG LIST BOILERPLATED 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU LONG LIST BOILERPLATED{:/}
 tag | {::nomarkdown}LONGLIST{:/}
 routine | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Used by the GUI to supply a long list of boilerplated titles.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the reference title from which the longlist is scrolling.{:/} | 
| {::nomarkdown}DIR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the direction in which the longlist is scrolling from thereference title.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | LONGLIST^[TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 Method comment | Long list of titles with boilerplate
 First comment | {::nomarkdown}.Y=returned list, FROM=text to $O from, DIR=$O direction,{:/}
 Input parameters | {::nomarkdown}FROM<br/>DIR{:/}
 Code | ```  N I,DA,CNT,TIUD0
 S I=0,CNT=44,DIR=$G(DIR,1)
 F  Q:I'<CNT  S FROM=$O(^TIU(8925.1,"B",FROM),DIR) Q:FROM=""  D
 . S DA=0
 . F  Q:I'<CNT  S DA=$O(^TIU(8925.1,"B",FROM,DA)) Q:+DA'>0  D
 . . S TIUD0=$G(^TIU(8925.1,DA,0))
 . . I +$P(TIUD0,U,7)'=11 Q  ; Only allow Active Entries
 . . I $P(TIUD0,U,4)'="DOC" Q  ; Only allow TITLES
 . . ; Quit if no Boilerplate Text is present
 . . I '+$O(^TIU(8925.1,DA,"DFLT",0)) Q
 . . I $S(+$$CANENTR^TIULP(DA)'>0:1,+$$CANPICK^TIULP(DA)'>0:1,1:0) Q
 . . S I=I+1,Y(I)=DA_"^"_FROM```




 Generated on January 14th 2017, 7:26:35 am