---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDAL32 SEND BULLETIN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDAL32 SEND BULLETIN{:/}
 tag | {::nomarkdown}SENDBULL{:/}
 routine | [ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SENDBULL^[ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 Method comment | Send bulletin if user attempts free-text entry
 Input parameters | {::nomarkdown}ORDUZ<br>ORDFN<br>ORTEXT<br>ORCMTS{:/}
 Code | {::nomarkdown}  I '$D(ORCMTS) D<br> . S Y=$$SENDREQ^GMRAPES0(ORDUZ,ORDFN,ORTEXT)<br> E  D<br> . S Y=$$SENDREQ^GMRAPES0(ORDUZ,ORDFN,ORTEXT,.ORCMTS){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}