---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXQ GETQNAM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXQ GETQNAM{:/}
 tag | {::nomarkdown}GETQNAM{:/}
 routine | [ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return current quick order name.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETQNAM^[ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
 Method comment | Return current quick name
 Input parameters | {::nomarkdown}CRC{:/}
 Code | {::nomarkdown}  N ROOT S ROOT="ORWDQ "_CRC,VAL=""<br> I '$D(^ORD(101.41,"B",ROOT)) Q<br> S DLG=$O(^ORD(101.41,"B",ROOT,0))<br> I '$L(VAL) S VAL=$P($G(^ORD(101.41,DLG,0)),U,2){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}