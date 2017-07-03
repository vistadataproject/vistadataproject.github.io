---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDXM DLGNAME
# ORWDXM DLGNAME

Return name(s) of dialog & base dialog given IEN in format:        VAL=InternalName^DisplayName^BaseDialogIEN^BaseDialogName

Property | Value
--- | ---
Label | DLGNAME
Routine | [ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [DLGNAME^ORWDXM](http://code.osehra.org/dox/Routine_ORWDXM_source.html)
Method Comment | Return name(s) of dialog &amp; base dialog given IEN
Input Parameters | DLG
First Comment | {::nomarkdown}<pre><code> VAL=InternalName^DisplayName^BaseDialogIEN^BaseDialogName</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N INT,EXT,BIEN,BNAM<br/> S INT=$P($G(^ORD(101.41,DLG,0)),U),EXT=$P($G(^(0)),U,2)<br/> S BNAM=INT,BIEN=DLG<br/> I $P(^ORD(101.41,DLG,0),U,4)="Q" D<br/> . N DGRP S DGRP=$P($G(^ORD(101.41,DLG,0)),U,5) Q:'DGRP<br/> . S BIEN=$$DEFDLG^ORWDXQ(DGRP),BNAM=$P(^ORD(101.41,BIEN,0),U)<br/> S VAL=INT_U_EXT_U_BIEN_U_BNAM</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}