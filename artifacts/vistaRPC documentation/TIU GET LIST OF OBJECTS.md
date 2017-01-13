---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET LIST OF OBJECTS 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET LIST OF OBJECTS{:/}
 tag | {::nomarkdown}OBJLST{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns the list of TIU OBJECTS that the current user may selectfrom.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get the list of active objects
 Lines | {::nomarkdown} N TIUDA,TIUD0,TIUI<br/> S (TIUDA,TIUI)=0,TIUY=$NA(^TMP("TIU OBJECTS",$J)) K @TIUY<br/> F  S TIUDA=$O(^TIU(8925.1,"AT","O",TIUDA)) Q:+TIUDA'>0  D<br/> . S TIUD0=$G(^TIU(8925.1,TIUDA,0)) Q:'+$$CANPICK^TIULP(+TIUDA)<br/> . S TIUI=TIUI+1<br/> . S @TIUY@(TIUI)=TIUDA_U_$P(TIUD0,U,1,3){:/}




 Generated on January 13th 2017, 7:15:27 am