---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQXMB MAIL GROUPS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQXMB MAIL GROUPS{:/}
 tag | {::nomarkdown}MAILG{:/}
 routine | [ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns mail groups in a system.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | MAILG^[ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html)
 Method comment | return mail groups in a system
 Code | {::nomarkdown}  N ORI S ORI=1<br> D LIST^DIC(3.8,"","","","","","","","","","ORBMG($J)")<br> F ORI=1:1:$P(ORBMG($J,"DILIST",0),U) S ORY(ORI)=ORBMG($J,"DILIST",2,ORI)_U_ORBMG($J,"DILIST",1,ORI)<br> D CLEAN^DILF<br> K ORBMG<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}