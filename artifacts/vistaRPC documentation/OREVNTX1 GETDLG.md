---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 GETDLG 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 GETDLG{:/}
 tag | {::nomarkdown}GETDLG{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return dialog infomation based on the DLGID
 Input Parameters | {::nomarkdown}DLGID{:/}
 Lines | ```
 N DIEN,DFID,DTXT,DTYP,DGRP,X0,X5
 S DLGID=+DLGID
 Q:'DLGID
 S X0=^ORD(101.41,DLGID,0),X5=$G(^(5))
 S DGRP=+$P(X0,U,5),DFID=+$P(X5,U,5),DTXT=$P(X5,U,4),DTYP=$P(X0,U,4)
    S:'$L(DTXT) DTXT=$P(X0,U,2)
 I $P(X0,U,4)="M" S:'DFID DFID=1001
 S LST=DLGID_";"_DFID_";"_DGRP_";"_DTYP_U_DTXT```




 Generated on January 13th 2017, 6:55:29 am