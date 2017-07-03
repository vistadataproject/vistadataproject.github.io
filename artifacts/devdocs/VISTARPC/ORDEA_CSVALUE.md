---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORDEA CSVALUE
# ORDEA CSVALUE



Property | Value
--- | ---
Label | CSVALUE
Routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [CSVALUE^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
Method Comment | return 1 if the order (ORID) is a controlled substance, 0 for non-controlled substance
Input Parameters | ORID
Code | {::nomarkdown}<pre><code> N OROI,ORPSTYPE,ORRXDG<br/> S ORY=0,ORPSTYPE=""<br/> S OROI=$$OI^ORQOR2(+ORID)<br/> S ORRXDG=$$DGRX^ORQOR2(+ORID)<br/> I ORRXDG="UNIT DOSE MEDICATIONS" S ORPSTYPE="I"<br/> I ORRXDG="INPATIENT MEDICATIONS" S ORPSTYPE="I"<br/> I ORRXDG="IV MEDICATIONS" S ORPSTYPE="I"<br/> I ORRXDG="OUTPATIENT MEDICATIONS" S ORPSTYPE="O"<br/> I ORRXDG="PHARMACY" S ORPSTYPE="O"<br/> Q:ORPSTYPE=""<br/> D CSCHECK(.ORY,OROI,ORPSTYPE)<br/> S ORY=+ORY</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/uCore.pas">uCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}