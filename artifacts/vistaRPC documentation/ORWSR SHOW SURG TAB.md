---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWSR SHOW SURG TAB 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWSR SHOW SURG TAB{:/}
 tag | {::nomarkdown}SHOWSURG{:/}
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Check for presence of SR*3.0*100 (Surgery Electronic Signature) patch, andalso for parameter value.  If both TRUE, surgery tab will be displayed inCPRS.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SHOWSURG^[ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 Method comment | is Surgery ES patch installed?
 Code | ```  S ORY=$$PATCH^XPDUTL("SR*3.0*100")
 Q:+ORY=0
 S ORY=$$GET^XPAR("ALL","ORWOR SHOW SURGERY TAB",1)```




 Generated on January 14th 2017, 7:26:35 am