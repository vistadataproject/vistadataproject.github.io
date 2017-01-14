---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORB GETDATA 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB GETDATA{:/}
 tag | {::nomarkdown}GETDATA{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Given an XQAID, return XQADATA for an alert.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return XQADATA for an alert
 Input Parameters | {::nomarkdown}XQAID{:/}
 Lines | {::nomarkdown} N SHOWADD<br/> S ORY=""<br/> Q:$G(XQAID)=""!('$D(^XTV(8992,"AXQA",XQAID)))<br/> D GETACT^XQALERT(XQAID)<br/> S ORY=XQADATA<br/> I ($E(XQAID,1,3)="TIU"),(+ORY>0) D<br/> . S SHOWADD=1<br/> . S ORY=ORY_$$RESOLVE^TIUSRVLO(+ORY)<br/> K XQAID,XQADATA,XQAOPT,XQAROU{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XQAID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 7:15:27 am