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
 Lines | {::nomarkdown} N OROI,ORPSTYPE,ORRXDG<br/> S ORY=0,ORPSTYPE=""<br/> S OROI=$$OI^ORQOR2(+ORID)<br/> S ORRXDG=$$DGRX^ORQOR2(+ORID)<br/> I ORRXDG="UNIT DOSE MEDICATIONS" S ORPSTYPE="I"<br/> I ORRXDG="INPATIENT MEDICATIONS" S ORPSTYPE="I"<br/> I ORRXDG="IV MEDICATIONS" S ORPSTYPE="I"<br/> I ORRXDG="OUTPATIENT MEDICATIONS" S ORPSTYPE="O"<br/> I ORRXDG="PHARMACY" S ORPSTYPE="O"<br/> Q:ORPSTYPE=""<br/> D CSCHECK(.ORY,OROI,ORPSTYPE)<br/> S ORY=+ORY{:/}




 Generated on January 13th 2017, 7:15:28 am