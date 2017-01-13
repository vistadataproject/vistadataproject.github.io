---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE MH TEST AUTHORIZED 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE MH TEST AUTHORIZED{:/}
 tag | {::nomarkdown}MHATHRZD{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Indicates if a given mental health test can be given by the given user.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Indicates that user can score test
 Input Parameters | {::nomarkdown}TEST<br/>USER{:/}
 Lines | ```{::nomarkdown} N ORYS,ORANS<br/> I $T(PRIVL^YTAPI5)="" S ORY=1 Q<br/> S ORY=0<br/> S ORYS("CODE")=TEST<br/> S ORYS("STAFF")=USER<br/> D PRIVL^YTAPI5(.ORANS,.ORYS)<br/> I $G(ORANS(1))="[DATA]" S ORY=+$P($G(ORANS(2)),U,1)```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TEST{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}MENTAL HEALTH TEST NAME{:/} | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The user giving the test.{:/} | 




 Generated on January 13th 2017, 7:11:27 am