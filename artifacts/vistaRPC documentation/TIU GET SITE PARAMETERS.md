---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU GET SITE PARAMETERS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET SITE PARAMETERS{:/}
 tag | {::nomarkdown}SITEPARM{:/}
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC returns the TIU Parameters for the Division the user is logged in to.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SITEPARM^[TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 Method comment | Get site parameters for GUI
 Code | ```  N TIUPRM0,TIUPRM1
 D SETPARM^TIULE
 S TIUY=TIUPRM0```




 Generated on January 14th 2017, 7:26:35 am