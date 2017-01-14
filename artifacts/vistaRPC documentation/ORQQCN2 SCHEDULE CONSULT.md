---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN2 SCHEDULE CONSULT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN2 SCHEDULE CONSULT{:/}
 tag | {::nomarkdown}SCH{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Changes status of consult to \Scheduled\, optionally adding a comment andsending alerts.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Schedule consult and change status
 Input Parameters | {::nomarkdown}ORIEN<br/>ORNP<br/>ORDATE<br/>ORALRT<br/>ORALTO<br/>ORCOM{:/}
 Lines | {::nomarkdown} N ORAD,ORDUZ,X<br/> S ORERR=0,ORAD=$S($D(ORDATE):ORDATE,1:$$NOW^XLFDT)<br/> S:+$G(ORNP)=0 ORNP=DUZ<br/> I '$D(^GMR(123,ORIEN)) S ORERR="1^No such consult" Q<br/> I $G(ORALRT)=1 D<br/> .F I=1:1  S X=$P(ORALTO,";",I) Q:X=""  S ORDUZ(X)=""<br/> S ORERR=$$SCH^GMRCGUIB(ORIEN,ORNP,ORAD,.ORDUZ,.ORCOM){:/}
 Leading comment lines | {::nomarkdown}ORERR - return array for results/errors<br/>ORIEN - IEN of consult from File 123<br/>ORNP - Provider who Scheduled consult<br/>ORDATE - Date/Time Consult was scheduled.<br/>ORALRT - should alerts be sent to anyone?<br/>ORALTO - array of alert recipient IENs<br/>ORCOM is the comments array to be added<br/>passed in as ORCOM(1)="Xxxx Xxxxx...",ORCOM(2)="Xxxx Xx Xxx...", ORCOM(3)="Xxxxx Xxx Xx...", etc.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult IEN in file 123.{:/} | 
| {::nomarkdown}Responsible provider{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}Date of action{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  |  | 
| {::nomarkdown}Send alerts?{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}Send alerts to{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}\;\ separated list of alert recipients - pointers to file 200.{:/} | 
| {::nomarkdown}Comments{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Array of comments to be added with this action.{:/} | 




 Generated on January 13th 2017, 7:15:27 am