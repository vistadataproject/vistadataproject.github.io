---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORDEA CSVALUE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA CSVALUE{:/}
 tag | {::nomarkdown}CSVALUE{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CSVALUE^[ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 Method comment | return 1 if the order (ORID) is a controlled substance, 0 for non-controlled substance
 Input parameters | {::nomarkdown}ORID{:/}
 Code | ```  N OROI,ORPSTYPE,ORRXDG
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




 Generated on January 14th 2017, 7:26:36 am