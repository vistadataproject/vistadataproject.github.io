---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 GETDLG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 GETDLG{:/}
 tag | {::nomarkdown}GETDLG{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETDLG^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return dialog infomation based on the DLGID
 Input parameters | {::nomarkdown}DLGID{:/}
 Code | {::nomarkdown}  N DIEN,DFID,DTXT,DTYP,DGRP,X0,X5<br> S DLGID=+DLGID<br> Q:'DLGID<br> S X0=^ORD(101.41,DLGID,0),X5=$G(^(5))<br> S DGRP=+$P(X0,U,5),DFID=+$P(X5,U,5),DTXT=$P(X5,U,4),DTYP=$P(X0,U,4)<br>    S:'$L(DTXT) DTXT=$P(X0,U,2)<br> I $P(X0,U,4)="M" S:'DFID DFID=1001<br> S LST=DLGID_";"_DFID_";"_DGRP_";"_DTYP_U_DTXT{:/}


### CPRS

[Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}