---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDRA32 DEF 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDRA32 DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Loads dialog data (lists & defaults) for a radiology order.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DEF^[ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 Method comment | Get dialog data for radiology
 Input parameters | {::nomarkdown}PATID<br/>EVTDIV<br/>IMGTYP{:/}
 Code | ```  N ILST,I,ORX S ILST=0
 S LST($$NXT)="~ShortList"  D SHORT
 S IMGTYP=$$IMTYPE(IMGTYP)
 S LST($$NXT)="~Common Procedures" D COMMPRO
 S LST($$NXT)="~Modifiers" D MODIFYR
 S LST($$NXT)="~Urgencies" D URGENCY
 S LST($$NXT)="~Transport" D TRNSPRT
 S LST($$NXT)="~Category" D CATEGRY
 S LST($$NXT)="~Submit to" D SUBMIT
 S LST($$NXT)="~Last 7 Days" D LAST7```




 Generated on January 14th 2017, 7:26:35 am