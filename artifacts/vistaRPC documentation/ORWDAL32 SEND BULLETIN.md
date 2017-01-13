---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDAL32 SEND BULLETIN 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDAL32 SEND BULLETIN{:/}
 tag | {::nomarkdown}SENDBULL{:/}
 routine | [ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Send bulletin if user attempts free-text entry
 Input Parameters | {::nomarkdown}ORDUZ<br/>ORDFN<br/>ORTEXT<br/>ORCMTS{:/}
 Lines | {::nomarkdown} I '$D(ORCMTS) D<br/> . S Y=$$SENDREQ^GMRAPES0(ORDUZ,ORDFN,ORTEXT)<br/> E  D<br/> . S Y=$$SENDREQ^GMRAPES0(ORDUZ,ORDFN,ORTEXT,.ORCMTS){:/}




 Generated on January 13th 2017, 7:15:28 am