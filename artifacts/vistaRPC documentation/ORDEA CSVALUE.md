---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORDEA CSVALUE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA CSVALUE{:/}
 tag | {::nomarkdown}CSVALUE{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CSVALUE^[ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 Method comment | return 1 if the order (ORID) is a controlled substance, 0 for non-controlled substance
 Input parameters | {::nomarkdown}ORID{:/}
 Code | {::nomarkdown}  N OROI,ORPSTYPE,ORRXDG<br> S ORY=0,ORPSTYPE=""<br> S OROI=$$OI^ORQOR2(+ORID)<br> S ORRXDG=$$DGRX^ORQOR2(+ORID)<br> I ORRXDG="UNIT DOSE MEDICATIONS" S ORPSTYPE="I"<br> I ORRXDG="INPATIENT MEDICATIONS" S ORPSTYPE="I"<br> I ORRXDG="IV MEDICATIONS" S ORPSTYPE="I"<br> I ORRXDG="OUTPATIENT MEDICATIONS" S ORPSTYPE="O"<br> I ORRXDG="PHARMACY" S ORPSTYPE="O"<br> Q:ORPSTYPE=""<br> D CSCHECK(.ORY,OROI,ORPSTYPE)<br> S ORY=+ORY{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [uCore.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/uCore.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}