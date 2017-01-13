---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORB SETSORT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB SETSORT{:/}
 tag | {::nomarkdown}SETSORT{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Sets the GUI alert sort method for the user.  This is set when a user clicks on the GUI alert columns to change the display sorting.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | set notification sort method^direction for user
 Input Parameters | {::nomarkdown}SORT<br/>DIR{:/}
 Lines | ```
 D EN^XPAR(DUZ_";VA(200,","ORB SORT METHOD",1,SORT,.ORERR)
 I $L($G(DIR)) D EN^XPAR(DUZ_";VA(200,","ORB SORT DIRECTION",1,DIR,.ORERR)
```




 Generated on January 13th 2017, 6:55:29 am