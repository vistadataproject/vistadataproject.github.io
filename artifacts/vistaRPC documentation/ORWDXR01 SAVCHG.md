---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR01 SAVCHG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR01 SAVCHG{:/}
 tag | {::nomarkdown}SAVCHG{:/}
 routine | [ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SAVCHG^[ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
 First comment | {::nomarkdown}save new changes on the unreleased unsigned renewed order{:/}
 Input parameters | {::nomarkdown}ORID<br>PARM1<br>PARM2<br>TXTOD{:/}
 Code | {::nomarkdown}  Q:'$D(^OR(100,+ORID,0))<br> I TXTOD D TXTSAV(.ORY,ORID,PARM1,PARM2) Q<br> N REFID,PICKID,ACT,IX,TXT,REFPOS,NDQUIT<br> S (REFID,PICKID,ACT,REFPOS,NDQUIT)=0,ORY=""<br> S ACT=+$P(ORID,";",2) S:ACT'>0 ACT=1<br> S REFID=$O(^OR(100,+ORID,4.5,"ID","REFILLS",0))<br> S PICKID=$O(^OR(100,+ORID,4.5,"ID","PICKUP",0))<br> S:$D(^OR(100,+ORID,4.5,REFID,1)) ^(1)=PARM1<br> S:$D(^OR(100,+ORID,4.5,PICKID,1)) ^(1)=PARM2<br> S IX=0 F  S IX=$O(^OR(100,+ORID,8,ACT,.1,IX)) Q:('IX)!(NDQUIT)  D<br> . S TXT=$G(^OR(100,+ORID,8,ACT,.1,IX,0))<br> . I ($$UP^XLFSTR(TXT)["QUANTITY:"),($$UP^XLFSTR(TXT)["REFILLS:") D<br> . . S REFPOS=$F($$UP^XLFSTR(TXT),"REFILLS")-$L("REFILLS")-1<br> . . S TXT=$E(TXT,1,REFPOS)_"Refills: "_PARM1<br> . . S ^OR(100,+ORID,8,ACT,.1,IX,0)=TXT,NDQUIT=1 Q<br> D GETBYIFN^ORWORR(.ORY,+ORID){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}