---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWU VERSRV 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWU VERSRV{:/}
 tag | {::nomarkdown}VERSRV{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the server version of a particular option.  This is specificallyused by CPRS GUI to determine the current server version of the associatedsoftware.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | VERSRV^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | Return server version of option name
 Input parameters | {::nomarkdown}X<br/>CLVER{:/}
 Code | ```  S ORWCLVER=$G(CLVER)  ; leave in partition for session
 N BADVAL,ORLST
 D FIND^DIC(19,"",1,"X",X,1,,,,"ORLST")
 I 'ORLST("DILIST",0) S VAL="0.0.0.0" Q
 S VAL=ORLST("DILIST","ID",1,1)
 S VAL=$P(VAL,"version ",2)
 S BADVAL=0
 I $P(VAL,".",1)="" S BADVAL=1
 I $P(VAL,".",2)="" S BADVAL=1
 I $P(VAL,".",3)="" S BADVAL=1
 I $P(VAL,".",4)="" S BADVAL=1
 I ((BADVAL)!('VAL)!(VAL="")) S VAL="0.0.0.0"```




 Generated on January 14th 2017, 7:26:35 am