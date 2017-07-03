---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPS1 NEWDLG
# ORWPS1 NEWDLG

Returns order dialog information for a new medication.

Property | Value
--- | ---
Label | NEWDLG
Routine | [ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [NEWDLG^ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html)
Method Comment | Return order dialog info for New Medication
Input Parameters | INPAT
Code | {::nomarkdown}<pre><code> N DGRP,ID,IEN,TXT,TYP,X,X0,X5<br/> I INPAT S X=$$GET^XPAR("ALL","ORWDX NEW MED","i","I")<br/> E  S X=$$GET^XPAR("ALL","ORWDX NEW MED","o","I")<br/> S IEN=+X,X0=$G(^ORD(101.41,IEN,0)),X5=$G(^(5))<br/> S TYP=$P(X0,U,4),DGRP=+$P(X0,U,5),ID=+$P(X5,U,5),TXT=$P(X5,U,4)<br/> S Y=IEN_";"_ID_";"_DGRP_";"_TYP_U_TXT</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMeds.pas">rMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}