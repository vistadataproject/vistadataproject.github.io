---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET SITE PARAMETERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET SITE PARAMETERS{:/}
 tag | {::nomarkdown}SITEPARM{:/}
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC returns the TIU Parameters for the Division the user is logged in to.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SITEPARM^[TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 Method comment | Get site parameters for GUI
 Code | {::nomarkdown}  N TIUPRM0,TIUPRM1<br> D SETPARM^TIULE<br> S TIUY=TIUPRM0{:/}


### CPRS

[rTIU.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}