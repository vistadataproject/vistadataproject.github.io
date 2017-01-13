---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDRA32 DEF 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDRA32 DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Loads dialog data (lists & defaults) for a radiology order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get dialog data for radiology
 Input Parameters | {::nomarkdown}PATID<br/>EVTDIV<br/>IMGTYP{:/}
 Lines | ```{::nomarkdown} N ILST,I,ORX S ILST=0<br/> S LST($$NXT)="~ShortList"  D SHORT<br/> S IMGTYP=$$IMTYPE(IMGTYP)<br/> S LST($$NXT)="~Common Procedures" D COMMPRO<br/> S LST($$NXT)="~Modifiers" D MODIFYR<br/> S LST($$NXT)="~Urgencies" D URGENCY<br/> S LST($$NXT)="~Transport" D TRNSPRT<br/> S LST($$NXT)="~Category" D CATEGRY<br/> S LST($$NXT)="~Submit to" D SUBMIT<br/> S LST($$NXT)="~Last 7 Days" D LAST7```{:/}




 Generated on January 13th 2017, 7:11:26 am