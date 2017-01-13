---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXQ GETQNAM 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXQ GETQNAM{:/}
 tag | {::nomarkdown}GETQNAM{:/}
 routine | [ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return current quick order name.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return current quick name
 Input Parameters | {::nomarkdown}CRC{:/}
 Lines | {::nomarkdown} N ROOT S ROOT="ORWDQ "_CRC,VAL=""<br/> I '$D(^ORD(101.41,"B",ROOT)) Q<br/> S DLG=$O(^ORD(101.41,"B",ROOT,0))<br/> I '$L(VAL) S VAL=$P($G(^ORD(101.41,DLG,0)),U,2){:/}




 Generated on January 13th 2017, 7:15:27 am