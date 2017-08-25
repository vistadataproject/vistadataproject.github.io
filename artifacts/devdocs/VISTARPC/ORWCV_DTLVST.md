---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWCV DTLVST<br/>
# ORWCV DTLVST

This API returns the text of a progress note or discharge summary relatedto a visit/appointment.

## Properties

Property | Value
--- | ---
Label | DTLVST
MUMPS Implementation | [ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [DTLVST^ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
Method Comment | return progress notes / discharge summary
Input Parameters | DFN, IEN, APPTINFO
Code | {::nomarkdown}<pre><code> N VISIT<br/> I $P(APPTINFO,";")="A" D  Q<br/> . S VISIT=$$APPT2VST^PXAPI(DFN,$P(APPTINFO,";",2),$P(APPTINFO,";",3))<br/> . I VISIT=0 S VISIT=+$$GETENC^PXAPI(DFN,$P(APPTINFO,";",2),$P(APPTINFO,";",3))<br/> . D DETNOTE^ORQQVS(.RPT,DFN,VISIT)<br/> I $P(APPTINFO,";")="V" D  Q<br/> . S VISIT=+$$GETENC^PXAPI(DFN,$P(APPTINFO,";",2),$P(APPTINFO,";",3))<br/> . D DETNOTE^ORQQVS(.RPT,DFN,VISIT)<br/> I $P(APPTINFO,";")="I" D  Q<br/> . S VISIT=+$$GETENC^PXAPI(DFN,$P(APPTINFO,";",2),$P(APPTINFO,";",3))<br/> . D DETSUM^ORQQVS(.RPT,DFN,VISIT)<br/> . K ^TMP("PXKENC",$J)<br/> I $P(APPTINFO,";")="R" D RCDTL^SDRROR</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}