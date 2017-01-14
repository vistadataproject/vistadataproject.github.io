---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE GET SET OF CODES 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GET SET OF CODES{:/}
 tag | {::nomarkdown}GETSET{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns values for a set of codes given a file and field number.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETSET^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | gets set of codes
 First comment | {::nomarkdown}ORWLST(n)=code^text for code{:/}
 Input parameters | {::nomarkdown}ORWFILE<br/>ORWFIELD<br/>ORWNULL{:/}
 Code | ```  N ORWPCE,ORWPCEL,ORWPCEC,ORWPCELO,ORWPCEHI,ORWPCECD,ORWPCET
 S ORWPCELO="abcdefghijklmnopqrstuvwxyz"
 S ORWPCEHI="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 D FIELD^DID(ORWFILE,ORWFIELD,"","POINTER","ORWPCE","ORWPCE")
 S ORWPCEL=$L(ORWPCE("POINTER"),";")-1
 F ORWPCEC=1:1:ORWPCEL D
 . S ORWPCECD=$P($P(ORWPCE("POINTER"),";",ORWPCEC),":",1)
 . S ORWPCET=$P($P(ORWPCE("POINTER"),";",ORWPCEC),":",2)
 . S ORWLST(ORWPCEC)=ORWPCECD_"^"_$E(ORWPCET)_$TR($E(ORWPCET,2,99),ORWPCEHI,ORWPCELO)
 S:$G(ORWNULL) ORWLST(0)="@^(None selected)"```




 Generated on January 14th 2017, 7:26:35 am