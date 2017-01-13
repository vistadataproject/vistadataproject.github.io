---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GET SET OF CODES 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GET SET OF CODES{:/}
 tag | {::nomarkdown}GETSET{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns values for a set of codes given a file and field number.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | gets set of codes
 Input Parameters | {::nomarkdown}ORWFILE<br/>ORWFIELD<br/>ORWNULL{:/}
 Lines | ```{::nomarkdown} N ORWPCE,ORWPCEL,ORWPCEC,ORWPCELO,ORWPCEHI,ORWPCECD,ORWPCET<br/> S ORWPCELO="abcdefghijklmnopqrstuvwxyz"<br/> S ORWPCEHI="ABCDEFGHIJKLMNOPQRSTUVWXYZ"<br/> D FIELD^DID(ORWFILE,ORWFIELD,"","POINTER","ORWPCE","ORWPCE")<br/> S ORWPCEL=$L(ORWPCE("POINTER"),";")-1<br/> F ORWPCEC=1:1:ORWPCEL D<br/> . S ORWPCECD=$P($P(ORWPCE("POINTER"),";",ORWPCEC),":",1)<br/> . S ORWPCET=$P($P(ORWPCE("POINTER"),";",ORWPCEC),":",2)<br/> . S ORWLST(ORWPCEC)=ORWPCECD_"^"_$E(ORWPCET)_$TR($E(ORWPCET,2,99),ORWPCEHI,ORWPCELO)<br/> S:$G(ORWNULL) ORWLST(0)="@^(None selected)"```{:/}
 Leading comment lines | {::nomarkdown}ORWLST(n)=code^text for code{:/}




 Generated on January 13th 2017, 7:11:26 am