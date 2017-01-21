---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET LIST OF OBJECTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET LIST OF OBJECTS{:/}
 tag | {::nomarkdown}OBJLST{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns the list of TIU OBJECTS that the current user may selectfrom.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | OBJLST^[TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 Method comment | Get the list of active objects
 Code | {::nomarkdown}  N TIUDA,TIUD0,TIUI<br> S (TIUDA,TIUI)=0,TIUY=$NA(^TMP("TIU OBJECTS",$J)) K @TIUY<br> F  S TIUDA=$O(^TIU(8925.1,"AT","O",TIUDA)) Q:+TIUDA'>0  D<br> . S TIUD0=$G(^TIU(8925.1,TIUDA,0)) Q:'+$$CANPICK^TIULP(+TIUDA)<br> . S TIUI=TIUI+1<br> . S @TIUY@(TIUI)=TIUDA_U_$P(TIUD0,U,1,3){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}