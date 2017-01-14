---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDLR32 LAB COLL TIME 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 LAB COLL TIME{:/}
 tag | {::nomarkdown}LABCOLTM{:/}
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Is the given time a routine lab collection time for the given location?{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Collection Time{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Valid FileMan data/time string to check whether it is a valid labcollect time.{:/} | 
| {::nomarkdown}Location{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to Hospital Location{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | LABCOLTM^[ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 Method comment | Is this a routine lab collect time for this location?
 Input parameters | {::nomarkdown}ORDATE<br/>ORLOC{:/}
 Code | ```  N ORDA,ORTI,ORDOW,ORCTM,I,X,Y
 S ORYN=0 Q:'$G(ORDATE)!($G(ORDATE)<0)!('$G(ORLOC))
 S ORDA=$P(ORDATE,".",1),ORTI=$P(ORDATE,".",2)
 S I=0 F  S I=$L(ORTI) Q:I>3  S ORTI=ORTI_"0"
 S X=ORDA D DW^%DTC S ORDOW=X
 D GETLST^XPAR(.ORCTM,"ALL","LR PHLEBOTOMY COLLECTION","Q")
 S I=0 F  S I=$O(ORCTM(I)) Q:'I  D
 . S:$P(ORCTM(I),U,2)=ORTI ORYN=1
 Q:ORYN=0
 I $G(ORLOC),$$GET^XPAR(ORLOC_";SC(","LR EXCEPTED LOCATIONS",1,"Q") S ORYN=1 Q
 I '$$GET^XPAR("ALL","LR IGNORE HOLIDAYS",1,"Q"),$D(^HOLIDAY(ORDA,0)) S ORYN=0 Q
 I $$GET^XPAR("ALL","LR COLLECT "_ORDOW,1,"Q") S ORYN=1 Q
 S ORYN=0```




 Generated on January 14th 2017, 7:26:35 am