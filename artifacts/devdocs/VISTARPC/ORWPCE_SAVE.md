---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE SAVE<br/>
# ORWPCE SAVE

Saves PCE information entered into CPRS GUI.

## Properties

Property | Value
--- | ---
Label | SAVE
MUMPS Implementation | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [SAVE^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | save PCE information
Input Parameters | PCELIST, NOTEIEN, ORLOC
Code | {::nomarkdown}<pre><code> N VSTR,GMPLUSER<br/> N ZTIO,ZTRTN,ZTDTH,ZTSAVE,ZTDESC,ZTSYNC,ZTSK<br/> S VSTR=$P(PCELIST(1),U,4) K ^TMP("ORWPCE",$J,VSTR)<br/> M ^TMP("ORWPCE",$J,VSTR)=PCELIST<br/> S GMPLUSER=$$CLINUSER^ORQQPL1(DUZ),NOTEIEN=+$G(NOTEIEN)<br/> S ZTIO="ORW/PXAPI RESOURCE",ZTRTN="DQSAVE^ORWPCE1",ZTDTH=$H<br/> S ZTSAVE("PCELIST(")="",ZTDESC="Data from CPRS to PCE"<br/> S ZTSAVE("GMPLUSER")="",ZTSAVE("NOTEIEN")="",ZTSAVE("DUZ")=""<br/> I VSTR'["E" S ZTSYNC="ORW"_VSTR<br/> S ZTSAVE("ORLOC")=""<br/> D ^%ZTLOAD I '$D(ZTSK) D DQSAVE^ORWPCE1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}