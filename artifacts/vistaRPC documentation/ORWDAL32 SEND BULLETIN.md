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

 Property | Value 
 --- | --- 
 Method | SENDBULL^[ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 Method comment | Send bulletin if user attempts free-text entry
 Input parameters | {::nomarkdown}ORDUZ, ORDFN, ORTEXT, ORCMTS{:/}
 Code | {::nomarkdown}  I '$D(ORCMTS) D<br> . S Y=$$SENDREQ^GMRAPES0(ORDUZ,ORDFN,ORTEXT)<br> E  D<br> . S Y=$$SENDREQ^GMRAPES0(ORDUZ,ORDFN,ORTEXT,.ORCMTS){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODAllergy.pas">Orders/rODAllergy.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}