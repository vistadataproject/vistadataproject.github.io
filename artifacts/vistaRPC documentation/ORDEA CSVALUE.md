---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORDEA CSVALUE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA CSVALUE{:/}
 tag | {::nomarkdown}CSVALUE{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return 1 if the order (ORID) is a controlled substance, 0 for non-controlled substance
 Input Parameters | {::nomarkdown}ORID{:/}
 Lines | ```
 N OROI,ORPSTYPE,ORRXDG
 S ORY=0,ORPSTYPE=""
 S OROI=$$OI^ORQOR2(+ORID)
 S ORRXDG=$$DGRX^ORQOR2(+ORID)
 I ORRXDG="UNIT DOSE MEDICATIONS" S ORPSTYPE="I"
 I ORRXDG="INPATIENT MEDICATIONS" S ORPSTYPE="I"
 I ORRXDG="IV MEDICATIONS" S ORPSTYPE="I"
 I ORRXDG="OUTPATIENT MEDICATIONS" S ORPSTYPE="O"
 I ORRXDG="PHARMACY" S ORPSTYPE="O"
 Q:ORPSTYPE=""
 D CSCHECK(.ORY,OROI,ORPSTYPE)
 S ORY=+ORY```




 Generated on January 13th 2017, 6:55:29 am