---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORDG REVSTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORDG REVSTS{:/}
 tag | {::nomarkdown}REVSTS{:/}
 routine | [ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the status flags available for review orders action.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | REVSTS^[ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
 Method comment | Return the status flags available for review orders
 First comment | {::nomarkdown}<pre>N I,X,T S ILST=0<br/>F I=1:1 S T="ORDSTS+"_I_"^ORCHANG2" S X=$T(@T) Q:$P(X,";",4)="ZZZZ"  D<br/>. S ILST=ILST+1,LST(ILST)=$P(X,";",3)_U_$P(X,";",4)</pre>{:/}
 Code | {::nomarkdown}  D STSLST^ORCHANG2(.LST){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}