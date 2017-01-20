---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 GET LAB TIMES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 GET LAB TIMES{:/}
 tag | {::nomarkdown}GETLABTM{:/}
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of lab collect times for a date and location.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETLABTM^[ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 Method comment | Return list of lab collect times for a date and location
 Input parameters | {::nomarkdown}ORDATE, ORLOC{:/}
 Code | {::nomarkdown}  N ORDA,ORTI,ORNOW,ORDOW,ORCTM,ORTI,X,%,%H<br> S ORY(0)=0 Q:'$G(ORDATE)!($G(ORDATE)<0)!('$G(ORLOC))<br> S ORDA=$P(ORDATE,".",1)<br> S ORNOW=$$NOW^XLFDT,ORTI=$P(ORNOW,".",2)<br> I ORDA<$P(ORNOW,".",1) S ORY(0)="-1^Dates in the past are not allowed." Q<br> I '+$$GET^XPAR(ORLOC_";SC(","LR EXCEPTED LOCATIONS",1,"Q") D<br> . S X=ORDA D DW^%DTC S ORDOW=X<br> . I '+$$GET^XPAR("ALL","LR COLLECT "_ORDOW,1,"Q") S ORY(0)="-1^No collections on "_ORDOW Q<br> . I '+$$GET^XPAR("ALL","LR IGNORE HOLIDAYS",1,"Q"),$D(^HOLIDAY(ORDA,0)) S ORY(0)="-1^No holiday collections" Q<br> I +ORY(0)>-1 D <br> . D GETLST^XPAR(.ORY,"ALL","LR PHLEBOTOMY COLLECTION","Q")<br> . I +$G(ORY)=0 S ORY(0)="-1^No lab collect times defined for this division" Q<br> S I=0 F  S I=$O(ORY(I)) Q:'I  D<br> . D NOW^%DTC S ORTI=%,%H=+%H_","_+ORY(I) D YMD^%DTC<br> . I (ORDA=$P(ORTI,".",1)),(+(ORDA+%)<+ORTI) K ORY(I) S ORY=ORY-1 Q   ; cutoff time has passed for this collect time<br> . S ORY(I)=$P(ORY(I),U,2)<br> I +$G(ORY)=0,('$D(ORY(0))) S ORY(0)="-1^All of today's collection times have passed."{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}