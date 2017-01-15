---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE GET DEFAULTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE GET DEFAULTS{:/}
 tag | {::nomarkdown}GETDFLT{:/}
 routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns Default Template Settings{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETDFLT^[TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 Method comment | Returns Default Templates for the current user
 Code | {::nomarkdown}  N TIUTMP,TIUERR<br> D GETLST^XPAR(.TIUTMP,"USR","TIU DEFAULT TEMPLATES","Q",.TIUERR) ;2263<br> S TIUY=$P($G(TIUTMP(1)),U,2){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}