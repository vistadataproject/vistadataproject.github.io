---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQLR SEARCH RANGE OUTPT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQLR SEARCH RANGE OUTPT{:/}
 tag | {::nomarkdown}SROUT{:/}
 routine | [ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the date search range in number of days (e.g. 90) to begin the search before today.  For example, a value of 90 would indicate to limit thesearch between ninety day. Limited to Outpatients.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SROUT^[ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html)
 Method comment | return lab results search date range for an outpatient
 Code | {::nomarkdown}  N DIFF,SDT,EDT,ORSRV<br> S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U)<br> S DIFF=$$GET^XPAR("USR^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORQQLR SEARCH RANGE OUTPT",1,"E")<br> S:+$G(DIFF)<1 DIFF=14  ;if no default defined use 14 days<br> S ORY=DIFF{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}