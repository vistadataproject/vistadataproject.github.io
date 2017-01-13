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
 Lines | ```
 N ORWPCE,ORWPCEL,ORWPCEC,ORWPCELO,ORWPCEHI,ORWPCECD,ORWPCET
 S ORWPCELO="abcdefghijklmnopqrstuvwxyz"
 S ORWPCEHI="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 D FIELD^DID(ORWFILE,ORWFIELD,"","POINTER","ORWPCE","ORWPCE")
 S ORWPCEL=$L(ORWPCE("POINTER"),";")-1
 F ORWPCEC=1:1:ORWPCEL D
 . S ORWPCECD=$P($P(ORWPCE("POINTER"),";",ORWPCEC),":",1)
 . S ORWPCET=$P($P(ORWPCE("POINTER"),";",ORWPCEC),":",2)
 . S ORWLST(ORWPCEC)=ORWPCECD_"^"_$E(ORWPCET)_$TR($E(ORWPCET,2,99),ORWPCEHI,ORWPCELO)
 S:$G(ORWNULL) ORWLST(0)="@^(None selected)"```
 Leading comment lines | {::nomarkdown}ORWLST(n)=code^text for code{:/}




 Generated on January 13th 2017, 6:55:29 am