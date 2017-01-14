---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXM DLGNAME 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXM DLGNAME{:/}
 tag | {::nomarkdown}DLGNAME{:/}
 routine | [ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return name(s) of dialog & base dialog given IEN in format:        VAL=InternalName^DisplayName^BaseDialogIEN^BaseDialogName{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DLGNAME^[ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 Method comment | Return name(s) of dialog & base dialog given IEN
 First comment | {::nomarkdown}VAL=InternalName^DisplayName^BaseDialogIEN^BaseDialogName{:/}
 Input parameters | {::nomarkdown}DLG{:/}
 Code | ```  N INT,EXT,BIEN,BNAM
 S INT=$P($G(^ORD(101.41,DLG,0)),U),EXT=$P($G(^(0)),U,2)
 S BNAM=INT,BIEN=DLG
 I $P(^ORD(101.41,DLG,0),U,4)="Q" D
 . N DGRP S DGRP=$P($G(^ORD(101.41,DLG,0)),U,5) Q:'DGRP
 . S BIEN=$$DEFDLG^ORWDXQ(DGRP),BNAM=$P(^ORD(101.41,BIEN,0),U)
 S VAL=INT_U_EXT_U_BIEN_U_BNAM```




 Generated on January 14th 2017, 7:26:35 am