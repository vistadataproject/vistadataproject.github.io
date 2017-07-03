---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE SAVE
# ORWPCE SAVE

Saves PCE information entered into CPRS GUI.

Property | Value
--- | ---
Label | SAVE
Routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [SAVE^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | save PCE information
Input Parameters | PCELIST, NOTEIEN, ORLOC
Code | {::nomarkdown}<pre><code> N VSTR,GMPLUSER<br/> N ZTIO,ZTRTN,ZTDTH,ZTSAVE,ZTDESC,ZTSYNC,ZTSK<br/> S VSTR=$P(PCELIST(1),U,4) K ^TMP("ORWPCE",$J,VSTR)<br/> M ^TMP("ORWPCE",$J,VSTR)=PCELIST<br/> S GMPLUSER=$$CLINUSER^ORQQPL1(DUZ),NOTEIEN=+$G(NOTEIEN)<br/> S ZTIO="ORW/PXAPI RESOURCE",ZTRTN="DQSAVE^ORWPCE1",ZTDTH=$H<br/> S ZTSAVE("PCELIST(")="",ZTDESC="Data from CPRS to PCE"<br/> S ZTSAVE("GMPLUSER")="",ZTSAVE("NOTEIEN")="",ZTSAVE("DUZ")=""<br/> I VSTR'["E" S ZTSYNC="ORW"_VSTR<br/> S ZTSAVE("ORLOC")=""<br/> D ^%ZTLOAD I '$D(ZTSK) D DQSAVE^ORWPCE1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}