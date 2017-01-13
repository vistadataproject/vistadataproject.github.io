---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR33 LASTTIME 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR33 LASTTIME{:/}
 tag | {::nomarkdown}LASTTIME{:/}
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}When entering quick orders from an order menu, the ^TMP(\ORECALL\,$J)array contains the last responses entered.  This RPC allows retrieval ofthe previous order's collection time from that array.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get last collection time used from ^TMP("ORECALL",$J) array
 Lines | ```
 N ORDIALOG,ORTYPE,ORTIME
 S ORDIALOG=$O(^ORD(101.41,"B","LR OTHER LAB TESTS",0))
 S ORTYPE=$O(^ORD(101.41,"B","OR GTX COLLECTION TYPE",0))
 S ORTIME=$O(^ORD(101.41,"B","OR GTX START DATE/TIME",0))
 S ORY=$$RECALL^ORCD(ORTYPE,1)_U_$$RECALL^ORCD(ORTIME,1)```




 Generated on January 13th 2017, 6:55:29 am