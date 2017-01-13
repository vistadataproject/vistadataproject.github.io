---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU VERSRV 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU VERSRV{:/}
 tag | {::nomarkdown}VERSRV{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the server version of a particular option.  This is specificallyused by CPRS GUI to determine the current server version of the associatedsoftware.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return server version of option name
 Input Parameters | {::nomarkdown}X<br/>CLVER{:/}
 Lines | ```{::nomarkdown} S ORWCLVER=$G(CLVER)  ; leave in partition for session<br/> N BADVAL,ORLST<br/> D FIND^DIC(19,"",1,"X",X,1,,,,"ORLST")<br/> I 'ORLST("DILIST",0) S VAL="0.0.0.0" Q<br/> S VAL=ORLST("DILIST","ID",1,1)<br/> S VAL=$P(VAL,"version ",2)<br/> S BADVAL=0<br/> I $P(VAL,".",1)="" S BADVAL=1<br/> I $P(VAL,".",2)="" S BADVAL=1<br/> I $P(VAL,".",3)="" S BADVAL=1<br/> I $P(VAL,".",4)="" S BADVAL=1<br/> I ((BADVAL)!('VAL)!(VAL="")) S VAL="0.0.0.0"```{:/}




 Generated on January 13th 2017, 7:11:26 am