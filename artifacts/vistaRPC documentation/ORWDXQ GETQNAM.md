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

 Property | Value 
 --- | --- 
 Method | GETQNAM^[ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
 Method comment | Return current quick name
 Input parameters | {::nomarkdown}CRC{:/}
 Code | {::nomarkdown}  N ROOT S ROOT="ORWDQ "_CRC,VAL=""<br> I '$D(^ORD(101.41,"B",ROOT)) Q<br> S DLG=$O(^ORD(101.41,"B",ROOT,0))<br> I '$L(VAL) S VAL=$P($G(^ORD(101.41,DLG,0)),U,2){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}