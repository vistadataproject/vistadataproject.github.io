---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL REPLACE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL REPLACE{:/}
 tag | {::nomarkdown}REPLACE{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}REPLACES A PROBLEM THAT WAS PREVIOUSLY DELETED{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | replace problem on patient's list
 Input Parameters | {::nomarkdown}DA{:/}
 Lines | ```
 N CHNGE,DIE,DR
 I $P($G(^AUPNPROB(DA,1)),U,2)'="H" D  Q  ; BAIL OUT - INVALID RECORD
 . S RETURN=0
 S DR="1.02////P"
 S DIE="^AUPNPROB("
 D ^DIE
 S CHNGE=DA_"^1.02^"_$$HTFM^XLFDT($H)_U_DUZ_"^H^P^Replaced^"_DUZ
 D AUDIT^GMPLX(CHNGE,"")
 D DTMOD^GMPLX(DA)
 S RETURN=1```
 Leading comment lines | {::nomarkdown}taken from REPLACE^GMPLRPTR{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}IFN OF PROBLEM{:/} | 




 Generated on January 13th 2017, 6:55:28 am