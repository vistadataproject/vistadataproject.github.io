---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR ACTION TEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR ACTION TEXT{:/}
 tag | {::nomarkdown}ACTXT{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ACTXT^[ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 Method comment | Return detail action information
 Input parameters | {::nomarkdown}ORIFN{:/}
 Code | {::nomarkdown}  N ORI,CNT,OR0,OR3,OR6,ACTION<br> K ^TMP("ORACTXT",$J)<br> S ORY="^TMP(""ORACTXT"",$J)",ORI=$P(ORIFN,";",2)<br> S CNT=0,ORIFN=+ORIFN,OR0=$G(^OR(100,ORIFN,0)),OR3=$G(^(3)),OR6=$G(^(6))<br> F  S ORI=$O(^OR(100,+ORIFN,8,ORI)) Q:ORI'>0  S ACTION=$G(^(ORI,0)) D ACT^ORQ20<br> S ORY=$NA(^TMP("ORACTXT",$J)),@ORY=""{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}