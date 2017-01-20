---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 LAB COLL TIME 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 LAB COLL TIME{:/}
 tag | {::nomarkdown}LABCOLTM{:/}
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Is the given time a routine lab collection time for the given location?{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Collection Time{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Valid FileMan data/time string to check whether it is a valid labcollect time.{:/} | 
| {::nomarkdown}Location{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to Hospital Location{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LABCOLTM^[ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 Method comment | Is this a routine lab collect time for this location?
 Input parameters | {::nomarkdown}ORDATE<br>ORLOC{:/}
 Code | {::nomarkdown}  N ORDA,ORTI,ORDOW,ORCTM,I,X,Y<br> S ORYN=0 Q:'$G(ORDATE)!($G(ORDATE)<0)!('$G(ORLOC))<br> S ORDA=$P(ORDATE,".",1),ORTI=$P(ORDATE,".",2)<br> S I=0 F  S I=$L(ORTI) Q:I>3  S ORTI=ORTI_"0"<br> S X=ORDA D DW^%DTC S ORDOW=X<br> D GETLST^XPAR(.ORCTM,"ALL","LR PHLEBOTOMY COLLECTION","Q")<br> S I=0 F  S I=$O(ORCTM(I)) Q:'I  D<br> . S:$P(ORCTM(I),U,2)=ORTI ORYN=1<br> Q:ORYN=0<br> I $G(ORLOC),$$GET^XPAR(ORLOC_";SC(","LR EXCEPTED LOCATIONS",1,"Q") S ORYN=1 Q<br> I '$$GET^XPAR("ALL","LR IGNORE HOLIDAYS",1,"Q"),$D(^HOLIDAY(ORDA,0)) S ORYN=0 Q<br> I $$GET^XPAR("ALL","LR COLLECT "_ORDOW,1,"Q") S ORYN=1 Q<br> S ORYN=0{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Orders/rODLab.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}