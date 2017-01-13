---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQXMB MAIL GROUPS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQXMB MAIL GROUPS{:/}
 tag | {::nomarkdown}MAILG{:/}
 routine | [ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns mail groups in a system.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return mail groups in a system
 Lines | ```{::nomarkdown} N ORI S ORI=1<br/> D LIST^DIC(3.8,"","","","","","","","","","ORBMG($J)")<br/> F ORI=1:1:$P(ORBMG($J,"DILIST",0),U) S ORY(ORI)=ORBMG($J,"DILIST",2,ORI)_U_ORBMG($J,"DILIST",1,ORI)<br/> D CLEAN^DILF<br/> K ORBMG<br/>```{:/}




 Generated on January 13th 2017, 7:11:26 am