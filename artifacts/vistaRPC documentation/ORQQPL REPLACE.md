---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL REPLACE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL REPLACE{:/}
 tag | {::nomarkdown}REPLACE{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}REPLACES A PROBLEM THAT WAS PREVIOUSLY DELETED{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}IFN OF PROBLEM{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | REPLACE^[ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 Method comment | replace problem on patient's list
 First comment | {::nomarkdown}taken from REPLACE^GMPLRPTR{:/}
 Input parameters | {::nomarkdown}DA{:/}
 Code | {::nomarkdown}  N CHNGE,DIE,DR<br> I $P($G(^AUPNPROB(DA,1)),U,2)'="H" D  Q  ; BAIL OUT - INVALID RECORD<br> . S RETURN=0<br> S DR="1.02////P"<br> S DIE="^AUPNPROB("<br> D ^DIE<br> S CHNGE=DA_"^1.02^"_$$HTFM^XLFDT($H)_U_DUZ_"^H^P^Replaced^"_DUZ<br> D AUDIT^GMPLX(CHNGE,"")<br> D DTMOD^GMPLX(DA)<br> S RETURN=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}