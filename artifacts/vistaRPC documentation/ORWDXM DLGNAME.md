---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXM DLGNAME 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXM DLGNAME{:/}
 tag | {::nomarkdown}DLGNAME{:/}
 routine | [ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return name(s) of dialog & base dialog given IEN in format:        VAL=InternalName^DisplayName^BaseDialogIEN^BaseDialogName{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return name(s) of dialog & base dialog given IEN
 Input Parameters | {::nomarkdown}DLG{:/}
 Lines | ```
 N INT,EXT,BIEN,BNAM
 S INT=$P($G(^ORD(101.41,DLG,0)),U),EXT=$P($G(^(0)),U,2)
 S BNAM=INT,BIEN=DLG
 I $P(^ORD(101.41,DLG,0),U,4)="Q" D
 . N DGRP S DGRP=$P($G(^ORD(101.41,DLG,0)),U,5) Q:'DGRP
 . S BIEN=$$DEFDLG^ORWDXQ(DGRP),BNAM=$P(^ORD(101.41,BIEN,0),U)
 S VAL=INT_U_EXT_U_BIEN_U_BNAM```
 Leading comment lines | {::nomarkdown}VAL=InternalName^DisplayName^BaseDialogIEN^BaseDialogName{:/}




 Generated on January 13th 2017, 6:55:29 am