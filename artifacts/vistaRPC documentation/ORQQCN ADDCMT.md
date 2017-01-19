---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN ADDCMT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN ADDCMT{:/}
 tag | {::nomarkdown}CMT{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Allows addition of a comment to a consult request/consult without changingits status. Optionally, allows sending of an alert to the requestingprovider and others.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of the consult in file 123, REQUEST/CONSULT.{:/} | 
| {::nomarkdown}Comments{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of comments in the form ARRAY(0)..ARRAY(n).{:/} | 
| {::nomarkdown}Alert{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If '1', send an alert to the requesting provider.  Otherwise, don't.{:/} | 
| {::nomarkdown}Alert to{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains pointers to NEW PERSON FILE (200) for those to receive alert forthis addition of a comment. {:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | CMT^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | Add comment to existing consult without changing status
 First comment | {::nomarkdown}<pre>ORIEN - IEN of consult from File 123<br/>ORERR - return array for results/errors<br/>ORCOM is the comments array to be added<br/>     passed in as ORCOM(1)="Xxxx Xxxxx...",ORCOM(2)="Xxxx Xx Xxx...", ORCOM(3)="Xxxxx Xxx Xx...", etc.<br/>ORALRT - should alerts be sent to anyone?<br/>ORALTO - array of alert recipient IENs</pre>{:/}
 Input parameters | {::nomarkdown}ORIEN<br>ORCOM<br>ORALRT<br>ORALTO<br>ORDATE{:/}
 Code | {::nomarkdown}  N ORAD,ORDUZ,ORNP,X<br> S ORERR=0,ORAD=$S($D(ORDATE):ORDATE,1:$$NOW^XLFDT),ORNP=""<br> I '$D(ORCOM) S ORERR="1^Comments required - no action taken" Q<br> I '$D(^GMR(123,ORIEN)) S ORERR="1^No such consult" Q<br> I $G(ORALRT)=1 D<br> .F I=1:1  S X=$P(ORALTO,";",I) Q:X=""  S ORDUZ(X)=""<br> D CMT^GMRCGUIB(ORIEN,.ORCOM,.ORDUZ,ORAD,DUZ){:/}


### CPRS

[Consults/rConsults.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}