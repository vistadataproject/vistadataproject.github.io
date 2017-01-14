---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE MH TEST AUTHORIZED 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE MH TEST AUTHORIZED{:/}
 tag | {::nomarkdown}MHATHRZD{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Indicates if a given mental health test can be given by the given user.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TEST{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}MENTAL HEALTH TEST NAME{:/} | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The user giving the test.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | MHATHRZD^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Indicates that user can score test
 Input parameters | {::nomarkdown}TEST<br/>USER{:/}
 Code | ```  N ORYS,ORANS
 I $T(PRIVL^YTAPI5)="" S ORY=1 Q
 S ORY=0
 S ORYS("CODE")=TEST
 S ORYS("STAFF")=USER
 D PRIVL^YTAPI5(.ORANS,.ORYS)
 I $G(ORANS(1))="[DATA]" S ORY=+$P($G(ORANS(2)),U,1)```




 Generated on January 14th 2017, 7:26:35 am