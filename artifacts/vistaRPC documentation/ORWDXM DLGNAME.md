---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXM DLGNAME 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXM DLGNAME{:/}
 tag | {::nomarkdown}DLGNAME{:/}
 routine | [ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return name(s) of dialog & base dialog given IEN in format:        VAL=InternalName^DisplayName^BaseDialogIEN^BaseDialogName{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DLGNAME^[ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 Method comment | Return name(s) of dialog & base dialog given IEN
 Input parameters | {::nomarkdown}DLG{:/}
 First comment | {::nomarkdown}<pre> VAL=InternalName^DisplayName^BaseDialogIEN^BaseDialogName</pre>{:/}
 Code | {::nomarkdown}  N INT,EXT,BIEN,BNAM<br> S INT=$P($G(^ORD(101.41,DLG,0)),U),EXT=$P($G(^(0)),U,2)<br> S BNAM=INT,BIEN=DLG<br> I $P(^ORD(101.41,DLG,0),U,4)="Q" D<br> . N DGRP S DGRP=$P($G(^ORD(101.41,DLG,0)),U,5) Q:'DGRP<br> . S BIEN=$$DEFDLG^ORWDXQ(DGRP),BNAM=$P(^ORD(101.41,BIEN,0),U)<br> S VAL=INT_U_EXT_U_BIEN_U_BNAM{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}