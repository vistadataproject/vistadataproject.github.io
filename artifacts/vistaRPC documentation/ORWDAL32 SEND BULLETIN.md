---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDAL32 SEND BULLETIN 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDAL32 SEND BULLETIN{:/}
 tag | {::nomarkdown}SENDBULL{:/}
 routine | [ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SENDBULL^[ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 Method comment | Send bulletin if user attempts free-text entry
 Input parameters | {::nomarkdown}ORDUZ<br/>ORDFN<br/>ORTEXT<br/>ORCMTS{:/}
 Code | ```  I '$D(ORCMTS) D
 . S Y=$$SENDREQ^GMRAPES0(ORDUZ,ORDFN,ORTEXT)
 E  D
 . S Y=$$SENDREQ^GMRAPES0(ORDUZ,ORDFN,ORTEXT,.ORCMTS)```




 Generated on January 14th 2017, 7:26:36 am