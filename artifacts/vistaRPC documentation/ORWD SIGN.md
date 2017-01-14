---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWD SIGN 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWD SIGN{:/}
 tag | {::nomarkdown}SIGN{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Changes signature status on a list of orders and optionally releases theorders to their respective services.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SIGN^[ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 Method comment | procedure
 First comment | {::nomarkdown}Sign orders (ORIFN;ACT^RELSTS^SIGSTS^NATR){:/}
 Input parameters | {::nomarkdown}DFN<br/>ORNP<br/>LOC<br/>ORWSIGN{:/}
 Code | ```  N ORVP,ORL,IDX,ANERROR,ERRCNT
 S ORVP=DFN_";DPT(",ORL(2)=LOC_";SC(",ORL=ORL(2),ERRCNT=0
 I '$D(^XUSEC("ORES",DUZ)) S ERRLST(1)=0_U_"Must have ORES key." Q
 S IDX=0 F  S IDX=$O(ORWSIGN(IDX)) Q:'IDX  S X=ORWSIGN(IDX) D
 . ; ** change NATR when GUI changed to pass Nature in 4th piece
 . S ORIFN=$P(X,U),RELSTS=$P(X,U,2),SIGSTS=$P(X,U,3),NATR="E" ;$P(X,U,4)
 . I SIGSTS=2 D NOTIF^ORCSIGN S ANERROR=""
 . I SIGSTS'=2 D EN^ORCSEND(ORIFN,"",SIGSTS,RELSTS,NATR,"",.ANERROR)
 . I $L(ANERROR) D  Q           ; don't print if an error occurred
 . . S ERRCNT=ERRCNT+1,ERRLST(ERRCNT)=$P(ORWSIGN(IDX),U)_U_ANERROR
 . . K ORWSIGN(IDX)
 . I RELSTS=0 K ORWSIGN(IDX) Q  ; don't print if unreleased
 . S ORWSIGN(IDX)=$P(ORWSIGN(IDX),U)
 D PRINTS^ORWD1(.ORWSIGN,LOC)```




 Generated on January 14th 2017, 7:26:35 am