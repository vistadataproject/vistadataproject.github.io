---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDAL32 LOAD FOR EDIT
# ORWDAL32 LOAD FOR EDIT



Property | Value
--- | ---
Label | EDITLOAD
Routine | [ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
Return Type | GLOBAL ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [EDITLOAD^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
Method Comment | Load an allergy/adverse reaction for editing
Input Parameters | ORALIEN
Code | {::nomarkdown}<pre><code> Q:+$G(ORALIEN)=0<br/> N ORNODE,I<br/> S ORNODE=$NAME(^TMP("GMRA",$J)),I=0<br/> D GETREC^GMRAGUI(ORALIEN,ORNODE)<br/> S Y=ORNODE</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODAllergy.pas">Orders/rODAllergy.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}