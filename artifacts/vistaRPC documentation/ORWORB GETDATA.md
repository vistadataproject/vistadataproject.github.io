---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWORB GETDATA 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB GETDATA{:/}
 tag | {::nomarkdown}GETDATA{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Given an XQAID, return XQADATA for an alert.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XQAID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETDATA^[ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 Method comment | return XQADATA for an alert
 Input parameters | {::nomarkdown}XQAID{:/}
 Code | ```  N SHOWADD
 S ORY=""
 Q:$G(XQAID)=""!('$D(^XTV(8992,"AXQA",XQAID)))
 D GETACT^XQALERT(XQAID)
 S ORY=XQADATA
 I ($E(XQAID,1,3)="TIU"),(+ORY>0) D
 . S SHOWADD=1
 . S ORY=ORY_$$RESOLVE^TIUSRVLO(+ORY)
 K XQAID,XQADATA,XQAOPT,XQAROU```




 Generated on January 14th 2017, 7:26:35 am