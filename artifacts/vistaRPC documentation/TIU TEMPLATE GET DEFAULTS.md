---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE GET DEFAULTS 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE GET DEFAULTS{:/}
 tag | {::nomarkdown}GETDFLT{:/}
 routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns Default Template Settings{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns Default Templates for the current user
 Lines | ```
 N TIUTMP,TIUERR
 D GETLST^XPAR(.TIUTMP,"USR","TIU DEFAULT TEMPLATES","Q",.TIUERR) ;2263
 S TIUY=$P($G(TIUTMP(1)),U,2)```




 Generated on January 13th 2017, 6:55:29 am