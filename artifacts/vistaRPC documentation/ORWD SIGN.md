---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD SIGN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWD SIGN{:/}
 tag | {::nomarkdown}SIGN{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Changes signature status on a list of orders and optionally releases theorders to their respective services.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SIGN^[ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 Method comment | procedure
 Input parameters | {::nomarkdown}DFN, ORNP, LOC, ORWSIGN{:/}
 First comment | {::nomarkdown}<pre> Sign orders (ORIFN;ACT^RELSTS^SIGSTS^NATR)</pre>{:/}
 Code | {::nomarkdown}  N ORVP,ORL,IDX,ANERROR,ERRCNT<br> S ORVP=DFN_";DPT(",ORL(2)=LOC_";SC(",ORL=ORL(2),ERRCNT=0<br> I '$D(^XUSEC("ORES",DUZ)) S ERRLST(1)=0_U_"Must have ORES key." Q<br> S IDX=0 F  S IDX=$O(ORWSIGN(IDX)) Q:'IDX  S X=ORWSIGN(IDX) D<br> . ; ** change NATR when GUI changed to pass Nature in 4th piece<br> . S ORIFN=$P(X,U),RELSTS=$P(X,U,2),SIGSTS=$P(X,U,3),NATR="E" ;$P(X,U,4)<br> . I SIGSTS=2 D NOTIF^ORCSIGN S ANERROR=""<br> . I SIGSTS'=2 D EN^ORCSEND(ORIFN,"",SIGSTS,RELSTS,NATR,"",.ANERROR)<br> . I $L(ANERROR) D  Q           ; don't print if an error occurred<br> . . S ERRCNT=ERRCNT+1,ERRLST(ERRCNT)=$P(ORWSIGN(IDX),U)_U_ANERROR<br> . . K ORWSIGN(IDX)<br> . I RELSTS=0 K ORWSIGN(IDX) Q  ; don't print if unreleased<br> . S ORWSIGN(IDX)=$P(ORWSIGN(IDX),U)<br> D PRINTS^ORWD1(.ORWSIGN,LOC){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}