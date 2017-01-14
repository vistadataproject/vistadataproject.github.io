---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDAL32 DEF 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDAL32 DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns default values and list sets for Allergy ordering dialog.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DEF^[ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 Method comment | Get dialog data for allergies
 Code | ```  N ILST,I,X S ILST=0
 S LST($$NXT)="~Allergy Types" D ALLGYTYP
 S LST($$NXT)="~Reactions" D ALLGYTYP
 S LST($$NXT)="~Nature of Reaction" D NATREACT
 S LST($$NXT)="~Top Ten" D TOPTEN
 S LST($$NXT)="~Observ/Hist" D OBSHIST
 S LST($$NXT)="~Severity" D SEVERITY```




 Generated on January 14th 2017, 7:26:35 am