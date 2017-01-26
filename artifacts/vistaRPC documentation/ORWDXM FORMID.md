---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXM FORMID 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXM FORMID{:/}
 tag | {::nomarkdown}FORMID{:/}
 routine | [ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return the FormID for a dialog entry.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | FORMID^[ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 Method comment | Return the FormID for a dialog
 Input parameters | {::nomarkdown}DLG{:/}
 Code | {::nomarkdown}  S VAL=+$P($G(^ORD(101.41,DLG,5)),U,5) Q:VAL<br> I $P($G(^ORD(101.41,DLG,0)),U,4)="Q" D<br> . N DGRP S DGRP=$P($G(^ORD(101.41,DLG,0)),U,5) Q:'DGRP<br> . S DLG=$$DEFDLG^ORWDXQ(DGRP) Q:'DLG<br> . S VAL=+$P($G(^ORD(101.41,DLG,5)),U,5)<br> I 'VAL,$P($G(^ORD(101.41,DLG,0)),U,7)=$O(^DIC(9.4,"C","OR",0)) D<br> . S VAL=152  ; use generic "on the fly" form{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}