---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS2 DAY2QTY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 DAY2QTY{:/}
 tag | {::nomarkdown}DAY2QTY{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return qty for days supply
 Input Parameters | {::nomarkdown}DAY<br/>UPD<br/>SCH<br/>DUR<br/>PAT<br/>DRG{:/}
 Lines | {::nomarkdown} N ORWX,I,X,ADUR,ADURNM<br/> S ORWX("DAYS SUPPLY")=DAY<br/> S ORWX("PATIENT")=PAT<br/> I DRG S ORWX("DRUG")=DRG<br/> F I=1:1:$L(UPD,U)-1 D<br/> . S ORWX("DOSE ORDERED",I)=$P(UPD,U,I)<br/> . S ORWX("SCHEDULE",I)=$P(SCH,U,I)<br/> . S ADUR=$P(DUR,U,I),ADURNM=$P($P(ADUR," ",2),"~")<br/> . S:ADURNM="MONTHS" X=+ADUR_"L"<br/> . S:ADURNM'="MONTHS" X=+ADUR_$E($P(ADUR," ",2))<br/> . I $L(X) S ORWX("DURATION",I)=X<br/> . S X=$E($P(ADUR,"~",2))<br/> . I $L(X) S ORWX("CONJUNCTION",I)=X<br/> D QTYX^PSOSIG(.ORWX)<br/> S VAL=$G(ORWX("QTY")){:/}
 Leading comment lines | {::nomarkdown}VAL: quantity{:/}




 Generated on January 13th 2017, 7:15:28 am