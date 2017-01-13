---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 GET LAB TIMES 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 GET LAB TIMES{:/}
 tag | {::nomarkdown}GETLABTM{:/}
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of lab collect times for a date and location.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return list of lab collect times for a date and location
 Input Parameters | {::nomarkdown}ORDATE<br/>ORLOC{:/}
 Lines | ```
 N ORDA,ORTI,ORNOW,ORDOW,ORCTM,ORTI,X,%,%H
 S ORY(0)=0 Q:'$G(ORDATE)!($G(ORDATE)<0)!('$G(ORLOC))
 S ORDA=$P(ORDATE,".",1)
 S ORNOW=$$NOW^XLFDT,ORTI=$P(ORNOW,".",2)
 I ORDA<$P(ORNOW,".",1) S ORY(0)="-1^Dates in the past are not allowed." Q
 I '+$$GET^XPAR(ORLOC_";SC(","LR EXCEPTED LOCATIONS",1,"Q") D
 . S X=ORDA D DW^%DTC S ORDOW=X
 . I '+$$GET^XPAR("ALL","LR COLLECT "_ORDOW,1,"Q") S ORY(0)="-1^No collections on "_ORDOW Q
 . I '+$$GET^XPAR("ALL","LR IGNORE HOLIDAYS",1,"Q"),$D(^HOLIDAY(ORDA,0)) S ORY(0)="-1^No holiday collections" Q
 I +ORY(0)>-1 D 
 . D GETLST^XPAR(.ORY,"ALL","LR PHLEBOTOMY COLLECTION","Q")
 . I +$G(ORY)=0 S ORY(0)="-1^No lab collect times defined for this division" Q
 S I=0 F  S I=$O(ORY(I)) Q:'I  D
 . D NOW^%DTC S ORTI=%,%H=+%H_","_+ORY(I) D YMD^%DTC
 . I (ORDA=$P(ORTI,".",1)),(+(ORDA+%)<+ORTI) K ORY(I) S ORY=ORY-1 Q   ; cutoff time has passed for this collect time
 . S ORY(I)=$P(ORY(I),U,2)
 I +$G(ORY)=0,('$D(ORY(0))) S ORY(0)="-1^All of today's collection times have passed."```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am