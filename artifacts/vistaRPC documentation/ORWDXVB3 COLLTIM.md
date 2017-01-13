---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXVB3 COLLTIM 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB3 COLLTIM{:/}
 tag | {::nomarkdown}COLLTIM{:/}
 routine | [ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC checks the value of the parameter OR VBECS REMOVE COLL TIMEto determine if a default collection time should be presented on theVBECS order dialog.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get Collection Time Default Parameter Value
 Lines | ```
 S OROOT=+$$GET^XPAR("ALL","OR VBECS REMOVE COLL TIME",1,"I")```




 Generated on January 13th 2017, 6:55:29 am