---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXQ DLGNAME 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXQ DLGNAME{:/}
 tag | {::nomarkdown}DLGNAME{:/}
 routine | [ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return display name for a dialog.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return display name for a dialog (DELETE??)
 Input Parameters | {::nomarkdown}INAME{:/}
 Lines | ```{::nomarkdown} N IEN S IEN=$O(^ORD(101.41,"B",INAME,0))<br/> S VAL=$P($G(^ORD(101.41,IEN,5)),U,4)```{:/}




 Generated on January 13th 2017, 7:11:26 am